export const arrayToString = (arr) => {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += arr[i].content + ", ";
  }
  return s;
};
