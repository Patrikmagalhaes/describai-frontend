import { useState } from 'react';
import { AnimatePresence } from 'motion/react';
import { Sparkles } from 'lucide-react';
import confetti from 'canvas-confetti';

import { HeroContent } from '../../components/hero/HeroContent';
import { Card } from '../../components/common/Card';
import { SectionTitle } from '../../components/common/SectionTitle';
import { UploadArea } from '../../components/upload/UploadArea';
import { ToggleGroup } from '../../components/common/ToggleGroup';
import { Button } from '../../components/common/Button';
import { ResultSection } from '../../components/results/ResultSection';
import { GlowBackground } from '../../components/layout/GlowBackground';

import { useUpload } from '../../hooks/useUpload';
import { useDescriptionGenerator } from '../../hooks/useDescriptionGenerator';


import * as S from './styles';


export default function Home() {
  type UITone =
    | 'Profissional'
    | 'SEO'
    | 'Criativo'
    | 'Acessível';

  type UILength =
    | 'Curto'
    | 'Médio'
    | 'Longo';

  type UILanguage =
    | 'Português'
    | 'English'
    | 'Español';

  const [tone, setTone] =
    useState<UITone>('Profissional');

  const [length, setLength] =
    useState<UILength>('Médio');

  const [language, setLanguage] =
    useState<UILanguage>('Português');

  const toneMap = {
    Profissional: 'formal',
    SEO: 'seo',
    Criativo: 'natural',
    Acessível: 'detailed',
  } as const;

  const sizeMap = {
    Curto: 'short',
    Médio: 'medium',
    Longo: 'long',
  } as const;

  const languageMap = {
    Português: 'pt',
    English: 'en',
    Español: 'es',
  } as const;


  const { preview, file, onDrop, clear } = useUpload();
  const {
    generate,
    result,
    status,
    reset,
    error
  } = useDescriptionGenerator();

  const handleGenerate = async () => {
    if (!file) return;

    await generate(file,
      toneMap[tone],
      languageMap[language],
      sizeMap[length]
    );

    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
      colors: ['#8B5CF6', '#3B82F6', '#ffffff']
    });
  };

  const handleClear = () => {
    clear();
    reset();
  };
  return (
    <S.PageWrapper>
      <GlowBackground />

      <S.Nav>
        <S.LogoWrapper>
          <S.LogoIcon>
            <Sparkles className="w-6 h-6 text-white" />
          </S.LogoIcon>
          <S.LogoText>Describ<span>AI</span></S.LogoText>
        </S.LogoWrapper>
        <S.NavLinks>
          <S.NavLink href="#" active>App</S.NavLink>
          <S.NavLink href="#">Docs</S.NavLink>
          <S.NavLink href="#">Pricing</S.NavLink>
          <S.NavLink href="#">Login</S.NavLink>
        </S.NavLinks>
      </S.Nav>

      <S.MainContent>
        {/* Left Column: Hero */}
        <S.HeroColumn>
          <HeroContent />
        </S.HeroColumn>

        {/* Right Column: App Panel */}
        <S.AppColumn
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          <Card glow={status === 'processing'}>
            <S.AppCardDecoration />

            <SectionTitle label="Envie sua imagem" />
            <UploadArea onDrop={onDrop} preview={preview} onClear={handleClear} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              <S.ControlGrid>
                <div>
                  <SectionTitle label="Idioma" />
                  <ToggleGroup
                    options={['PT', 'EN', 'ES']}
                    value={language === 'Português' ? 'PT' : language === 'English' ? 'EN' : 'ES'}
                    onChange={(val: string) => setLanguage(val === 'PT' ? 'Português' : val === 'EN' ? 'English' : 'Español')}
                  />
                </div>
                <div>
                  <SectionTitle label="Tom da escrita" />
                  <S.SelectWrapper>
                    <S.StyledSelect
                      value={tone}
                      onChange={(e) => setTone(e.target.value as UITone)}
                    >
                      <option>Profissional</option>
                      <option>SEO</option>
                      <option>Criativo</option>
                      <option>Acessível</option>
                    </S.StyledSelect>
                  </S.SelectWrapper>
                </div>
              </S.ControlGrid>

              <div>
                <SectionTitle label="Tamanho" />
                <S.SizeGrid>
                  {(['Curto', 'Médio', 'Longo'] as UILength[]).map((l) => (
                    <S.SizeButton
                      key={l}
                      active={length === l}
                      onClick={() => setLength(l)}
                    >
                      {l}
                    </S.SizeButton>
                  ))}
                </S.SizeGrid>
              </div>

              <Button
                onClick={handleGenerate}
                disabled={!preview || status === 'processing'}
                isLoading={status === 'processing'}
                className="btn-full"
                icon={<Sparkles size={18} />}
              >
                Gerar descrição inteligente
                {error && (
                  <S.ErrorMessage>
                    {error}
                  </S.ErrorMessage>
                )}
              </Button>
            </div>

            {/* Results Area */}
            <AnimatePresence>
              {result && (
                <S.ResultsWrapper
                  initial={{ opacity: 0, height: 0, marginTop: 0 }}
                  animate={{ opacity: 1, height: 'auto', marginTop: 40 }}
                  exit={{ opacity: 0, height: 0, marginTop: 0 }}
                >
                  <ResultSection
                    title="Alt Text"
                    content={result.altText}
                    id="alt"
                  />

                  <ResultSection
                    title="Caption"
                    content={result.caption}
                    id="caption"
                  />

                  <ResultSection
                    title="SEO Description"
                    content={result.seoDescription}
                    id="seo"
                  />

                  <ResultSection
                    title="HTML Ready"
                    content={result.html}
                    id="html"
                    isCode
                  />

                  <ResultSection
                    title="Keywords"
                    content={result.keywords.join(', ')}
                    id="keywords"
                  />
                </S.ResultsWrapper>
              )}
            </AnimatePresence>

            {/* Empty State Mock Loading Area */}
            {status !== 'processing' && !result && (
              <S.EmptyState>
                <S.SkeletonWrapper>
                  <S.SkeletonIcon />
                  <S.SkeletonLines>
                    <S.SkeletonLine width="75%" />
                    <S.SkeletonLine width="50%" />
                  </S.SkeletonLines>
                </S.SkeletonWrapper>
              </S.EmptyState>
            )}
          </Card>
        </S.AppColumn>
      </S.MainContent>

      {/* Footer Decorative */}
      <S.FooterSteps>
        <S.StepItem active={!preview}>01. Upload</S.StepItem>
        <S.StepDivider />
        <S.StepItem active={!!preview && !result}>02. Configure</S.StepItem>
        <S.StepDivider />
        <S.StepItem active={!!result}>03. Result</S.StepItem>
      </S.FooterSteps>
    </S.PageWrapper>
  );
}
