import React from 'react';
import Table from 'components/web/Table';

// pagenation
// orderby
// customColumn

function Activity() {
  return (
    <Table
      header={[
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
      ]}
    />
  );
}

export default Activity;
