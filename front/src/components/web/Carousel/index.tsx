import React from 'react';
import RMCarousel from 'react-multi-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface CarouselProps {
  children: object;
  responsive: {
    [key: string]: {
      breakpoint: {
        max: number;
        min: number;
      };
      items: number;
      partialVisibilityGutter?: number;
      paritialVisibilityGutter?: number;
      slidesToSlide?: number;
    };
  };
  header?: object;
}

function CustomBottomButton(obj: any) {
  const { next, previous, ...rest } = obj;
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  const isFirst = currentSlide === 0;
  const isLast = currentSlide + slidesToShow === totalItems;

  return (
    <div style={{ textAlign: 'right', padding: '0px 10px' }}>
      <IconButton onClick={() => previous()} style={isFirst ? { visibility: 'hidden' } : undefined}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={() => next()} style={isLast ? { visibility: 'hidden' } : undefined}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
}

function Carousel(props: CarouselProps) {
  const { children, header, responsive } = props;

  return (
    <div>
      {header || null}
      <RMCarousel
        responsive={responsive}
        arrows={false}
        renderButtonGroupOutside
        customButtonGroup={<CustomBottomButton />}
      >
        {children}
      </RMCarousel>
    </div>
  );
}

Carousel.defaultProps = {
  header: null,
};

export default Carousel;
