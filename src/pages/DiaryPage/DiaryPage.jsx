// import { DiaryProductsList } from 'components/DiaryProductsList';
// import { useGetProductsQuery } from 'redux/apis';
// import { Spinner } from "components/Spinner";

import { DiaryPageStyled } from './DiaryPage.styled';

const DiaryPage = () => {
  // const { data: products, isLoading } = useGetProductsQuery();

  return (
    <DiaryPageStyled>
      {/* <DiaryDateСalendar /> */}
      <p>🚧 🏗 Under construction:</p>
      <p>DiaryDateСalendar</p>
      <p>DiaryAddProductForm</p>
      <p>DiaryProductsList</p>
      {/* <DiaryAddProductForm /> */}
      {/* {isLoading ? <Spinner /> : <DiaryProductsList items={items} />} */}
    </DiaryPageStyled>
  );
};

export default DiaryPage;

/*
DiaryPage

34.Верстка мобілка, планшет, десктоп. Відповідає за позиціонування на сторінці елементів та компонентів. Заімпортувати цей компонент його підкомпоненти: DiaryDateСalendar, DiaryAddProductForm і DiaryProductsList. Приватна сторінка
*/
