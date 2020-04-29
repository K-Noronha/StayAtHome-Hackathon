import jessicaB from "../assets/jessicaB.png";
import jessicaS from "../assets/jessicaS.png";
import oscar from "../assets/oscar.png";
import maccheese1 from "../assets/maccheese1.png";
import maccheese2 from "../assets/maccheese2.png";
import anthony from "../assets/anthony.png";

const creations = [
  {
    id: 1,
    image: maccheese1,
    creatorpic: anthony,
    creator: "Anthony Jackson",
    desc: "This was so fun to make and tasty too.",
    location: "Vancouver B.C",
    rating: "love",
    comments: [
      {
        name: "Jessica Biel",
        text: "Great job anthony looks amazing",
        profpic: jessicaB,
      },
      {
        name: "Oscar De La Mora",
        text: "Awesome I'm going to try",
        profpic: oscar,
      },
    ],
  },
  {
    id: 2,
    image: maccheese2,
    creatorpic: jessicaS,
    creator: "Jessica Smalls",
    desc: "I love this recipe will be making it again!",
    location: "Toronto, ON",
    rating: "love",
    comments: [
      {
        name: "Jessica Biel",
        text: "Great job Jessica looks amazing",
        profpic: jessicaB,
      },
      {
        name: "Oscar De La Mora",
        text: "Awesome I cant wait to try this",
        profpic: oscar,
      },
    ],
  },
];

const main = {
  id: 1,
  link: "https://www.youtube.com/embed/YxVZuuxxXxk",
  title: "Vegan Mac & Cheese",
  desc:
    "In this lesson you will learn to make vegan mac and cheese. Once you have made your creation upload a photo to show your finished product. Don’t forget to challenge a friend.",
  creations,
};

export default main;
