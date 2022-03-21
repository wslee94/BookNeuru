import React, { useRef, useEffect } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor as ToastEditor, Viewer } from '@toast-ui/react-editor';

import './custom.scss';

interface EditorProps {
  value: string;
  onChange: (arg0: string) => void;
  height?: number;
  isReadOnly?: boolean;
}

function Editor(props: EditorProps) {
  const { value, height, isReadOnly, onChange } = props;

  if (isReadOnly) return <Viewer initialValue={value} />;

  const editorRef = useRef<any>();

  const handleChange = () => {
    onChange(editorRef.current.getInstance().getHTML());
  };

  const init = () => {
    editorRef.current.getInstance().setHTML('');
  };

  useEffect(() => {
    if (!value) init();
  }, [value]);

  return (
    <ToastEditor
      initialValue={value}
      onChange={handleChange}
      ref={editorRef}
      height={`${height}px`}
      plugins={[colorSyntax]}
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut
      usageStatistics={false}
      hideModeSwitch
    />
  );
}

Editor.defaultProps = {
  height: 600,
  isReadOnly: false,
};

export default Editor;
