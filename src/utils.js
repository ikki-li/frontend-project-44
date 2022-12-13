export const getRandNmb = (begin, end) => Math.floor(Math.random() * (end - begin + 1) + begin);

export const getRandIndex = (coll) => Math.floor(Math.random() * coll.length);
