import React, { useState } from 'react';
import { IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import PageCard from 'components/web/PageCard';
import Popup from 'components/web/Popup';
import Info from './meetingInfo';
import Invitation from './invitation';
import Activity from './activity';

function MettingInfo() {
  const [isOpenInfo, setIsOpenInfo] = useState(false);
  const [isOpenInvitation, setIsOpenInvitation] = useState(false);

  return (
    <>
      <PageCard
        pageTitle="한 작가 깊게 파기"
        actionButtons={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <IconButton onClick={() => setIsOpenInfo(true)} color="inherit">
                <InfoOutlinedIcon style={{ fontSize: '35px' }} />
              </IconButton>
            </div>
            <div>
              <IconButton onClick={() => setIsOpenInvitation(true)} color="inherit">
                <PersonAddRoundedIcon style={{ fontSize: '35px' }} />
              </IconButton>
              <IconButton
                onClick={() => {
                  // 팝업 처리하자
                }}
                color="inherit"
              >
                <CreateNewFolderOutlinedIcon style={{ fontSize: '35px' }} />
              </IconButton>
            </div>
          </div>
        }
      >
        <Activity />
      </PageCard>
      <Popup maxWidth="lg" isOpen={isOpenInfo} title="한 작가 깊게 파기 모임 정보">
        <Info closeDialog={() => setIsOpenInfo(false)} />
      </Popup>
      <Popup maxWidth="sm" isOpen={isOpenInvitation} title="모임 구성원 초대">
        <Invitation closeDialog={() => setIsOpenInvitation(false)} />
      </Popup>
    </>
  );
}

export default MettingInfo;
