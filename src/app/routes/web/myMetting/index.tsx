import React, { useState } from 'react';
import PageCard from 'components/web/PageCard';
import InputBox from 'components/web/InputBox';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';
import CheckBox from 'components/web/CheckBox';

function MyMetting() {
  const [title, setTitle] = useState('');
  const [isHost, setIsHost] = useState(false);
  const theme = useTheme();
  const isFullWidth = useMediaQuery(theme.breakpoints.down('xs'));

  return (
    <>
      <PageCard pageTitle="나의 모임">
        <div className="container-horizontal-center">
          <div
            style={{
              width: '100%',
              padding: '0px 10px',
              marginBottom: '5px',
            }}
          >
            <div style={{ width: isFullWidth ? '100%' : '350px' }}>
              <InputBox
                placeholder="모임제목"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                style={{ width: '100%' }}
              />
            </div>
            <div style={{ marginTop: '5px' }}>
              <CheckBox value={isHost} onChange={(v) => setIsHost(v)} label="내가 모임장인 모임만 보기" />
            </div>
          </div>
        </div>
      </PageCard>
    </>
  );
}

export default MyMetting;
