import React, { useState } from 'react';
import Field from 'components/web/Field';
import InputBox from 'components/web/InputBox';
import ImageFile from 'components/web/ImageFile';
import Editor from 'components/web/Editor';
import Select from 'components/web/Select';
import { selectGenre } from 'data/index';
import Button from 'components/web/Button';
import meeting1 from '../home/sample/meeting1.jpg';

interface InfoProps {
  closeDialog: () => void;
}

function Info({ closeDialog }: InfoProps) {
  const [formMode, setFormMode] = useState('detail');
  const [title, setTitle] = useState('한 작가 깊게 파기');
  const [location, setLocation] = useState('서울시 강남구');
  const [imageFile, setImageFile] = useState<string | null>(null);
  const [description, setDescription] = useState(`<h2>보다 깊게 탐독하고 두루 섭렵하고 싶은 마음으로</h2>
  <p>빼어난 작품을 한 권 읽고 나면 작가가 보여준 세계에 정신없이 빠지게 됩니다. 동시에 그 작가의 세계로 보다 깊이 들어가 더 넓게 탐독하고 싶은 욕구에 시달립니다. 한 작가를 속속들이 이해한다는 것은 사상의 한 모퉁이를 점령한 기분을 줄 테니까요.</p>
  <p></p>
  <p>이번 시즌 우리가 빠져볼 작가는 데이비드 포스터 월리스입니다. 그의 책을 읽으면 작가적 위대함의 근원이 무엇인지 문뜩 헤아리게 됩니다.</p>
  <p></p>
  <p>‘부활’이나 ‘죄와 벌’ 같은 압도적 소설의 스케일로서가 아니라 에세이 몇 권으로 문호의 반열에 오른다는 것은 무엇일까요? 우울증과 마약, 알코올 중독 사이에서 불가해한 세상을 집요하게 헤집다 일찍 세상을 뜬 작가의 무엇이 가장 혁명적인 작가라는 레이블을 달게 만들었을까요?</p>
  <p></p>
  <p>신드롬의 불길 속에서 페이지마다 현재성이 작렬하는 데이비드 포스터 월리스의 비밀을 함께 들추어 봅시다.</p>  
  <p></p>
  <p>『GQ KOREA』의 초대 편집장 이충걸 님과 함께 데이비드 포스터 월리스의 깊숙한 내면을 들여다보고 싶은 분, 작가의 베스트셀러가 아닌 아무도 모르는 책을 발견하고 완독하고 싶은 분들 모두 모두 환영합니다!</p>  
  `);
  const [genre, setGenre] = useState<string>('1');

  return (
    <>
      <div>
        <Field title="모임명" isRequired={formMode !== 'detail'}>
          <InputBox value={title} onChange={(e) => setTitle(e.target.value)} isReadOnly={formMode === 'detail'} />
        </Field>
        <Field title="모임분야">
          <Select
            value={genre}
            options={selectGenre}
            style={{ width: 200 }}
            onChange={(value) => setGenre(value)}
            isReadOnly={formMode === 'detail'}
          />
        </Field>
        <Field title="주 모임장소">
          <InputBox value={location} onChange={(e) => setLocation(e.target.value)} isReadOnly={formMode === 'detail'} />
        </Field>
        <Field title="모임이미지">
          <ImageFile
            alt="모임이미지"
            size="x-large"
            file={meeting1}
            onChange={(file) => setImageFile(file)}
            previewType="square"
            isReadOnly={formMode === 'detail'}
          />
        </Field>
        <Field title="모임설명" isRequired={formMode !== 'detail'}>
          <Editor value={description} onChange={(value) => setDescription(value)} isReadOnly={formMode === 'detail'} />
        </Field>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {formMode === 'detail' && (
          <>
            <Button size="large" label="수정" onClick={() => setFormMode('modify')} style={{ margin: '5px' }} />
            <Button type="inverted" size="large" label="닫기" onClick={() => closeDialog()} style={{ margin: '5px' }} />
          </>
        )}
        {formMode === 'modify' && (
          <>
            <Button size="large" label="저장" onClick={() => setFormMode('modify')} style={{ margin: '5px' }} />
            <Button
              type="inverted"
              size="large"
              label="취소"
              onClick={() => setFormMode('detail')}
              style={{ margin: '5px' }}
            />
          </>
        )}
      </div>
    </>
  );
}

export default Info;
