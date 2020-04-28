const userState = {
  name: "The Cure",
  work: [],
};

const userReducer = (state = userState, { type, payload }) => {
  switch (type) {
    case "LOGIN":
      return payload;
    default:
      return state;
  }
};

export default userReducer;
