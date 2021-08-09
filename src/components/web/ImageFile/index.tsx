import React from 'react';
import MuiButton from '@material-ui/core/Button';
import AttachFile from '@material-ui/icons/AttachFile';
import noneImage from 'public/img/none_user_image.png';

interface ImageFileProps {
  isRequired?: boolean;
  label?: string;
  size?: 'small' | 'medium' | 'large';
  alt: string;
  align?: undefined | 'left' | 'center' | 'right';
  file: string | undefined | null;
  onChange: (event: string) => void;
}

function ImageFile(props: ImageFileProps) {
  const { isRequired, label, size = 'small', alt, align, file, onChange } = props;

  let justifyContent = 'left';
  if (align === 'left') justifyContent = 'flex-start';
  else if (align === 'center') justifyContent = 'center';
  else if (align === 'right') justifyContent = 'flex-end';

  return (
    <>
      {label && !isRequired ? (
        <div style={{ display: 'flex', marginBottom: '8px' }}>{label ? <span>{label}</span> : null}</div>
      ) : null}
      {label && isRequired ? (
        <div style={{ display: 'flex', marginBottom: '8px' }}>
          {label ? <span>{label}</span> : null}
          {isRequired ? <span style={{ color: 'red' }}>*</span> : null}
        </div>
      ) : null}

      <div style={{ display: 'flex', alignItems: 'center', justifyContent }}>
        <div>
          <img className={`image-preview-${size}`} alt={alt} src={file || noneImage} />
        </div>
        <div style={{ marginLeft: '10px' }}>
          <input
            accept="image/*"
            style={{ display: 'none' }}
            type="file"
            id="image_file"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) => onChange(URL.createObjectURL(e.target.files?.[0]))}
          />
          <label htmlFor="image_file">
            <MuiButton
              style={{ minWidth: '0px', padding: '4px 2px' }}
              size="small"
              variant="contained"
              color="primary"
              component="span"
            >
              <AttachFile />
            </MuiButton>
          </label>
        </div>
      </div>
    </>
  );
}

export default ImageFile;
