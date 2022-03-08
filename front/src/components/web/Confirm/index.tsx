import React from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import InfoIcon from '@material-ui/icons/Info';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    modal: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
    paper: {
      backgroundColor: theme.palette.background.paper,
      borderRadius: '10px',
      border: '2px solid #000',
      boxShadow: theme.shadows[5],
      padding: theme.spacing(2, 4, 3),
      minWidth: '300px',
    },
    buttonArea: {
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      marginTop: '40px',
      gap: '10px',
    },
    titleArea: {
      display: 'flex',
      alignItems: 'center',
    },
  }),
);

interface ConfirmProps {
  isOpen: boolean;
  handleClose: () => void;
  handleOK?: () => void;
  title: string | object;
  text: string | object;
}

function Confirm({ isOpen, handleClose, handleOK, title, text }: ConfirmProps) {
  const classes = useStyles();

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={isOpen}
      onClose={handleClose}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={isOpen}>
        <div className={classes.paper}>
          <div className={classes.titleArea}>
            <div style={{ marginRight: '5px', marginTop: '6px' }}>
              <InfoIcon style={{ fontSize: '35px' }} />
            </div>
            <h3>{title}</h3>
          </div>
          <p>{text}</p>
          <div className={classes.buttonArea}>
            <Button onClick={handleOK} variant="contained" color="primary">
              확인
            </Button>
            <Button onClick={handleClose} variant="contained" color="default">
              취소
            </Button>
          </div>
        </div>
      </Fade>
    </Modal>
  );
}

Confirm.defaultProps = {
  handleOK: () => {
    // default 빈 함수
  },
};

export default Confirm;
