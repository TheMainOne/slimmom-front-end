import axios from 'axios';

axios.defaults.baseURL = 'https://slimmomproject.herokuapp.com/api/';

export const DailyCalorieIntake = () => {
  const defaultText = ['Flour products', 'Milk', 'Red meat', 'Smoked meats'];
  return (
    <>
      <h2> Your recommended daily calorie intake is</h2>
      <p>2800 kkal</p>
      <h3>Foods you should not eat</h3>
      <ol>
        {defaultText.map(product => (
          <li key={product}>{product}</li>
        ))}
      </ol>
    </>
  );
};

// 10 * currentWeight + 6.25 * height - 5 * age - 161 - 10 * (currentWeight - desiredWeight).

// bannedProducts : [
// "eggs",
// "milk"
//   ]

//   const response = await axios.get('users/daily-norma');
//   console.log(response);
