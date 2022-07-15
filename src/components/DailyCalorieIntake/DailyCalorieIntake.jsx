// import { saveUserInfo } from 'redux/slices';
import { useSelector } from 'react-redux';
import { Title, Text, Span } from './DailyCalorieIntake.styled';
import { List } from './List';
import { useTranslation } from 'react-i18next';
import { getUserParams } from 'redux/slices/selector';
export const DailyCalorieIntake = () => {
  const { t } = useTranslation();

  const user = useSelector(getUserParams);
  if (!user) return;
  const { height, age, currentWeight, desiredWeight } = user;
  const formula = Math.floor(
    10 * currentWeight +
      6.25 * height -
      5 * age -
      161 -
      10 * (currentWeight - desiredWeight)
  );
  return (
    <>
      <Title>{t('recommendation')}</Title>
      <Text>
        {formula} <Span>{t('kcal')}</Span>
      </Text>
      <List user={user} />
    </>
  );
};
