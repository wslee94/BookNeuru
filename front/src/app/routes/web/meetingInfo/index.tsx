import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { IconButton } from '@material-ui/core';
import InfoOutlinedIcon from '@material-ui/icons/InfoOutlined';
import PersonAddRoundedIcon from '@material-ui/icons/PersonAddRounded';
import CreateNewFolderOutlinedIcon from '@material-ui/icons/CreateNewFolderOutlined';
import PageCard from 'components/web/PageCard';
import Popup from 'components/web/Popup';
import { getQueryString } from 'helpers/func';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { handleAjaxError } from 'helpers/error';
import Info from './meetingInfo';
import Invitation from './invitation';
import Activities from './activities';
import ActivityInfo from './activityInfo';
import { meetingInfoTypes } from './types';

function MeetingInfo() {
  const [meetingInfo, setMeetingInfo] = useState<meetingInfoTypes | null>(null);
  const [isOpenMeetingInfo, setIsOpenMeetingInfo] = useState(false);
  const [isOpenInvitation, setIsOpenInvitation] = useState(false);
  const [isOpenActivityInfo, setIsOpenActivityInfo] = useState(false);

  const location = useLocation();

  const fetchMeeting = async () => {
    const { id } = getQueryString(location.search);
    try {
      const res = await apiCall({ method: 'get', url: `/meeting/${id}` });
      const meetingInfo = getAjaxData(res);
      setMeetingInfo(meetingInfo);
    } catch (error) {
      handleAjaxError(error);
    }
  };

  useEffect(() => {
    fetchMeeting();
  }, []);

  return (
    <>
      <PageCard
        pageTitle={meetingInfo?.title || ''}
        actionButtons={
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div>
              <IconButton onClick={() => setIsOpenMeetingInfo(true)} color="inherit">
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
      <Popup maxWidth="lg" isOpen={isOpenMeetingInfo} title="한 작가 깊게 파기 모임 정보">
        <Info meetingInfo={meetingInfo} closeDialog={() => setIsOpenMeetingInfo(false)} />
      </Popup>
      <Popup maxWidth="sm" isOpen={isOpenInvitation} title="모임 구성원 초대">
        <Invitation closeDialog={() => setIsOpenInvitation(false)} />
      </Popup>
      <Popup maxWidth="lg" isOpen={isOpenActivityInfo} title="활동 만들기">
        <ActivityInfo dialogMode closeDialog={() => setIsOpenActivityInfo(false)} />
      </Popup>
    </>
  );
}

export default MeetingInfo;
