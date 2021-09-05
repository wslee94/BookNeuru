import React, { useRef } from 'react';
import '@toast-ui/editor/dist/toastui-editor.css';
import 'tui-color-picker/dist/tui-color-picker.css';
import '@toast-ui/editor-plugin-color-syntax/dist/toastui-editor-plugin-color-syntax.css';
import '@toast-ui/editor/dist/toastui-editor-viewer.css';
import colorSyntax from '@toast-ui/editor-plugin-color-syntax';
import { Editor as ToastEditor } from '@toast-ui/react-editor';
import { Viewer } from '@toast-ui/react-editor';

interface EditorProps {
  value: string;
  onChange: (arg0: string) => void;
  height?: number;
  isReadOnly?: boolean;
}

function Editor(props: EditorProps) {
  const { value, height = 600, isReadOnly, onChange } = props;

  if (isReadOnly) return <Viewer initialValue={value} />;

  const editorRef = useRef<any>();

  const handleChange = () => {
    onChange(editorRef.current.getInstance().getHTML());
  };

  return (
    <ToastEditor
      initialValue={value}
      onChange={handleChange}
      ref={editorRef}
      height={`${height}px`}
      plugins={[colorSyntax]}
      previewStyle="vertical"
      initialEditType="wysiwyg"
      useCommandShortcut={true}
      usageStatistics={false}
      hideModeSwitch={true}
    />
  );
}

export default Editor;
