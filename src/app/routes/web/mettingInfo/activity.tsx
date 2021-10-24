import React, { useState } from 'react';
import Table from 'components/web/Table';
import Button from 'components/web/Button';
import InputBox from 'components/web/InputBox';

// orderby

function Activity() {
  const [searchText, setSearchText] = useState('');

  return (
    <Table
      searchBar={
        <InputBox
          isSearch
          placeholder="활동명, 책"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
          style={{ width: '100%' }}
        />
      }
      actionButtons={<Button label="모임활동 등록" onClick={() => {}} />}
      columns={[
        { column: 'activityName', name: '활동명', align: 'left', useLink: true },
        { column: 'bookName', name: '책', align: 'center' },
        { column: 'location', name: '장소', align: 'center' },
        { column: 'participants', name: '참여인원', align: 'center' },
        { column: 'date', name: '모임일자', align: 'center' },
      ]}
      data={[
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
        {
          activityName: '혁명의 팡파르 독서 토론',
          activityNameLink: '/',
          bookName: '혁명의 팡파르',
          location: '분당구 미금역 스타벅스',
          participants: '4명',
          date: '2021-10-10',
        },
      ]}
    />
  );
}

export default Activity;
