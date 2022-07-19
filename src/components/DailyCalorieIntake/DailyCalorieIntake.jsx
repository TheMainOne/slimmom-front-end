import { useEffect } from 'react';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { getUserData } from 'redux/auth/authSelector';
import { Title, Text, Span } from './DailyCalorieIntake.styled';
import { List } from './List';
import { useTranslation } from 'react-i18next';
export const DailyCalorieIntake = () => {
  const [formula, setFormula] = useState(0);
  const userInfo = useSelector(getUserData);
  const { t } = useTranslation();

  useEffect(() => {
    if (!userInfo) return;

    const { height, age, currentWeight, desiredWeight } = userInfo;
    const formula = Math.floor(
      10 * currentWeight +
        6.25 * height -
        5 * age -
        161 -
        10 * (currentWeight - desiredWeight)
    );
    setFormula(formula);
  }, [userInfo]);

  return (
    <>
      <Title>{t('recommendation')}</Title>
      <Text>
        {formula} <Span>{t('kcal')}</Span>
      </Text>
      <List user={userInfo} />
    </>
  );
};
