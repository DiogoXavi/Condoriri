import React from 'react';
import { Root, Img } from './styles';

interface ProductImageProps {
  img: string;
  width?: string | number;
  height?: string | number;
}

const TeamImage: React.FC<ProductImageProps> = ({ img, width, height }) => {
  return (
    <Root width={width} height={height}>
      <Img src={img} alt="Imagen del equipo" />
    </Root>
  );
};

export default TeamImage;
