export const buildCategories = (data, all = true) => {
  if (all === true) {
    return [
      { label: "All", value: +0 },
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
      { label: "All", value: +0 },
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

export const filterId = (data) => {
  return data.map((item) => item.id);
};

export const filterValue = (data) => {
  return data.map((item) => item.value);
};

export const buildTasks = (data) => {
  if (!data || data.length === 0) return [];
  return data.map((item) => {
    return {
      title: item?.title,
      company: item?.company?.name,
      id: item?.id,
      address: item?.address?.name,
      fail: item?.pivot?.fail,
    };
  });
};
