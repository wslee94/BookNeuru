import React from 'react';
import MuiIconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';

interface ImageFileProps {
  isRequired?: boolean;
  label?: string;
  file: string | undefined | null;
  onChange: (event: string) => void;
}

function ImageFile(props: ImageFileProps) {
  const { isRequired, label, file, onChange } = props;

  return (
    <>
      {label && !isRequired ? (
        <div style={{ display: 'flex', marginBottom: '3px' }}>{label ? <span>{label}</span> : null}</div>
      ) : null}
      {label && isRequired ? (
        <div style={{ display: 'flex', marginBottom: '3px' }}>
          {label ? <span>{label}</span> : null}
          {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
        </div>
      ) : null}

      <div>
        <img src={file || undefined} />
        <input
          accept="image/*"
          style={{ display: 'none' }}
          type="file"
          id="image_file"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(URL.createObjectURL(e.target.files?.[0]))}
        />
        <label htmlFor="image_file">
          <MuiIconButton color="primary" component="span">
            <PhotoCamera />
          </MuiIconButton>
        </label>
      </div>
    </>
  );
}

export default ImageFile;
