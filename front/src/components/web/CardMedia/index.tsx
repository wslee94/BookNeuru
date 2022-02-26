import React from 'react';
import MuiCard from '@material-ui/core/Card';
import MuiCardMedia from '@material-ui/core/CardMedia';
import noneImage from 'public/img/none_image.png';
import CardActionArea from '@material-ui/core/CardActionArea';

interface CardMediaProps {
  onClick?: () => void;
  image: string;
  imageWidth?: number;
  imageHeight?: number;
  imageAlt?: string;
}

function CardMedia(props: CardMediaProps) {
  const { image, imageWidth, imageHeight, onClick, imageAlt } = props;
  return (
    <MuiCard style={{ width: imageWidth }}>
      <CardActionArea onClick={onClick}>
        <MuiCardMedia
          component="img"
          image={image === 'no-image' ? noneImage : image}
          alt={imageAlt}
          style={{ width: imageWidth, height: imageHeight, objectFit: 'fill' }}
        />
      </CardActionArea>
    </MuiCard>
  );
}

CardMedia.defaultProps = {
  onClick: undefined,
  imageWidth: 220,
  imageHeight: 320,
  imageAlt: '',
};

export default CardMedia;
