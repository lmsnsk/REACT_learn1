export const requiredField = (value) => {
  if (value) return undefined;
  return "Field is required!";
};

export const maxLengthCreator = (maxLength) => (value) => {
  if (value && value.length > maxLength) return `The number of symbols can't be more then ${maxLength}`;
  return undefined;
};
