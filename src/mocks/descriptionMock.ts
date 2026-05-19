import type{ ImageDescription } from '../types/description';

export const mockDescriptions: Record<string, ImageDescription> = {
  default: {
    altText: "Uma pessoa trabalhando em um laptop em um café moderno com luz natural.",
    seoDescription: "A imagem retrata o estilo de vida nômade digital, mostrando um profissional focado em seu trabalho em um ambiente acolhedor e produtivo.",
    html: '<img src="imagem.jpg" alt="Pessoa trabalhando em laptop em café moderno" class="responsive-img">',
    fullDescription: "A fotografia captura um momento espontâneo de produtividade. No centro, vemos um laptop de última geração sobre uma mesa de madeira rústica. Uma pessoa, cujas mãos estão visíveis no teclado, parece concentrada. Ao fundo, o café possui uma decoração minimalista com plantas penduradas e janelas amplas que permitem a entrada de uma luz suave de fim de tarde, criando uma atmosfera tranquila e inspiradora."
  },
  Profissional: {
    altText: "Visão superior de uma mesa de escritório organizada com tecnologia moderna.",
    seoDescription: "Otimize seu fluxo de trabalho com as melhores ferramentas digitais e um ambiente de trabalho profissional.",
    html: '<img src="office.jpg" alt="Mesa de escritório profissional e organizada">',
    fullDescription: "Esta imagem representa a excelência profissional e organização. Cada elemento na mesa está posicionado para maximizar a eficiência. A iluminação é neutra, ideal para longas jornadas de trabalho, refletindo um compromisso com o resultado e a seriedade corporativa."
  }
};

export const getMockDescription = (tone: string): ImageDescription => {
  return mockDescriptions[tone] || mockDescriptions.default;
};
