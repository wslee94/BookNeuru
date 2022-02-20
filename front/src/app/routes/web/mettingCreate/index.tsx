import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import PageCard from 'components/web/PageCard';
import Button from 'components/web/Button';
import { selectGenre } from 'data/index';

function PlusMetting() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState<string>('');

  return (
    <PageCard pageTitle="모임 만들기">
      <Field title="모임명" isRequired>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="모임분야">
        <Select value={genre} options={selectGenre} style={{ width: 200 }} onChange={(value) => setGenre(value)} />
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
      <Field title="모임설명" isRequired>
        <Editor value={description} onChange={(value) => setDescription(value)} />
      </Field>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button
          size="large"
          label="등록"
          onClick={() => {
            //
          }}
          style={{ margin: '5px' }}
        />
      </div>
    </PageCard>
  );
}

export default PlusMetting;
