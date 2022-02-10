import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import PageCard from 'components/web/PageCard';
import Popup from 'components/web/Popup';
import Button from 'components/web/Button';
import Info from './meetingInfo';
import Activity from './activity';

function MettingInfo() {
  const [isOpenInfo, setIsOpenInfo] = useState(false);

  return (
    <>
      <PageCard
        pageTitle="한 작가 깊게 파기"
        actionButtons={
          <>
            <IconButton onClick={() => setIsOpenInfo(true)} color="inherit">
              <InfoOutlinedIcon style={{ fontSize: '35px' }} />
            </IconButton>
            <IconButton onClick={() => {}} color="inherit">
              <PersonAddRoundedIcon style={{ fontSize: '35px' }} />
            </IconButton>
          </>
        }
      >
        <Activity />
      </PageCard>
      <Popup maxWidth="lg" isOpen={isOpenInfo} title="한 작가 깊게 파기 모임 정보">
        <Info closeDialog={() => setIsOpenInfo(false)} />
      </Popup>
    </>
  );
}

export default MettingInfo;
