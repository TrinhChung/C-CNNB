export const buildCategories = (data, all = true) => {
  if (all === true) {
    return [
      { label: "All", value: 0 },
      ...data.map((item) => {
        return { label: item.content, value: item.id };
      }),
    ];
  } else {
    return data.map((item) => {
      return { label: item.content, value: item.id };
    });
  }
};

export const buildAddress = (data, all = true) => {
  if (all === true) {
    return [
      { label: "All", value: 0 },
      ...data.map((item) => {
        return { label: item.name, value: item.id };
      }),
    ];
  } else {
    return data.map((item) => {
      return { label: item.name, value: item.id };
    });
  }
};
