import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import { ModalContent } from './ModalContent/ModalContent';
import useResizeAware from 'react-resize-aware';

const MuiDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    width: 672,
    height: 560,
  },
}));

export const Modal = ({ showModal, setShowModal }) => {
  const [resizeListener, { width }] = useResizeAware();
  const mobileWidth = width <= 767;
  const handleClose = () => {
    setShowModal(prev => !prev);
  };

  return (
    <>
      {resizeListener}
      {!mobileWidth && (
        <div>
          <MuiDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={showModal}
            maxWidth={false}
          >
            <ModalContent setShowModal={setShowModal} />
          </MuiDialog>
        </div>
      )}
    </>
  );
};
