const capitalizeString = (string) => {
  let newString = string.replace(/[^a-z\s]/gi, '').replace(/\s{2,}/g, ' ');
  return newString.slice(0, 1).toUpperCase() + newString.slice(1);
};

export default capitalizeString;
