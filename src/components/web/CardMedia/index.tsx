import React from 'react';
import MuiCard from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import MuiCardMedia from '@material-ui/core/CardMedia';
import noneImage from 'public/img/none_image.png';
import CardActionArea from '@material-ui/core/CardActionArea';

interface CardMediaProps {
  children: object;
  onClick?: () => void;
  image: string;
  imageWidth?: number;
  contentWidth?: number;
  imageAlt?: string;
  style?: object;
}

function CardMedia(props: CardMediaProps) {
  const { style, image, imageWidth = '50%', contentWidth = '50%', children, onClick, imageAlt } = props;
  return (
    <MuiCard>
      <CardActionArea onClick={onClick}>
        <div style={style ? { display: 'flex', ...style } : { display: 'flex' }}>
          <CardContent style={{ width: '50%' }}>{children}</CardContent>
          <MuiCardMedia
            component="img"
            image={image === 'no-image' ? noneImage : image}
            alt={imageAlt}
            style={{ width: imageWidth, objectFit: 'fill' }}
          />
        </div>
      </CardActionArea>
    </MuiCard>
  );
}

export default CardMedia;
