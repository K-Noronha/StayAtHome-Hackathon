import main from "../../data/main";

const stationReducer = (state = main, { type, payload }) => {
  switch (type) {
    case "UPDATESTATION":
      return payload;
    default:
      return state;
  }
};

export default stationReducer;
