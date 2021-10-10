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

function Info() {
  const [formMode, setFormMode] = useState('detail');
  const [title, setTitle] = useState('모임명');
  const [location, setLocation] = useState('장소');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('14:00');
  const [numOfPeople, setNumOfPeople] = useState('4');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [simpleDescription, setSimpleDescription] = useState('모임설명(표시용)');
  const [description, setDescription] = useState('모임설명');
  const [genre, setGenre] = useState<string>('1');

  return (
    <div>
      <Field title="모임명" isRequired={formMode !== 'detail'}>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} isReadOnly={formMode === 'detail'} />
      </Field>
      <Field title="첫 모임장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} isReadOnly={formMode === 'detail'} />
      </Field>
      <Field title="첫 모임일">
        <DatePicker value={date} onChange={(e) => setDate(e.target.value)} isReadOnly={formMode === 'detail'} />
      </Field>
      <Field title="첫 모임시간">
        <TimePicker value={time} onChange={(e) => setTime(e.target.value)} isReadOnly={formMode === 'detail'} />
      </Field>
      <Field title="모집인원" isRequired={formMode !== 'detail'}>
        <InputBox
          type="number"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          unit="명"
          style={{ width: '100px' }}
          isReadOnly={formMode === 'detail'}
        />
      </Field>
      <Field title="모임이미지">
        <ImageFile
          alt="모임이미지"
          size="large"
          file={imageFile}
          onChange={(file) => setImageFile(file)}
          previewType="square"
          isReadOnly={formMode === 'detail'}
        />
      </Field>
      <Field title="모임설명(표시용)" isRequired={formMode !== 'detail'}>
        <InputBox
          value={simpleDescription}
          onChange={(e) => setSimpleDescription(e.target.value)}
          multiLine={5}
          isReadOnly={formMode === 'detail'}
        />
      </Field>
      <Field title="모임설명" isRequired={formMode !== 'detail'}>
        <Editor value={description} onChange={(value) => setDescription(value)} isReadOnly={formMode === 'detail'} />
      </Field>
      <Field title="모임분야">
        <Select
          value={genre}
          options={select_genre}
          style={{ width: 200 }}
          onChange={(value) => setGenre(value)}
          isReadOnly={formMode === 'detail'}
        />
      </Field>
    </div>
  );
}

export default Info;