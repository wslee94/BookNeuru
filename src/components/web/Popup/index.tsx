import React from 'react';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import DialogContentText from '@material-ui/core/DialogContentText';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { useTheme } from '@material-ui/core/styles';

interface PopupProps {
  handleClose: () => void;
  isOpen: boolean;
  children: object;
  title: string;
  actionButton: object;
  maxWidth?: 'xs' | 'sm' | 'md' | 'lg' | 'xl';
  contentText?: string;
}

function Popup(props: PopupProps) {
  const { handleClose, isOpen, children, title, actionButton, maxWidth = 'xs', contentText } = props;
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('sm'));

  return (
    <Dialog open={isOpen} onClose={handleClose} maxWidth={maxWidth} fullWidth fullScreen={fullScreen}>
      <DialogTitle>{title}</DialogTitle>
      <DialogContent dividers>
        <>
          {contentText ? <DialogContentText>{contentText}</DialogContentText> : null}
          {children}
        </>
      </DialogContent>
      <DialogActions>{actionButton}</DialogActions>
    </Dialog>
  );
}

export default Popup;
