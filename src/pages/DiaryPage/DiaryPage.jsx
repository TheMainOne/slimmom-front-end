import { useCallback } from 'react';
import { useSelector } from 'react-redux';
import { toast } from 'react-toastify';

// import { DiaryProductsList } from 'components/DiaryProductsList';

import { Spinner } from 'components/Spinner';

import { DiaryPageStyled } from './DiaryPage.styled';
import { DiaryDateCalendar } from 'pages/DiaryDateCalendar';

import { selectActiveDate } from 'redux/slices';
import { useAddProductMutation } from 'redux/apis';
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
    <DiaryPageStyled>
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
        <>
          <p>DiaryProductsList</p>
          {/* <DiaryProductsList items={items} /> */}
        </>
      )}
    </DiaryPageStyled>
  );
};

export default DiaryPage;

/*
DiaryPage

34.Верстка мобілка, планшет, десктоп. Відповідає за позиціонування на сторінці елементів та компонентів. Заімпортувати цей компонент його підкомпоненти: DiaryDateСalendar, DiaryAddProductForm і DiaryProductsList. Приватна сторінка
*/
