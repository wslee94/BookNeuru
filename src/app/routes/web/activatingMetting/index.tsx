import React, { useState, useRef, useEffect, useCallback } from 'react';
import Card from 'components/web/Card';
import InputBox from 'components/web/InputBox';
import PageCard from 'components/web/PageCard';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import Ellipsis from 'components/web/Ellipsis';

const activating = [
  {
    title:
      '모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1모임제목1',
    desc:
      '모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1모임설명1',
    location: '서울시 강남구',
    image: 'no-image',
  },
  { title: '모임제목2', desc: '모임설명2', location: '서울시 강서구', image: 'no-image' },
  { title: '모임제목3', desc: '모임설명3', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목4', desc: '모임설명4', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목5', desc: '모임설명5', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목6', desc: '모임설명6', location: '경기도 분당구', image: 'no-image' },
  { title: '모임제목7', desc: '모임설명7', location: '경기도 분당구', image: 'no-image' },
];

function ActivatingMetting() {
  const [location, setLocation] = useState('');
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [cardWidth, setCardWidth] = useState(0);

  const theme = useTheme();
  const isFullWidth = useMediaQuery(theme.breakpoints.down('xs'));
  const refCardWidth = useRef<HTMLDivElement>(null);

  const windowSizer = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', windowSizer);

    let timer: ReturnType<typeof setTimeout> | null = null;
    timer = setTimeout(() => {
      setCardWidth(refCardWidth?.current?.offsetWidth || 0);
    }, 0);

    return () => {
      window.removeEventListener('resize', windowSizer);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // 말줄임표 설정을 위해
    setCardWidth(refCardWidth?.current?.offsetWidth || 0);
  }, [windowSize]);

  return (
    <PageCard pageTitle="활동 중인 모임">
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
          <div style={{ width: isFullWidth ? '100%' : '300px' }}>
            <InputBox
              isSearch
              placeholder="지역"
              value={location}
              onChange={(e) => setLocation(e.target.value)}
              style={{ width: '100%' }}
            />
          </div>
        </div>
        <div className="card-container">
          {activating.map((n, index) => (
            <div key={index} style={{ padding: '10px' }}>
              <Card image={n.image} imageHeight={180} link="/metting-info">
                <div
                  style={{
                    height: '150px',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                  }}
                  ref={refCardWidth}
                >
                  <div>
                    <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>
                      <Ellipsis text={n.title} line={1} width={cardWidth} />
                    </div>
                    <div style={{ marginTop: '10px', height: 90, overflow: 'hidden' }}>
                      <Ellipsis text={n.desc} line={4} width={cardWidth} />
                    </div>
                  </div>
                  <div style={{ textAlign: 'right', fontSize: '11px', fontWeight: 'bold' }}>{n.location}</div>
                </div>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </PageCard>
  );
}

export default ActivatingMetting;
