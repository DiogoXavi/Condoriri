import { useState, useEffect, type FC } from "react";

import { Card } from "@mui/material";

import { ArrowBackIos, ArrowForwardIos } from "@mui/icons-material";

import {
  HeroContainer,
  StyledImage,
  CarouselWrapper,
  ArrowButton,
  DotsContainer,
  Dot,
  SlidesContainer,
  Slide,
} from "./style";

interface SponsorItem {
  banner: string;
  phoneNumber?: number;
  url?: string;
  message: string;
}

interface SponsorsProps {
  data?: SponsorItem[];
}

const Sponsors: FC<SponsorsProps> = ({ data = [] }) => {
  const validSponsors = data.filter((item) => item.banner);

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (validSponsors.length <= 1) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % validSponsors.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [validSponsors.length]);

  const handlePrev = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? validSponsors.length - 1 : prev - 1,
    );
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % validSponsors.length);
  };

  const handleDotClick = (index: number) => {
    setCurrentIndex(index);
  };

  return (
    <HeroContainer>
      {validSponsors.length > 0 && (
        <Card
          sx={{
            borderRadius: "16px",
            overflow: "hidden",
            position: "relative",
            width: "100%",
          }}
        >
          <CarouselWrapper>
            <SlidesContainer
              style={{
                transform: `translate3d(-${currentIndex * 100}%, 0, 0)`,
              }}
            >
              {validSponsors.map((sponsor, index) => (
                <Slide key={index}>
                  <a
                    href={
                      sponsor.url ||
                      `https://wa.me/54${sponsor.phoneNumber}?text=${encodeURIComponent(
                        sponsor.message,
                      )}`
                    }
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <StyledImage
                      src={sponsor.banner}
                      alt={`Sponsor ${index + 1}`}
                    />
                  </a>
                </Slide>
              ))}
            </SlidesContainer>

            {validSponsors.length > 1 && (
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
              {validSponsors.map((_, index) => (
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
    </HeroContainer>
  );
};

export default Sponsors;
