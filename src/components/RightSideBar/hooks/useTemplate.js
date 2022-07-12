export const useTemplate = foodListTest => {
  const list = Object.keys(foodListTest).map(categories => {
    console.log('~ foodListTest', foodListTest); // зерновые: {products: Array(35), total: 35, totalInBase: 299}, молочные: {products: Array(4), total: 4, totalInBase: 431}
    console.log('foodListTest[categories]', foodListTest[categories]); //  {products: Array(35), total: 35, totalInBase: 299}
    console.log('~ categories', categories); // зерновые

    return (
      all(foodListTest[categories], categories) ||
      some(foodListTest, categories) ||
      almost(foodListTest, categories) ||
      categories
    );
  });

  console.log('~ list', list);
};

function all({ total, totalInBase }, category) {
  return total === totalInBase ? `Все продукти из групы: ${category}.` : null;
}

function almost({ total, totalInBase }, category) {
  console.log('~ total > totalInBase / 2', total > totalInBase / 2);

  return total > totalInBase / 2
    ? `Большенство продуктов из групы: ${category}.`
    : null;
}

function some({ total, products }, category) {
  console.log('~  total <= 4', total <= 4);
  const listOfProducts = products.map(pr => pr.title.ru).join(', ');
  return total <= 4
    ? `Некоторые продукты из групы: ${category} (${listOfProducts}).`
    : null;
}
