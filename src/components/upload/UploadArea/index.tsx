import { useDropzone } from 'react-dropzone';
import { Upload, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import * as S from './styles';

interface UploadAreaProps {
  onDrop: (files: File[]) => void;
  preview: string | null;
  onClear: () => void;
}

export const UploadArea = ({ onDrop, preview, onClear }: UploadAreaProps) => {
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.jpeg', '.jpg', '.png', '.webp']
    },
    multiple: false
  } as any);

  return (
    <S.AreaWrapper>
      <AnimatePresence mode="wait">
        {preview ? (
          <motion.div
            key="preview"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <S.PreviewContainer>
              <S.PreviewImage src={preview} alt="Upload preview" />
              <S.PreviewOverlay>
                <S.ClearButton 
                  onClick={onClear}
                  title="Remover imagem"
                >
                  <X size={24} />
                </S.ClearButton>
              </S.PreviewOverlay>
            </S.PreviewContainer>
          </motion.div>
        ) : (
          <motion.div
            key="dropzone"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
          >
            <S.DropzoneContainer
              {...getRootProps()}
              $isActive={isDragActive}
            >
              <input {...getInputProps()} />
              <S.IconWrapper>
                <Upload className={`w-8 h-8 transition-colors ${isDragActive ? 'text-[#9333ea]' : 'text-white/40'}`} />
              </S.IconWrapper>
              <S.MainText>Arraste sua imagem aqui</S.MainText>
              <S.SubText>ou clique para enviar</S.SubText>
              <S.FormatText>JPG, PNG, WEBP até 10MB</S.FormatText>
            </S.DropzoneContainer>
          </motion.div>
        )}
      </AnimatePresence>
    </S.AreaWrapper>
  );
};
