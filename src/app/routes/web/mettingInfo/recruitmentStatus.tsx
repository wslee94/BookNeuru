import React from 'react';
import Field from 'components/web/Field';

function RecruitmentStatus() {
  return (
    <>
      <Field title="상태">모집중</Field>
      <Field title="평균연령대">20대</Field>
      <Field title="인원현황">3/4명</Field>
      <Field title="성비">
        <div style={{ display: 'flex', gap: '5px' }}>
          {[{ sex: 'm' }, { sex: 'm' }, { sex: 'f' }].map((n, index) => {
            if (n.sex === 'm')
              return <i key={index} className="fas fa-male" style={{ fontSize: 22, color: 'blue' }}></i>;
            return <i key={index} className="fas fa-female" style={{ fontSize: 22, color: 'red' }}></i>;
          })}
        </div>
      </Field>
    </>
  );
}

export default RecruitmentStatus;
