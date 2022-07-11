import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

import { Spinner } from 'components/Spinner';

import { DiaryPageStyled } from './DiaryPage.styled';

import { selectActiveDate } from 'redux/slices';
import { useAddProductMutation } from 'redux/apis';
import { RightSideBar } from 'components/RightSideBar/RightSideBar';
import { PageContainer } from 'components/Container';
import { DiaryDateCalendar } from '../../components/DiaryDateCalendar';
import { DiaryAddProductForm } from 'components/Forms/DiaryAddProductForm';

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
        <DiaryDateCalendar />

        <DiaryAddProductForm />

        {isAddingProduct ? (
          <Spinner />
        ) : (
          <>
            <p>DiaryProductsList</p>
            {/* <DiaryProductsList items={items} /> */}
          </>
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
