import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';
import { Title, Text, Span } from './DailyCalorieIntake.styled';
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
    <>
      <Title> Your recommended daily calorie intake is</Title>
      <Text>
        {formula} <Span>kcal</Span>
      </Text>
      <List />
    </>
  );
};
