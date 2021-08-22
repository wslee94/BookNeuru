import React from 'react';
import Card from 'components/web/Card';
import Select from 'components/web/Select';

// 각 Select options 구현

const recruiting = [
  { title: '모임제목1', desc: '모임설명1', location: '서울시 강남구', image: 'no-image' },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목5', desc: '모임설명5', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목6', desc: '모임설명6', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목7', desc: '모임설명7', location: '경기도 분당구', image: 'no-image' },
];

function RecruitingMetting() {
  return (
    <div className="container-horizontal-center">
      <div style={{ display: 'flex', width: '100%', padding: '5px 10px' }}>
        <Select
          label="지역(시, 도)"
          value={1}
          options={[
            { key: '1', text: '경기도' },
            { key: '2', text: '충청도' },
            { key: '3', text: '경상도' },
          ]}
          onChange={() => {}}
          style={{ width: '120px' }}
        />
      </div>
      <div className="card-container">
        {recruiting.map((n, index) => (
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
                  <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>{n.title}</div>
                  <div style={{ marginTop: '10px', height: 90, overflow: 'hidden' }}>{n.desc}</div>
                </div>
                <div style={{ textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>{n.location}</div>
              </div>
            </Card>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RecruitingMetting;
