const reducer = (
  state,
  {
    type,
    payload: {
      query,
      page,
      images,
      isPending,
      isModalOpen,
      modalImg,
      modalAlt,
      total,
    },
  }
) => {
  switch (type) {
    case 'handleSetQuery':
      return { ...state, query: query };
    case 'handleSubmitForm':
      return { ...state, page: page, isPending: isPending };
    case 'handleTogleModal':
      return {
        ...state,
        isModalOpen: isModalOpen,
        modalImg: modalImg,
        modalAlt: modalAlt,
      };
    case 'handleLoadMore':
      return { ...state, page: page, isPending: isPending };
    case 'isPending':
      return { ...state, isPending: isPending };
    case 'fetchImages':
      return {
        ...state,
        images: images,
        isPending: isPending,
      };
    case 'total':
      return { ...state, total: total };

    default:
      throw new Error(`Unsuported this type action ${type}`);
  }
};

export default reducer;
