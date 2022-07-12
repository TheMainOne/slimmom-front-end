import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// import { DiaryProductsList } from 'components/DiaryProductsList';

import { Spinner } from 'components/Spinner';
import Container from 'components/Container';
import { DiaryPageStyled } from './DiaryPage.styled';
import { DiaryDateCalendar } from 'pages/DiaryDateCalendar';
import DiaryProductsList from 'components/DiaryProductsList';
import consumedProducts from 'components/DiaryProductsList/products.json';

import { selectActiveDate } from 'redux/slices';
import { useAddProductMutation } from 'redux/apis';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { PageContainer } from 'components/Container';
const { stringify } = JSON;

const DiaryPage = () => {
  // const { data: products, isLoading } = useGetProductsQuery();
  const [addProduct, { isLoading: isAddingProduct }] = useAddProductMutation();
  const date = useSelector(selectActiveDate);

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const form = e.currentTarget;
      const formData = new FormData(form);
      const productName = formData.get('productName').trim();
      const weight = formData.get('weight').trim();

      if (!date || !productName || !weight) {
        return toast('Please fill all fields');
      }

      addProduct({ date, productName, weight });
      toast(`POST: ${stringify({ date, productName, weight }, null, 2)}`);
      form.reset();
    },
    [addProduct, date]
  );

  return (
    <PageContainer>
      <DiaryPageStyled>
        <Container>
          <DiaryDateCalendar />

          {/* <DiaryAddProductForm /> */}
          <form
            onSubmit={onSubmit}
            style={{ display: 'flex', gap: '32px', flexWrap: 'wrap' }}
          >
            <label>
              <input
                name="productName"
                type="text"
                minLength={3}
                maxLength={40}
                required
              />
            </label>

            <label>
              scrollbar
              <input
                name="weight"
                type="text"
                minLength={2}
                maxLength={6}
                pattern="\d{2,6}"
                title="min 2, max 6 digits"
                required
              />
            </label>

            <button type="submit" style={{ padding: '10px' }}>
              [+]
            </button>
          </form>

          {isAddingProduct ? (
            <Spinner />
          ) : (
            <DiaryProductsList consumedProducts={consumedProducts} />
          )}
        </Container>
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
