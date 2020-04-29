import soup from "../assets/soup.png";
import salad from "../assets/salad.png";
import meat from "../assets/meat.png";
import rice from "../assets/rice.png";

const popular = {
  topic: "Popular",
  activities: [
    { title: "Tom Yam Gong Soup", thumbnail: soup },
    { title: "Salad dalada", thumbnail: salad },
    { title: "A mix for meat", thumbnail: meat },
    { title: "Pan fried rice makes difference", thumbnail: rice },
    { title: "Pan fried rice makes difference", thumbnail: rice },
    { title: "Pan fried rice makes difference", thumbnail: rice },
    { title: "Pan fried rice makes difference", thumbnail: rice },
  ],
};

const recommend = {
  topic: "Recommended",
  activities: [
    { title: "Tom Yam Gong Soup", thumbnail: soup },
    { title: "Salad dalada", thumbnail: salad },
    { title: "A mix for meat", thumbnail: meat },
    { title: "Pan fried rice makes difference", thumbnail: rice },
  ],
};
const extrahome = {
  recommend,
  popular,
};
export default extrahome;
