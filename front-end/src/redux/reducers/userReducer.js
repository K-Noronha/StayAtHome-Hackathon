import profilepic from "../../assets/profilepic.png";

const userState = {
  name: "Brian",
  image: profilepic,
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
