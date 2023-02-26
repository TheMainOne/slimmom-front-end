import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';

import { ModalContent } from './ModalContent/ModalContent';
import { MobileModal } from 'components/MobileModal';
import { useMedia, useMobileModal } from 'hooks/ui';

const MuiDialog = styled(Dialog)(({ theme }) => ({
  '& .MuiDialogContent-root': {
    width: 672,
    height: 560,
  },
}));

export const Modal = ({ showModal, setShowModal }) => {
  const { isMobile } = useMedia();

  const [showMobileModal, , hideMobileModal] = useMobileModal();

  const handleClose = () => {
    setShowModal(prev => !prev);

    if (showMobileModal) {
      hideMobileModal();
    }
  };

  return (
    <div>
      {!isMobile ? (
        <div>
          <MuiDialog
            onClose={handleClose}
            aria-labelledby="customized-dialog-title"
            open={showModal || showMobileModal}
            maxWidth={false}
          >
            <DialogContent>
              <ModalContent handleClose={handleClose} />
            </DialogContent>
          </MuiDialog>
        </div>
      ) : (
        <MobileModal hideMobileModal={hideMobileModal}>
          <ModalContent />
        </MobileModal>
      )}
    </div>
  );
};
