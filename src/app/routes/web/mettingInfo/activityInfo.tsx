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

import { select_genre } from 'data/index';

function PlusMetting() {
  const [formMode, setFormMode] = useState('create');
  const [title, setTitle] = useState('');
  const [book, setBook] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState<string | number | undefined>('');
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState<string>('');

  return (
    <PageCard pageTitle="활동명">
      <Field title="모임명" isRequired>
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="모임 책" isRequired>
        <InputBox value={book} onChange={(e) => setBook(e.target.value)} />
      </Field>
      <Field title="모임일">
        <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
      </Field>
      <Field title="모임시간">
        <TimePicker value={time} onChange={(e) => setTime(e.target.value)} />
      </Field>
      <Field title="활동내용" isRequired>
        <Editor value={description} onChange={(value) => setDescription(value)} />
      </Field>
      <Field title="장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} />
      </Field>
      <Field title="참여자">
        <Autocomplete
          options={[
            { key: 1, text: '홍길동' },
            { key: 2, text: '홍길순' },
            { key: 3, text: '김철수' },
            { key: 4, text: '이순신' },
          ]}
          onChange={(obj) => setParticipants(obj?.key)}
        />
      </Field>
      <Field title="활동분야">
        <Select value={genre} options={select_genre} style={{ width: 200 }} onChange={(value) => setGenre(value)} />
      </Field>
    </PageCard>
  );
}

export default PlusMetting;
