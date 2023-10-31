export const buildCategories = (data) => {
  return [
    { label: "All", value: 0 },
    ...data.map((item) => {
      return { label: item.content, value: item.id };
    }),
  ];
};

export const buildAddress = (data) => {
  return [
    { label: "All", value: 0 },
    ...data.map((item) => {
      return { label: item.name, value: item.id };
    }),
  ];
};
