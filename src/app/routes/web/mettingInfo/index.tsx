import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import PageCard from 'components/web/PageCard';
import Popup from 'components/web/Popup';
import Info from './meetingInfo';
import Invitation from './invitation';
import Activities from './activities';
import ActivityInfo from './activityInfo';

function MettingInfo() {
  const [isOpenMettingInfo, setIsOpenMettingInfo] = useState(false);
  const [isOpenInvitation, setIsOpenInvitation] = useState(false);
  const [isOpenActivityInfo, setIsOpenActivityInfo] = useState(false);

  return (
    <>
      <PageCard
        pageTitle="한 작가 깊게 파기"
        actionButtons={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <IconButton onClick={() => setIsOpenMettingInfo(true)} color="inherit">
                <InfoOutlinedIcon style={{ fontSize: '35px' }} />
              </IconButton>
            </div>
            <div>
              <IconButton onClick={() => setIsOpenInvitation(true)} color="inherit">
                <PersonAddRoundedIcon style={{ fontSize: '35px' }} />
              </IconButton>
              <IconButton onClick={() => setIsOpenActivityInfo(true)} color="inherit">
                <CreateNewFolderOutlinedIcon style={{ fontSize: '35px' }} />
              </IconButton>
            </div>
          </div>
        }
      >
        <Activities />
      </PageCard>
      <Popup maxWidth="lg" isOpen={isOpenMettingInfo} title="한 작가 깊게 파기 모임 정보">
        <Info closeDialog={() => setIsOpenMettingInfo(false)} />
      </Popup>
      <Popup maxWidth="sm" isOpen={isOpenInvitation} title="모임 구성원 초대">
        <Invitation closeDialog={() => setIsOpenInvitation(false)} />
      </Popup>
      <Popup maxWidth="lg" isOpen={isOpenActivityInfo} title="활동 만들기">
        <ActivityInfo closeDialog={() => setIsOpenActivityInfo(false)} />
      </Popup>
    </>
  );
}

export default MettingInfo;
