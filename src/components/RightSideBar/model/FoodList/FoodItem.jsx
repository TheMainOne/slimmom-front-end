import { Item } from './FoodList.styled';

export const FoodItem = ({ productList }) => (
  <>
    {productList?.map((el, index) => (
      <Item key={index}>{el}</Item>
    ))}
  </>
);
