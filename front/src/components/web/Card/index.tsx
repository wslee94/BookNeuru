import React from 'react';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import noneImage from 'public/img/none_image.png';
import { Link } from 'react-router-dom';

interface CardProps {
  children: object;
  link?: string;
  image?: string;
  imageHeight?: number;
  imageAlt?: string;
  actionButton?: object;
  style?: object;
}

function Card(props: CardProps) {
  const { link, children, image, imageHeight, imageAlt, actionButton, style } = props;

  if (link) {
    return (
      <Link to={link}>
        <MuiCard style={style}>
          <CardActionArea>
            {image ? (
              <div style={{ display: 'flex', justifyContent: 'center' }}>
                <CardMedia
                  component="img"
                  alt={imageAlt}
                  image={image === 'no-image' ? noneImage : image}
                  style={{ height: imageHeight, objectFit: 'fill' }}
                />
              </div>
            ) : null}
            <CardContent>{children}</CardContent>
          </CardActionArea>
          {actionButton && <CardActions>{actionButton}</CardActions>}
        </MuiCard>
      </Link>
    );
  }
  return (
    <MuiCard style={style}>
      <CardActionArea>
        {image ? (
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <CardMedia
              component="img"
              alt={imageAlt}
              image={image === 'no-image' ? noneImage : image}
              style={{ height: imageHeight, objectFit: 'fill' }}
            />
          </div>
        ) : null}
        <CardContent>{children}</CardContent>
      </CardActionArea>
      {actionButton && <CardActions>{actionButton}</CardActions>}
    </MuiCard>
  );
}

Card.defaultProps = {
  link: '',
  image: '',
  imageHeight: 140,
  imageAlt: '',
  actionButton: undefined,
  style: undefined,
};

export default Card;
