const stationReducer = (state = "", { type, payload }) => {
  switch (type) {
    case "UPDATESTATION":
      return payload;
    default:
      return state;
  }
};

export default stationReducer;
