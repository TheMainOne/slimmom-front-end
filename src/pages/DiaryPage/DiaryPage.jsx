import { Spinner } from 'components/Spinner';
import { DiaryPageStyled } from './DiaryPage.styled';
import { DiaryDateCalendar } from 'pages/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
import consumedProducts from 'components/DiaryProductsList/products.json';

import { useAddProductMutation } from 'redux/apis';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { PageContainer } from 'components/Container';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';

const DiaryPage = () => {
  // const { data: products, isLoading } = useGetProductsQuery();
  const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();

  return (
    <PageContainer>
      <DiaryPageStyled>
        <DiaryDateCalendar />

        <DiaryAddProductForm addProduct={addProduct} />

        {isAddingProduct ? (
          <Spinner />
        ) : (
          <DiaryProductsList consumedProducts={consumedProducts} />
        )}
      </DiaryPageStyled>
      <RightSideBar />
    </PageContainer>
  );
};

export default DiaryPage;

/*
DiaryPage

34.Верстка мобілка, планшет, десктоп. Відповідає за позиціонування на сторінці елементів та компонентів. Заімпортувати цей компонент його підкомпоненти: DiaryDateСalendar, DiaryAddProductForm і DiaryProductsList. Приватна сторінка
*/
