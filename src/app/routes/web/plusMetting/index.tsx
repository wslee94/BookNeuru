import React, { useState } from 'react';
import moment from 'moment';
import Filed from 'components/web/Filed';
import InputBox from 'components/web/InputBox';
import DatePicker from 'components/web/DatePicker';
import TimePicker from 'components/web/TimePicker';

function PlusMetting() {
  const [title, setTitle] = useState('');
  const [location, setLocation] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');

  return (
    <>
      <Filed title="모임명">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
      <Filed title="첫 모임장소">
        <InputBox value={location} onChange={(e) => setLocation(e.target.value)} />
      </Filed>
      <Filed title="첫 모임일">
        <DatePicker value={date} onChange={(e) => setDate(e.target.value)} />
      </Filed>
      <Filed title="첫 모임시간">
        <TimePicker value={time} onChange={(e) => setTime(e.target.value)} />
      </Filed>
      <Filed title="모집인원">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
      <Filed title="모임이미지">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
      <Filed title="모임설명">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
      <Filed title="첫 모임 책">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
      <Filed title="모임분야">
        <InputBox value={title} onChange={(e) => setTitle(e.target.value)} />
      </Filed>
    </>
  );
}

export default PlusMetting;
