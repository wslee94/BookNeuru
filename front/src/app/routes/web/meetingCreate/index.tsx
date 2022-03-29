import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import PageCard from 'components/web/PageCard';
import Button from 'components/web/Button';
import Alert from 'components/web/Alert';
import Confirm from 'components/web/Confirm';
import * as func from 'helpers/func';
import { handleAjaxError } from 'helpers/error';
import { apiCall, getAjaxData } from 'helpers/ajax';
import { selectGenre } from 'data/index';

function MeetingCreate() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<string>('');
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

  const cleanState = () => {
    setTitle('');
    setLocation('');
    setImageFile(null);
    setDescription('');
    setCategory('');
  };

  const checkValidation = () => {
    if (func.checkBlank(title)) {
      setAlert({ isOpen: true, title: '필수 값을 입력해 주세요.', text: '모임명을 입력해 주세요.' });
      return false;
    }

    return true;
  };

  const saveMeeting = async () => {
    try {
      const res: any = await apiCall({
        url: '/meeting',
        method: 'post',
        params: {
          title,
          category,
          location,
          meetingImageURL: imageFile,
          description,
        },
      });
      getAjaxData(res);
      if (res.data.status === 'SUCCESS') cleanState();
    } catch (error) {
      handleAjaxError(error);
    }
  };

  return (
    <PageCard pageTitle="모임 만들기">
      <Field title="모임명" isRequired>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="모임분야">
        <Select
          value={category}
          options={selectGenre}
          style={{ width: 200 }}
          onChange={(value) => setCategory(value)}
        />
      </Field>
      <Field title="주 모임장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} />
      </Field>
      <Field title="모임이미지">
        <ImageFile
          alt="모임이미지"
          size="large"
          file={imageFile}
          onChange={(file) => setImageFile(file)}
          previewType="square"
        />
      </Field>
      <Field title="모임설명">
        <Editor value={description} onChange={(value) => setDescription(value)} />
      </Field>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          size="large"
          label="등록"
          onClick={() => {
            if (!checkValidation()) return;

            setConfrim({
              isOpen: true,
              title: '모임 등록 요청',
              text: '모임을 등록하시겠습니까?',
              handleOK: () => {
                saveMeeting();
              },
            });
          }}
          style={{ margin: '5px' }}
        />
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
    </PageCard>
  );
}

export default MeetingCreate;
