import React, { useState } from 'react';
import Card from 'components/web/Card';
import InputBox from 'components/web/InputBox';
import PageCard from 'components/web/PageCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Switch from 'components/web/Switch';

const recruiting = [
  {
    title: '모임제목1',
    desc: '모임설명1',
    location: '서울시 강남구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목2',
    desc: '모임설명2',
    location: '서울시 강서구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목3',
    desc: '모임설명3',
    location: '경기도 분당구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목4',
    desc: '모임설명4',
    location: '경기도 분당구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목5',
    desc: '모임설명5',
    location: '경기도 분당구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목6',
    desc: '모임설명6',
    location: '경기도 분당구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
  {
    title: '모임제목7',
    desc: '모임설명7',
    location: '경기도 분당구',
    averageAge: '20',
    maxNumOfPeople: 4,
    currNumOfPeople: 3,
    image: 'no-image',
  },
];

function MyRecruitingMetting() {
  const [location, setLocation] = useState('');
  const [isHost, setIsHost] = useState(false);
  const theme = useTheme();
  const isFullWidth = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <PageCard pageTitle="My 모집 중인 모임">
      <div className="container">
        <div
          style={{
            display: 'flex',
            width: '100%',
            alignItems: 'flex-end',
            justifyContent: 'space-between',
            padding: '0px 10px',
            marginBottom: '5px',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: isFullWidth ? 'column' : 'row',
              width: '100%',
            }}
          >
            <div style={{ width: isFullWidth ? '100%' : '300px' }}>
              <InputBox isSearch placeholder="모임명" value={location} onChange={(e) => setLocation(e.target.value)} />
            </div>
            <div
              style={{
                width: isFullWidth ? '100%' : 'auto',
                marginLeft: isFullWidth ? '0px' : '15px',
                marginTop: isFullWidth ? '10px' : '0px',
              }}
            >
              <Switch
                value={isHost}
                onChange={setIsHost}
                label={<div style={{ fontSize: '15px', fontWeight: 'bold' }}>내가 모임장인 모임</div>}
              />
            </div>
          </div>
        </div>
        <div className="card-container">
          {recruiting.map((n, index) => (
            <div key={index} style={{ padding: '10px' }}>
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
          ))}
        </div>
      </div>
    </PageCard>
  );
}

export default MyRecruitingMetting;
