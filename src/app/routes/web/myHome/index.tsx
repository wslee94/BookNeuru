import React, { useState } from 'react';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import NoContent from 'components/web/NoContent';
import Card from 'components/web/Card';
import PageCard from 'components/web/PageCard';
import { CAROUSEL_VERTICAL } from 'helpers/const';
import Carousel from 'components/web/Carousel';
import 'react-multi-carousel/lib/styles.css';
import { Link } from 'react-router-dom';

const recruiting = [
  {
    title: '모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1',
    desc:
      '모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1임설명1모임설명1모임설명1모임설명1',
    location: '서울시 강남구',
    image: 'no-image',
    hasNewJoiner: true,
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
  },
  {
    title: '모임제목2',
    desc: '모임설명2',
    location: '서울시 강서구',
    image: 'no-image',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
  },
  {
    title: '모임제목3',
    desc: '모임설명3',
    location: '경기도 분당구',
    image: 'no-image',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
  },
  {
    title: '모임제목4',
    desc: '모임설명4',
    location: '경기도 분당구',
    image: 'no-image',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
  },
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

const inActivating = [
  { title: '모임제목1', desc: '모임설명1', location: '서울시 강남구', image: 'no-image' },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  null,
  null,
  null,
];

function MyHome() {
  return (
    <>
      <PageCard pageTitle="My 홈">
        <div className="container">
          <div style={{ width: '100%' }}>
            <Carousel
              responsive={CAROUSEL_VERTICAL}
              header={
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    padding: '0px 10px',
                    alignItems: 'center',
                    height: '48px',
                  }}
                >
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>모집 중인 모임</div>
                  <div>
                    <Link to="/my-recruiting-metting">
                      <IconButton onClick={() => {}}>
                        <MoreHorizIcon />
                      </IconButton>
                    </Link>
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
                          <div
                            style={{
                              display: 'flex',
                              justifyContent: 'space-between',
                              textAlign: 'right',
                              fontSize: '11px',
                              fontWeight: 'bold',
                            }}
                          >
                            <div>{`${n.currNumOfPeople}/${n.maxNumOfPeople}명 (${n.averageAge}대)`}</div>
                            <div>{n.location}</div>
                          </div>
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
                        <NoContent text="모집 중인 모임이 없습니다." />
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
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0px 10px',
                      alignItems: 'center',
                      height: '48px',
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>활동 중인 모임</div>
                    <div>
                      <Link to="/my-activating-metting">
                        <IconButton onClick={() => {}}>
                          <MoreHorizIcon />
                        </IconButton>
                      </Link>
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
                          <NoContent text="활동 중인 모임이 없습니다." />
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </Carousel>
            </div>

            <div style={{ marginTop: '10px' }}>
              <Carousel
                responsive={CAROUSEL_VERTICAL}
                header={
                  <div
                    style={{
                      display: 'flex',
                      justifyContent: 'space-between',
                      padding: '0px 10px',
                      alignItems: 'center',
                      height: '48px',
                    }}
                  >
                    <div style={{ fontSize: '15px', fontWeight: 'bold' }}>종결된 모임</div>
                    <div>
                      <Link to="/my-closed-metting">
                        <IconButton onClick={() => {}}>
                          <MoreHorizIcon />
                        </IconButton>
                      </Link>
                    </div>
                  </div>
                }
              >
                {inActivating.map((n, index) => {
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
                          <NoContent text="종결된 모임이 없습니다." />
                        </div>
                      </Card>
                    </div>
                  );
                })}
              </Carousel>
            </div>
          </div>
        </div>
      </PageCard>
    </>
  );
}

export default MyHome;
