import { useAddProductMutation } from 'redux/apis';
import { DiaryDateCalendar } from 'components/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';
import consumedProducts from 'components/DiaryProductsList/products.json';
import {
  DiaryPageContentStyled,
  DiaryPageStyled,
} from './DiaryPageContent.styled';

export const DiaryPageContent = () => {
  const [addProduct] = useAddProductMutation();

  return (
    <DiaryPageContentStyled>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        <DiaryAddProductForm addProduct={addProduct} />
      </DiaryPageStyled>

      <DiaryProductsList consumedProducts={consumedProducts} />
    </DiaryPageContentStyled>
  );
};
