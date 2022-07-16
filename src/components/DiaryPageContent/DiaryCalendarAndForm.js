import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import { MobileModal } from 'components/MobileModal';
import { useShowModal } from 'hooks/ui';
import useResizeAware from 'react-resize-aware';
import styled from 'styled-components';

const DiaryCalendarAndFormStyled = styled.div``;
const TABLET_WIDTH_BREAKPOINT = 768;

export const DiaryCalendarAndForm = ({ addProduct, shouldShowForm }) => {
  const [resizeListener, { width }] = useResizeAware();
  const isMobile = width < TABLET_WIDTH_BREAKPOINT;
  const [showMobileModal, toggleModal] = useShowModal();

  return (
    <DiaryCalendarAndFormStyled>
      {resizeListener}

      <DiaryDateCalendar />

      {shouldShowForm && !isMobile && (
        <DiaryAddProductForm addProduct={addProduct} />
      )}

      {shouldShowForm && isMobile && showMobileModal && (
        <MobileModal onClose={toggleModal}>
          <DiaryAddProductForm addProduct={addProduct} />
        </MobileModal>
      )}
    </DiaryCalendarAndFormStyled>
  );
};
