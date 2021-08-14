import React from 'react';
import RMCarousel from 'react-multi-carousel';
import IconButton from '@material-ui/core/IconButton';
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';

interface CarouselProps {
  children: object;
  header?: object;
}

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 5,
  },
  labtop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 4,
  },
  largeTablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 3,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const CustomBottomButton = (obj: any) => {
  const { next, previous, goToSlide, ...rest } = obj;
  const {
    carouselState: { currentSlide, slidesToShow, totalItems },
  } = rest;

  const isFirst = currentSlide === 0;
  const isLast = currentSlide + slidesToShow === totalItems;

  return (
    <div style={{ textAlign: 'right', padding: '0px 10px' }}>
      <IconButton onClick={() => previous()} style={isFirst ? { display: 'none' } : undefined}>
        <ArrowBackIcon />
      </IconButton>
      <IconButton onClick={() => obj.next()} style={isLast ? { display: 'none' } : undefined}>
        <ArrowForwardIcon />
      </IconButton>
    </div>
  );
};

function Carousel(props: CarouselProps) {
  const { children, header } = props;

  return (
    <div className="container-horizontal-center">
      <div className="item-wide-width">
        {header ? header : null}
        <RMCarousel
          responsive={responsive}
          arrows={false}
          renderButtonGroupOutside={true}
          customButtonGroup={<CustomBottomButton />}
        >
          {children}
        </RMCarousel>
      </div>
    </div>
  );
}

export default Carousel;
