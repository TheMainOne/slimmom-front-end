// import { useNavigate } from 'react-router-dom';
import { CloseModalButton } from '../../../Modal/Modal.styled';
import { HeaderLink } from '../Navigation.styled';

export const HeaderModalContent = ({ setShowModal }) => {
  // const navigate = useNavigate();

  return (
    <div>
       <HeaderLink
          to="/diary"
            // stylehidden={styles.isHidden}
            //   style={styles.link}
                 >
           Diary
        </HeaderLink>
         <HeaderLink
         to="/calculator"
        // stylehidden={styles.isHidden}
        //  style={styles.link}
          >
         Calculator
      </HeaderLink>
      <CloseModalButton
        aria-label="Close modal"
        onClick={() => {
          setShowModal(prev => !prev);
        }}
      />
    </div>
  );
};
