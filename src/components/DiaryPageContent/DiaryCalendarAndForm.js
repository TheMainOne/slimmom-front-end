import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { MobileModal } from 'components/MobileModal';
import { useMobileModal } from 'hooks/ui';
import styled from 'styled-components';

const DiaryCalendarAndFormStyled = styled.div``;

export const DiaryCalendarAndForm = ({
  addProduct,
  shouldShowForm,
  isMobile,
}) => {
  const [showMobileModal, , hideMobileModal] = useMobileModal();

  return (
    <DiaryCalendarAndFormStyled>
      <DiaryDateCalendar />

      {shouldShowForm && !isMobile && (
        <DiaryAddProductForm
          addProduct={addProduct}
          hideMobileModal={hideMobileModal}
        />
      )}

      {shouldShowForm && isMobile && showMobileModal && (
        <MobileModal hideMobileModal={hideMobileModal}>
          <DiaryAddProductForm
            addProduct={addProduct}
            hideMobileModal={hideMobileModal}
            isMobile={isMobile}
          />
        </MobileModal>
      )}
    </DiaryCalendarAndFormStyled>
  );
};
