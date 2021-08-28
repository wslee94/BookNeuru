import React, { useState } from 'react';
import moment from 'moment';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import DatePicker from 'components/web/DatePicker';
import TimePicker from 'components/web/TimePicker';

function PlusMetting() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');
  const [numOfPeople, setNumOfPeople] = useState('');

  return (
    <>
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
      <Field title="모집인원">
        <InputBox
          type="number"
          value={numOfPeople}
          onChange={(e) => setNumOfPeople(e.target.value)}
          unit="명"
          style={{ width: '100px' }}
        />
      </Field>
      <Field title="모임이미지">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="모임설명">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="첫 모임 책">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
      <Field title="모임분야">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Field>
    </>
  );
}

export default PlusMetting;
