export const buildCategories = (data) => {
  return data.map((item) => {
    return { label: item.content, value: item.id };
  });
};

export const buildAddress = (data) => {
  return data.map((item) => {
    return { label: item.name, value: item.id };
  });
};
