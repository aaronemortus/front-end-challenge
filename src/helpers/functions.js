export const shuffle = sourceArray => {
  for (var i = 0; i < sourceArray.length - 1; i++) {
    var j = i + Math.floor(Math.random() * (sourceArray.length - i));
    var temp = sourceArray[j];
    sourceArray[j] = sourceArray[i];
    sourceArray[i] = temp;
  }
  return sourceArray;
};

export const sleep = ms => {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
};