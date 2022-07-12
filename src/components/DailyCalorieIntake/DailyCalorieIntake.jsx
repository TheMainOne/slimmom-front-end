import {
  ModalContainer,
  Title,
  Text,
  ListTitle,
} from './DailyCalorieIntake.styled';
import { List } from './List';
export const DailyCalorieIntake = () => {
  return (
    <ModalContainer>
      <Title> Your recommended daily calorie intake is</Title>
      <Text>2800 kkal</Text>
      <ListTitle>Foods you should not eat</ListTitle>
      <List />
    </ModalContainer>
  );
};

// 10 * currentWeight + 6.25 * height - 5 * age - 161 - 10 * (currentWeight - desiredWeight).
