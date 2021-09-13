import React, { useState } from 'react';
import moment from 'moment';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import DatePicker from 'components/web/DatePicker';
import TimePicker from 'components/web/TimePicker';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import PageCard from 'components/web/PageCard';
import { select_genre } from 'data/index';

function PlusMetting() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');
  const [numOfPeople, setNumOfPeople] = useState('');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState<string>('');

  return (
    <PageCard pageTitle="모임 만들기">
      <Field title="모임명" isRequired>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="첫 모임장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} />
      </Field>
      <Field title="첫 모임일">
        <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <Field title="첫 모임시간">
        <TimePicker value={time} onChange={(e) => setTime(e.target.value)} />
      </Field>
      <Field title="모집인원" isRequired>
        <InputBox
          type="number"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          unit="명"
          style={{ width: '100px' }}
        />
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
      <Field title="모임분야">
        <Select value={genre} options={select_genre} style={{ width: 200 }} onChange={(value) => setGenre(value)} />
      </Field>
    </PageCard>
  );
}

export default PlusMetting;
