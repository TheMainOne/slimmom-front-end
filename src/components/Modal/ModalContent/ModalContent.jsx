import { Button } from 'components/Button';
import { Content, CloseModalButton } from '../Modal.styled';

export const ModalContent = ({ setShowModal }) => {
  return (
    <div>
      <Content>
        <h1>Modal Content</h1>
        <Button
          onClick={() => {
            setShowModal(prev => !prev);
          }}
        />
      </Content>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      />
    </div>
  );
};
