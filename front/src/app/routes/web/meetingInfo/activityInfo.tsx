import React, { useState } from 'react';
import moment from 'moment';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import DatePicker from 'components/web/DatePicker';
import TimePicker from 'components/web/TimePicker';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import AutoComplete from 'components/web/AutoComplete';
import AutoCompleteBook from 'components/web/AutoCompleteBook';
import Button from 'components/web/Button';
import { selectGenre } from 'data/index';

type formMode = 'detail' | 'modify';

interface ActivityInfoProps {
  dialogMode: boolean;
  formMode?: formMode;
  closeDialog?: () => void;
  setFormMode?: (arg0: formMode) => void;
}

function ActivityInfo({ dialogMode, closeDialog, formMode, setFormMode }: ActivityInfoProps) {
  const [title, setTitle] = useState('');
  const [date, setDate] = useState(moment().format('YYYY-MM-DD'));
  const [time, setTime] = useState('00:00');
  const [location, setLocation] = useState('');
  const [participants, setParticipants] = useState<any>([]);
  const [description, setDescription] = useState('');
  const [genre, setGenre] = useState<string>('');

  const isDetail = formMode === 'detail';

  return (
    <div style={{ height: '100%', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
      <div>
        <Field title="활동명" isRequired={!isDetail}>
          <InputBox value={title} onChange={(e) => setTitle(e.target.value)} isReadOnly={isDetail} />
        </Field>
        <Field title="책" isRequired={!isDetail}>
          <AutoCompleteBook
            value={null}
            onChange={() => {
              //
            }}
            isReadOnly={isDetail}
          />
          {/* <InputBox value={book} onChange={(e) => setBook(e.target.value)} isReadOnly={isDetail} /> */}
        </Field>
        <Field title="일자">
          <DatePicker value={date} onChange={(e) => setDate(e.target.value)} isReadOnly={isDetail} />
        </Field>
        <Field title="시간">
          <TimePicker value={time} onChange={(e) => setTime(e.target.value)} isReadOnly={isDetail} />
        </Field>
        <Field title="내용">
          <Editor value={description} onChange={(value) => setDescription(value)} isReadOnly={isDetail} />
        </Field>
        <Field title="장소">
          <InputBox value={location} onChange={(e) => setLocation(e.target.value)} isReadOnly={isDetail} />
        </Field>
        <Field title="참여자">
          <AutoComplete
            value={participants}
            multiple
            options={[
              { key: 1, text: '홍길동' },
              { key: 2, text: '홍길순' },
              { key: 3, text: '김철수' },
              { key: 4, text: '이순신' },
            ]}
            onChange={(arr) => setParticipants(arr)}
            isReadOnly={isDetail}
          />
        </Field>
        <Field title="활동분야">
          <Select
            value={genre}
            options={selectGenre}
            style={{ width: 200 }}
            onChange={(value) => setGenre(value)}
            isReadOnly={isDetail}
          />
        </Field>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {dialogMode ? (
          <>
            <Button
              size="large"
              label="저장"
              onClick={() => {
                //
              }}
              style={{ margin: '5px' }}
            />
            <Button
              type="inverted"
              size="large"
              label="닫기"
              onClick={() => closeDialog && closeDialog()}
              style={{ margin: '5px' }}
            />
          </>
        ) : (
          <>
            {formMode === 'detail' && (
              <Button
                size="large"
                label="수정"
                onClick={() => setFormMode && setFormMode('modify')}
                style={{ margin: '5px' }}
              />
            )}
            {formMode === 'modify' && (
              <>
                <Button
                  size="large"
                  label="저장"
                  onClick={() => {
                    //
                  }}
                  style={{ margin: '5px' }}
                />
                <Button
                  size="large"
                  label="취소"
                  onClick={() => setFormMode && setFormMode('detail')}
                  style={{ margin: '5px' }}
                />
              </>
            )}
          </>
        )}
      </div>
    </div>
  );
}

export default ActivityInfo;

ActivityInfo.defaultProps = {
  closeDialog: undefined,
  formMode: undefined,
  setFormMode: undefined,
};
