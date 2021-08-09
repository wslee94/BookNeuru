import React from 'react';
import Card from 'components/web/Card';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const banners = [{}];
const recruiting = [
  { title: '모임제목1', desc: '모임설명1', location: '서울시 강남구', image: '' },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: '' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: '' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: '' },
  { title: '모임제목5', desc: '모임설명5', location: '경기도 분당구', image: '' },
  { title: '모임제목6', desc: '모임설명6', location: '경기도 분당구', image: '' },
  { title: '모임제목7', desc: '모임설명7', location: '경기도 분당구', image: '' },
  { title: '모임제목8', desc: '모임설명8', location: '경기도 분당구', image: '' },
  { title: '모임제목9', desc: '모임설명9', location: '경기도 분당구', image: '' },
  { title: '모임제목10', desc: '모임설명10', location: '경기도 분당구', image: '' },
];
const activating = [{}];
const mostViewBooks = [{}];

function Home() {
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

  return (
    <div className="container-horizontal-center">
      <div className="item-wide-width">
        <div style={{ fontSize: '15px', fontWeight: 'bold', padding: '0px 10px' }}>모집중인 모임</div>
        <Carousel responsive={responsive}>
          {recruiting.map((n) => (
            <div style={{ padding: 10 }}>
              <Card image={n.image}>
                <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{n.title}</span>
                <div style={{ marginTop: '10px' }}>{n.desc}</div>
                <div style={{ marginTop: '10px', textAlign: 'right' }}>{n.location}</div>
              </Card>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
