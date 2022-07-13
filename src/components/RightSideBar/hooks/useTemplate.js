export const useTemplate = foodListTest => {
  const list = Object.keys(foodListTest).map(
    categories =>
      all(foodListTest[categories], categories) ||
      some(foodListTest[categories], categories) ||
      almost(foodListTest[categories], categories) ||
      categories
  );

  console.log('~ list IN Templalte', list);

  return list;
};
// TEMPLATES //

function all({ total, totalInBase }, category) {
  return total === totalInBase ? `Все продукти из групы: ${category}.` : null;
}

function almost({ total, totalInBase }, category) {
  return total > totalInBase / 2
    ? `Большенство продуктов из групы: ${category}.`
    : null;
}

function some({ total, products = [] }, category) {
  const listOfProducts = products?.map(pr => pr.title.ru).join(', ');
  return total <= 4
    ? `Некоторые продукты из групы: ${category} (${listOfProducts}).`
    : null;
}
