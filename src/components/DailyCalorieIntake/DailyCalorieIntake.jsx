import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { Title, Text, Span, Wrapper } from './DailyCalorieIntake.styled';
import { useGetBannedProductsMutation } from 'redux/apis/userNormaApi';
import { Spinner } from 'components/Spinner';
import { List } from './List';
import { useTranslation } from 'react-i18next';
import { getUserData } from 'redux/auth/authSelector';
export const DailyCalorieIntake = () => {
  const { t } = useTranslation();
  const userInfo = useSelector(getUserData);

  const [getBannedProducts, { data, isLoading }] =
    useGetBannedProductsMutation();
  useEffect(() => {
    if (!userInfo) return;
    const { height, age, currentWeight, desiredWeight, bloodType } = userInfo;

    getBannedProducts({
      currentWeight,
      height,
      age,
      desiredWeight,
      bloodType,
    });
  }, [getBannedProducts, userInfo]);

  const formula = data?.results?.dailyRate;

  return (
    <>
      <Title>{t('recommendation')}</Title>
      <Wrapper>
        {isLoading ? (
          <Spinner />
        ) : (
          <>
            <Text>
              {formula} <Span>{t('kcal')}</Span>
            </Text>

            <List user={userInfo} data={data} isLoading={isLoading} />
          </>
        )}
      </Wrapper>
    </>
  );
};
