import React, { useState } from 'react';
import moment from 'moment';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import DatePicker from 'components/web/DatePicker';
import TimePicker from 'components/web/TimePicker';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import PageCard from 'components/web/PageCard';
import Autocomplete from 'components/web/AutoComplete';
import Button from 'components/web/Button';

import { select_genre } from 'data/index';

interface ActivityInfoProps {
  closeDialog: () => void;
}

function ActivityInfo({ closeDialog }: ActivityInfoProps) {
  const [formMode, setFormMode] = useState('create');
  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState<any>([]);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState<string>('');

  console.log(participants);

  return (
    <>
      <Field title="활동명" isRequired>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="책 제목" isRequired>
        <InputBox value={book} onChange={(e) => setBook(e.target.value)} />
      </Field>
      <Field title="일자">
        <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <Field title="시간">
        <TimePicker value={time} onChange={(e) => setTime(e.target.value)} />
      </Field>
      <Field title="내용" isRequired>
        <Editor value={description} onChange={(value) => setDescription(value)} />
      </Field>
      <Field title="장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} />
      </Field>
      <Field title="참여자">
        <Autocomplete
          value={participants}
          multiple
          options={[
            { key: 1, text: '홍길동' },
            { key: 2, text: '홍길순' },
            { key: 3, text: '김철수' },
            { key: 4, text: '이순신' },
          ]}
          onChange={(arr) => setParticipants(arr)}
        />
      </Field>
      <Field title="활동분야">
        <Select value={genre} options={select_genre} style={{ width: 200 }} onChange={(value) => setGenre(value)} />
      </Field>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <>
          <Button size="large" label="저장" onClick={() => {}} style={{ margin: '5px' }} />
          <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
        </>
      </div>
    </>
  );
}

export default ActivityInfo;
