import React, { useState } from 'react';
import Card from 'components/web/Card';
import InputBox from 'components/web/InputBox';

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

function RecruitingMetting() {
  const [location, setLocation] = useState('');
  return (
    <div className="container-horizontal-center">
      <div
        style={{
          display: 'flex',
          width: '100%',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
          padding: '0px 10px',
          height: '43px',
          marginBottom: '5px',
        }}
      >
        <div>
          <InputBox
            placeholder="지역"
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            style={{ width: '252px' }}
          />
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
                  <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>{n.title}</div>
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
  );
}

export default RecruitingMetting;
