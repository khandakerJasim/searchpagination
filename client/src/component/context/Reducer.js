export const datareducer = (state, action) => {
  switch (action.type) {
    case "Setdata":
      return { ...state, data: action.payload };

    case "Finddataid":
      const data = action.payload;
      return { ...state, datadetails: data };

    default:
      return state;
  }
};

export const DetailsReducer = (state, action) => {
  switch (action.type) {
    case "filter_by_gender":
      return { ...state, bygender: action.payload, byage: "" };

    case "filter_by_age":
      return { ...state, byage: action.payload, bygender: "" };
    case "filter_by_search":
      return { ...state, searchquery: action.payload };

    default:
      return state;
  }
};
