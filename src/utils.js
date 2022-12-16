// eslint-disable-next-line arrow-body-style
export const getRandomNumber = (begin, end) => {
  return Math.floor(Math.random() * (end - begin + 1) + begin);
};

export const getRandomIndex = (data) => Math.floor(Math.random() * data.length);
