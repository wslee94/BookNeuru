import React from 'react';

interface OneLineWrapperProps {
  children: React.ReactNode;
  label?: string;
  isRequired?: boolean;
  style?: object;
}

function OneLineWrapper(props: OneLineWrapperProps) {
  const { children, label, isRequired, style } = props;
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
      <div style={{ ...style, display: 'flex' }}>{children}</div>
    </>
  );
}

OneLineWrapper.defaultProps = {
  label: '',
  isRequired: false,
  style: undefined,
};

export default OneLineWrapper;
