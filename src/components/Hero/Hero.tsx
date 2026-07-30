import { useState, useEffect, type FC } from 'react';
import { Card } from '@mui/material';
import { ArrowBackIos, ArrowForwardIos } from '@mui/icons-material';
import {
  HeroContainer,
  StyledImage,
  AvatarContainer,
  StyledAvatar,
  CarouselWrapper,
  ArrowButton,
  DotsContainer,
  Dot
} from './style';

interface HeroProps {
  images?: (string | null | undefined)[];
  avatar?: string | null | undefined;
  url?: string | null | undefined;
}

const Hero: FC<HeroProps> = ({ images = [], avatar, url }) => {
  const validImages = images.filter(Boolean) as string[];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (validImages.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validImages.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [validImages]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? validImages.length - 1 : prev - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validImages.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  if (validImages.length === 0 && !avatar && !url) return null;

  return (
    <HeroContainer>
      {validImages.length > 0 && (
        <Card>
          <CarouselWrapper>
            <StyledImage
              src={validImages[currentIndex]}
              alt={`Image ${currentIndex + 1}`}
            />
            {validImages.length > 1 && (
              <>
                <ArrowButton left onClick={handlePrev}>
                  <ArrowBackIos fontSize="small" />
                </ArrowButton>
                <ArrowButton onClick={handleNext}>
                  <ArrowForwardIos fontSize="small" />
                </ArrowButton>
              </>
            )}
            <DotsContainer>
              {validImages.map((_, index) => (
                <Dot
                  key={index}
                  active={index === currentIndex}
                  onClick={() => handleDotClick(index)}
                />
              ))}
            </DotsContainer>
          </CarouselWrapper>
        </Card>
      )}

      {avatar && (
        <AvatarContainer>
          {url ? (
            <a href={url} target="_blank" rel="noreferrer">
              <StyledAvatar alt="avatar" src={avatar} />
            </a>
          ) : (
            <StyledAvatar alt="avatar" src={avatar} />
          )}
        </AvatarContainer>
      )}
    </HeroContainer>
  );
};

export default Hero;
