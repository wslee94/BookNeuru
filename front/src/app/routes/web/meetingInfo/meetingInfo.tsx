import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import { selectGenre } from 'data/index';
import Button from 'components/web/Button';
import meetingDefault from '../home/sample/meeting_default.png';
import { meetingInfoTypes } from './types';

interface InfoProps {
  meetingInfo: meetingInfoTypes | null;
  closeDialog: () => void;
}

function Info({ meetingInfo, closeDialog }: InfoProps) {
  const [formMode, setFormMode] = useState('detail');
  const [title, setTitle] = useState(meetingInfo?.title || '');
  const [location, setLocation] = useState(meetingInfo?.location || '');
  const [imageFile, setImageFile] = useState<string | null>(meetingInfo?.meetingImageURL || null);
  const [description, setDescription] = useState(meetingInfo?.description || '');
  const [genre, setGenre] = useState<string>('1');

  return (
    <>
      <div>
        <Field title="모임명" isRequired={formMode !== 'detail'}>
          <InputBox value={title} onChange={(e) => setTitle(e.target.value)} isReadOnly={formMode === 'detail'} />
        </Field>
        <Field title="모임분야">
          <Select
            value={genre}
            options={selectGenre}
            style={{ width: 200 }}
            onChange={(value) => setGenre(value)}
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
        <Field title="모임설명" isRequired={formMode !== 'detail'}>
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
            <Button size="large" label="저장" onClick={() => setFormMode('modify')} style={{ margin: '5px' }} />
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
    </>
  );
}

export default Info;
