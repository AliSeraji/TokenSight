import React from "react";
import Image from "next/image";
import { ImageOff } from "lucide-react";
import styled from "styled-components";

interface SafeImageProps {
  src: string | null | undefined;
  alt: string;
  width: number;
  height: number;
  className?: string;
}

const ImageContainer = styled.div<{ $width: number; $height: number }>`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ $width }) => $width}px;
  height: ${({ $height }) => $height}px;
  background: ${({ theme }) => theme.GrayBlueDark20};
  border-radius: 100%;
  overflow: hidden;
`;

const FallbackContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.GrayText};
`;

const StyledImage = styled(Image)`
  object-fit: cover;
  width: 100%;
  height: 100%;
`;

const SafeImage: React.FC<SafeImageProps> = ({
  src,
  alt,
  width,
  height,
  className,
}) => {
  if (!src) {
    return (
      <ImageContainer $width={width} $height={height} className={className}>
        <FallbackContainer>
          <ImageOff size={Math.min(width, height) * 0.5} />
        </FallbackContainer>
      </ImageContainer>
    );
  }

  return (
    <ImageContainer $width={width} $height={height} className={className}>
      <StyledImage
        src={src}
        alt={alt}
        width={width}
        height={height}
        priority={false}
      />
    </ImageContainer>
  );
};

export default SafeImage;
