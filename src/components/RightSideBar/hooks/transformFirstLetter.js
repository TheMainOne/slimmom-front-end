export const transformFirstLetter = array => {
  array[0] = array[0][0].toUpperCase() + array[0].substring(1);

  return array;
};
