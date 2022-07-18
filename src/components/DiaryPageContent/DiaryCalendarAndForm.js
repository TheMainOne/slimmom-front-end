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
  toggleMobileModal,
}) => {
  return (
    <DiaryCalendarAndFormStyled>
      <DiaryDateCalendar />

      {shouldShowForm && !isMobile && (
        <DiaryAddProductForm
          addProduct={addProduct}
          toggleMobileModal={toggleMobileModal}
        />
      )}

      {shouldShowForm && isMobile && showMobileModal && (
        <MobileModal onClose={toggleMobileModal}>
          <DiaryAddProductForm
            addProduct={addProduct}
            toggleMobileModal={toggleMobileModal}
            isMobile={isMobile}
          />
        </MobileModal>
      )}
    </DiaryCalendarAndFormStyled>
  );
};
