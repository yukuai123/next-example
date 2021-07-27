export default (initStore) => {
  const data = {
    list: [],
    ...initStore,
  };

  return data;
};
