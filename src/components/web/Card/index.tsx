import React from 'react';
import MuiCard from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';

interface CardProps {
  children: object;
  onClick?: () => void;
  image?: string;
  imageHeight?: number;
  imageAlt?: string;
  actionButton?: object;
  style?: object;
}

function Card(props: CardProps) {
  const { onClick, children, image, imageHeight = 140, imageAlt, actionButton, style } = props;

  return (
    <MuiCard style={style}>
      <CardActionArea>
        {image ? (
          <CardMedia component="img" alt={imageAlt} image={image} style={{ height: imageHeight, width: '100%' }} />
        ) : null}
        <CardContent>{children}</CardContent>
      </CardActionArea>
      {actionButton && <CardActions>{actionButton}</CardActions>}
    </MuiCard>
  );
}

export default Card;
