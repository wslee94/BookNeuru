import React, { useState, useRef, useEffect, useCallback } from 'react';
import Card from 'components/web/Card';
import CardMedia from 'components/web/CardMedia';
import Carousel from 'components/web/Carousel';
import 'react-multi-carousel/lib/styles.css';
import IconButton from '@material-ui/core/IconButton';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PageCard from 'components/web/PageCard';
import { CAROUSEL_VERTICAL, CAROUSEL_HORIZONTAL } from 'helpers/const';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { handleAjaxError } from 'helpers/error';
import { Link } from 'react-router-dom';
import Ellipsis from 'components/web/Ellipsis';
import book1 from './sample/book1.jpg';
import book2 from './sample/book2.jpg';
import book3 from './sample/book3.jpg';
import book4 from './sample/book4.jpg';
import book5 from './sample/book5.jpg';
import book6 from './sample/book6.jpg';
import book7 from './sample/book7.jpg';
import book8 from './sample/book8.jpg';
import meetingDefault from './sample/meeting_default.png';

const myReadBooks = [
  { image: book1, bookID: 1 },
  { image: book2, bookID: 2 },
  { image: book3, bookID: 3 },
  { image: book4, bookID: 4 },
  { image: book5, bookID: 5 },
  { image: book6, bookID: 6 },
  { image: book7, bookID: 7 },
  { image: book8, bookID: 8 },
];

interface meetingType {
  meetingID: number;
  title: string;
  location: string;
  meetingImageURL: string;
}

function Home() {
  const refCardWidth = useRef<HTMLDivElement>(null);
  const [windowSize, setWindowSize] = useState({ width: window.innerWidth, height: window.innerHeight });
  const [cardWidth, setCardWidth] = useState(0);
  const [myMeetings, setMyMeetings] = useState([]);

  const windowSizer = useCallback(() => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight });
  }, []);

  useEffect(() => {
    window.addEventListener('resize', windowSizer);

    let timer: ReturnType<typeof setTimeout> | null = null;
    timer = setTimeout(() => {
      setCardWidth(refCardWidth?.current?.offsetWidth || 0);
    }, 0);

    fetchMeetings();

    return () => {
      window.removeEventListener('resize', windowSizer);
      if (timer) clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    // 말줄임표 설정을 위해
    setCardWidth(refCardWidth?.current?.offsetWidth || 0);
  }, [windowSize]);

  const fetchMeetings = async () => {
    try {
      const res = await apiCall({ method: 'get', url: '/meeting' });
      const myMeetings = getAjaxData(res);
      setMyMeetings(
        myMeetings.map((meeting: meetingType) => ({
          ...meeting,
          meetingImageURL: meeting.meetingImageURL || meetingDefault,
        })),
      );
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <PageCard pageTitle="홈">
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
                <div style={{ fontSize: '15px', fontWeight: 'bold' }}>내가 참여한 모임</div>
                <div>
                  <Link to="/">
                    <IconButton
                      onClick={() => {
                        //
                      }}
                    >
                      <MoreHorizIcon />
                    </IconButton>
                  </Link>
                </div>
              </div>
            }
          >
            {myMeetings.map((meeting: meetingType) => {
              return (
                <div key={meeting.meetingID} style={{ padding: '5px 10px' }}>
                  <Card image={meeting.meetingImageURL} imageHeight={160} link={`/meeting?id=${meeting.meetingID}`}>
                    <div
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'space-between',
                      }}
                      ref={refCardWidth}
                    >
                      <div>
                        <div style={{ fontSize: '16px', fontWeight: 'bold', height: 20, overflow: 'hidden' }}>
                          <Ellipsis text={meeting.title} line={1} width={cardWidth} />
                        </div>
                      </div>
                      <div
                        style={{
                          display: 'flex',
                          justifyContent: 'flex-end',
                          textAlign: 'right',
                          fontSize: '12px',
                          fontWeight: 'bold',
                          marginTop: '15px',
                        }}
                      >
                        <div>{meeting.location}</div>
                      </div>
                    </div>
                  </Card>
                </div>
              );
            })}
          </Carousel>

          <div style={{ marginTop: '10px' }}>
            <Carousel
              responsive={CAROUSEL_HORIZONTAL}
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
                  <div style={{ fontSize: '15px', fontWeight: 'bold' }}>내가 읽은 책</div>
                </div>
              }
            >
              {myReadBooks.map((n) => {
                return (
                  <div key={n.bookID} style={{ padding: '5px 10px' }}>
                    <CardMedia
                      imageAlt="도서 사진"
                      image={n.image}
                      onClick={() => {
                        //
                      }}
                    />
                  </div>
                );
              })}
            </Carousel>
          </div>
        </div>
      </div>
    </PageCard>
  );
}

export default Home;
