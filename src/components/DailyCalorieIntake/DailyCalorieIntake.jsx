import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';

import {
  ModalContainer,
  Title,
  Text,
  ListTitle,
} from './DailyCalorieIntake.styled';
import { List } from './List';
export const DailyCalorieIntake = () => {
  const user = useSelector(saveUserInfo);
  const { height, age, currentWeight, desiredWeight } =
    user.payload.userInfo.userInfo;
  const formula = Math.floor(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );
  return (
    <ModalContainer>
      <Title> Your recommended daily calorie intake is</Title>
      <Text>{formula} kkal</Text>
      <ListTitle>Foods you should not eat</ListTitle>
      <List />
    </ModalContainer>
  );
};
