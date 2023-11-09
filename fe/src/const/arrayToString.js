export const arrayToString = (arr) => {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += arr[i].content;
    if (i < arr.length - 1) {
      s += ", ";
    }
  }
  return s;
};

export const arrayToPlaces = (arr) => {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += arr[i].name;
    if (i < arr.length - 1) {
      s += ", ";
    }
  }
  return s;
};

export const taskCategories = (arr) => {
  let s = "";
  for (let i = 0; i < arr.length; i++) {
    s += arr[i].category.content;
    if (i < arr.length - 1) {
      s += ", ";
    }
  }
  return s;
};
