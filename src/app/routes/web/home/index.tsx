import React from 'react';
import Card from 'components/web/Card';
import Carousel from 'components/web/Carousel';
import 'react-multi-carousel/lib/styles.css';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import noneContents from 'public/img/none_contents.png';

// 1. no-image 처리

const banners = [{}];

const recruiting = [
  { title: '모임제목1', desc: '모임설명1', location: '서울시 강남구', image: 'no-image' },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: 'no-image' },
  null,
];
const activating = [{}];
const mostViewBooks = [{}];

function Home() {
  return (
    <div className="container-horizontal-center">
      <div className="item-wide-width">
        <Carousel
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
                  <Card image={n.image} imageHeight={140}>
                    <div
                      style={{
                        height: '150px',
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                    >
                      <div>
                        <span style={{ fontSize: '16px', fontWeight: 'bold' }}>{n.title}</span>
                        <div style={{ marginTop: '10px' }}>{n.desc}</div>
                      </div>
                      <div style={{ textAlign: 'right' }}>{n.location}</div>
                    </div>
                  </Card>
                </div>
              );
            }

            return (
              <div key={index} style={{ padding: '5px 10px' }}>
                <Card>
                  <div
                    style={{
                      height: '290px',
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                    }}
                  >
                    <img src={noneContents} style={{ height: 100, width: 'auto' }} />
                    <span style={{ fontSize: '16px', fontWeight: 'bold' }}>모임이 없습니다.</span>
                  </div>
                </Card>
              </div>
            );
          })}
        </Carousel>
      </div>
    </div>
  );
}

export default Home;
