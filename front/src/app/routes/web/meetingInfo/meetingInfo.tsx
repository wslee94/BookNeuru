import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import { selectGenre } from 'data/index';
import Button from 'components/web/Button';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { handleAjaxError } from 'helpers/error';
import Alert from 'components/web/Alert';
import Confirm from 'components/web/Confirm';
import * as func from 'helpers/func';
import meetingDefault from '../home/sample/meeting_default.png';
import { meetingInfoTypes } from './types';

interface InfoProps {
  meetingInfo: meetingInfoTypes | null;
  fetchMeeting: () => Promise<void>;
  closeDialog: () => void;
}

function Info({ meetingInfo, fetchMeeting, closeDialog }: InfoProps) {
  const [formMode, setFormMode] = useState('detail');
  const [title, setTitle] = useState(meetingInfo?.title || '');
  const [location, setLocation] = useState(meetingInfo?.location || '');
  const [imageFile, setImageFile] = useState<string | null>(meetingInfo?.meetingImageURL || null);
  const [description, setDescription] = useState(meetingInfo?.description || '');
  const [category, setCategory] = useState<string>(meetingInfo?.category || '');
  const [alert, setAlert] = useState({ isOpen: false, title: '', text: '' });
  const [confirm, setConfrim] = useState<{
    isOpen: boolean;
    title: string | object;
    text: string | object;
    handleOK: null | (() => void);
  }>({
    isOpen: false,
    title: '',
    text: '',
    handleOK: null,
  });

  const checkValidation = () => {
    if (func.checkBlank(title)) {
      setAlert({ isOpen: true, title: '필수 값을 입력해 주세요.', text: '모임명을 입력해 주세요.' });
      return false;
    }

    return true;
  };

  const modifyMeeting = async () => {
    try {
      const res: any = await apiCall({
        url: `/meeting/${meetingInfo?.meetingID}`,
        method: 'put',
        params: {
          title,
          category,
          location,
          meetingImageURL: imageFile,
          description,
        },
      });
      getAjaxData(res);
      if (res.data.status === 'SUCCESS') {
        await fetchMeeting();
        setFormMode('detail');
      }
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <>
      <div>
        <Field title="모임명" isRequired={formMode !== 'detail'}>
          <InputBox value={title} onChange={(e) => setTitle(e.target.value)} isReadOnly={formMode === 'detail'} />
        </Field>
        <Field title="모임분야">
          <Select
            value={category}
            options={selectGenre}
            style={{ width: 200 }}
            onChange={(value) => setCategory(value)}
            isReadOnly={formMode === 'detail'}
          />
        </Field>
        <Field title="주 모임장소">
          <InputBox value={location} onChange={(e) => setLocation(e.target.value)} isReadOnly={formMode === 'detail'} />
        </Field>
        <Field title="모임이미지">
          <ImageFile
            alt="모임이미지"
            size="x-large"
            file={imageFile || meetingDefault}
            onChange={(file) => setImageFile(file)}
            previewType="square"
            isReadOnly={formMode === 'detail'}
          />
        </Field>
        <Field title="모임설명">
          <Editor value={description} onChange={(value) => setDescription(value)} isReadOnly={formMode === 'detail'} />
        </Field>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {formMode === 'detail' && (
          <>
            <Button size="large" label="수정" onClick={() => setFormMode('modify')} style={{ margin: '5px' }} />
            <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
          </>
        )}
        {formMode === 'modify' && (
          <>
            <Button
              size="large"
              label="저장"
              onClick={() => {
                if (!checkValidation()) return;

                setConfrim({
                  isOpen: true,
                  title: '모임 수정 요청',
                  text: '모임을 수정하시겠습니까?',
                  handleOK: () => {
                    modifyMeeting();
                  },
                });
              }}
              style={{ margin: '5px' }}
            />
            <Button
              type="inverted"
              size="large"
              label="취소"
              onClick={() => setFormMode('detail')}
              style={{ margin: '5px' }}
            />
          </>
        )}
      </div>
      <Alert
        isOpen={alert.isOpen}
        handleClose={() => setAlert({ ...alert, isOpen: false })}
        title={alert.title}
        text={alert.text}
      />
      <Confirm
        isOpen={confirm.isOpen}
        handleOK={confirm.handleOK}
        handleClose={() => setConfrim({ ...confirm, isOpen: false })}
        title={confirm.title}
        text={confirm.text}
      />
    </>
  );
}

export default Info;
