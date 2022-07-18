import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { MobileModal } from 'components/MobileModal';
import styled from 'styled-components';

const DiaryCalendarAndFormStyled = styled.div``;

export const DiaryCalendarAndForm = ({
  addProduct,
  shouldShowForm,
  isMobile,
  showMobileModal,
  toggleModal,
}) => {
  return (
    <DiaryCalendarAndFormStyled>
      <DiaryDateCalendar />

      {shouldShowForm && !isMobile && (
        <DiaryAddProductForm
          addProduct={addProduct}
          toggleModal={toggleModal}
          isMobile={isMobile}
        />
      )}

      {shouldShowForm && isMobile && showMobileModal && (
        <MobileModal onClose={toggleModal}>
          <DiaryAddProductForm
            addProduct={addProduct}
            toggleModal={toggleModal}
          />
        </MobileModal>
      )}
    </DiaryCalendarAndFormStyled>
  );
};
