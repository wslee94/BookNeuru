import React from 'react';
import Card from 'components/web/Card';
import CardMedia from 'components/web/CardMedia';
import Carousel from 'components/web/Carousel';
import 'react-multi-carousel/lib/styles.css';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NoContent from 'components/web/NoContent';

const CAROUSEL_VERTICAL = {
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

const CAROUSEL_HORIZONTAL = {
  desktop: {
    breakpoint: { max: 3000, min: 1280 },
    items: 3,
  },
  labtop: {
    breakpoint: { max: 1280, min: 1024 },
    items: 2,
  },
  largeTablet: {
    breakpoint: { max: 1024, min: 768 },
    items: 2,
  },
  tablet: {
    breakpoint: { max: 768, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

const banners = [{}];

const recruiting = [
  {
    title: '모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1',
    desc:
      '모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1임설명1모임설명1모임설명1모임설명1',
    location: '서울시 강남구',
    image: 'no-image',
  },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: 'no-image' },
  null,
];

const activating = [
  { title: '모임제목1', desc: '모임설명1', location: '서울시 강남구', image: 'no-image' },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목5', desc: '모임설명5', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목6', desc: '모임설명6', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목7', desc: '모임설명7', location: '경기도 분당구', image: 'no-image' },
];

const mostViewBooks = [
  { title: '책제목', genre: '소설', author: '아무개', publishDate: '2021-08-15', desc: '책설명', image: 'no-image' },
  { title: '책제목', genre: '소설', author: '아무개', publishDate: '2021-08-15', desc: '책설명', image: 'no-image' },
  null,
];

function Home() {
  return (
    <div className="container-horizontal-center">
      <div className="item-wide-width">
        <Carousel
          responsive={CAROUSEL_VERTICAL}
          header={
            <div
              style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', alignItems: 'center' }}
            >
              <div style={{ fontSize: '15px', fontWeight: 'bold' }}>모집중인 모임</div>
              <div>
                <IconButton onClick={() => {}}>
                  <MoreHorizIcon />
                </IconButton>
              </div>
            </div>
          }
        >
          {recruiting.map((n, index) => {
            if (n) {
              return (
                <div key={index} style={{ padding: '5px 10px' }}>
                  <Card image={n.image} imageHeight={180}>
                    <div
                      style={{
                        height: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>
                          {n.title}
                        </div>
                        <div style={{ marginTop: '10px', height: 90, overflow: 'hidden' }}>{n.desc}</div>
                      </div>
                      <div style={{ textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>{n.location}</div>
                    </div>
                  </Card>
                </div>
              );
            }

            return (
              <div key={index} style={{ padding: '5px 10px' }}>
                <Card onClick={() => {}}>
                  <div
                    style={{
                      height: '330px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <NoContent text="모집중인 모임이 없습니다." />
                  </div>
                </Card>
              </div>
            );
          })}
        </Carousel>

        <div style={{ marginTop: '10px' }}>
          <Carousel
            responsive={CAROUSEL_VERTICAL}
            header={
              <div
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', alignItems: 'center' }}
              >
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>활동중인 모임</div>
                <div>
                  <IconButton onClick={() => {}}>
                    <MoreHorizIcon />
                  </IconButton>
                </div>
              </div>
            }
          >
            {activating.map((n, index) => {
              if (n) {
                return (
                  <div key={index} style={{ padding: '5px 10px' }}>
                    <Card image={n.image} imageHeight={180}>
                      <div
                        style={{
                          height: '150px',
                          display: 'flex',
                          flexDirection: 'column',
                          justifyContent: 'space-between',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>
                            {n.title}
                          </div>
                          <div style={{ marginTop: '10px', height: 90, overflow: 'hidden' }}>{n.desc}</div>
                        </div>
                        <div style={{ textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>{n.location}</div>
                      </div>
                    </Card>
                  </div>
                );
              }

              return (
                <div key={index} style={{ padding: '5px 10px' }}>
                  <Card onClick={() => {}}>
                    <div
                      style={{
                        height: '330px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <NoContent text="활동중인 모임이 없습니다." />
                    </div>
                  </Card>
                </div>
              );
            })}
          </Carousel>
        </div>

        <div style={{ marginTop: '10px' }}>
          <Carousel
            responsive={CAROUSEL_HORIZONTAL}
            header={
              <div
                style={{ display: 'flex', justifyContent: 'space-between', padding: '0px 10px', alignItems: 'center' }}
              >
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>모임에서 가장 많이 읽은 책</div>
                <div>
                  <IconButton onClick={() => {}}>
                    <MoreHorizIcon />
                  </IconButton>
                </div>
              </div>
            }
          >
            {mostViewBooks.map((n, index) => {
              if (n) {
                return (
                  <div key={index} style={{ padding: '5px 10px' }}>
                    <CardMedia image={n.image} onClick={() => {}}>
                      <div
                        style={{
                          height: '300px',
                          overflow: 'hidden',
                          display: 'flex',
                          flexDirection: 'column',
                        }}
                      >
                        <div>
                          <div style={{ fontSize: '16px', fontWeight: 'bold' }}>{n.title}</div>
                          <div style={{ marginTop: '10px' }}>{`책장르 : ${n.genre}`}</div>
                          <div>{`작가 : ${n.author}`}</div>
                          <div>{`출판일 : ${n.publishDate}`}</div>
                          <div style={{ marginTop: '10px' }}>{n.desc}</div>
                        </div>
                      </div>
                    </CardMedia>
                  </div>
                );
              }

              return (
                <div key={index} style={{ padding: '5px 10px' }}>
                  <Card onClick={() => {}}>
                    <div
                      style={{
                        height: '300px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <NoContent text="책 정보가 없습니다." />
                    </div>
                  </Card>
                </div>
              );
            })}
          </Carousel>
        </div>
      </div>
    </div>
  );
}

export default Home;
