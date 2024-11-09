// Importing image assets
import header_banner from "./header-banner.jpg";
import pizza_01 from "./home-img-1.png"; // Assuming the correct file name is "home-img-1.png"
import chicken_burger from "./burger-1.png";
import desert_01 from "./dessert-4.png";
import noodles_01 from "./dish-1.png";
import salad_01 from "./dish-2.png";
import drinck_01 from "./drink-2.png";
import dilivery_01 from "./step-2.png";
import dilivery_02 from "./cat-2.png";
import dilivery_03 from "./cat-1.png";
import team_01 from "./team-1.jpg";
import team_02 from "./team-2.jpg";
import team_03 from "./team-3.jpg";
import team_04 from "./team-4.jpg";
import profile_icon from "./profile-icon.png";

// Exporting assets
export const assets = {
  header_banner,
  pizza_01,
  chicken_burger,
  dilivery_01,
  dilivery_02,
  dilivery_03,
  team_01,
  team_02,
  team_03,
  team_04,
  profile_icon,
};

// Defining food items
const food_items = [
  {
    id: 1,
    key: 1,
    name: "Chicken Salad",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: salad_01, // Corrected the image reference
    category: "Salads",
    price: "50",
  },
  {
    id: 2,
    key: 2,

    name: "Ice Cream Desert",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: desert_01, // Corrected the image reference
    category: "Desserts",
    price: "50",
  },
  {
    id: 3,
    key: 3,

    name: "Chicken Sandwitch",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: pizza_01, // Corrected the image reference
    category: "Sandwiches",
    price: "50",
  },
  {
    id: 4,
    key: 4,

    name: "Chicken Pizza",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: pizza_01, // Corrected the image reference
    category: "Cakes",
    price: "50",
  },
  {
    id: 5,
    key: 5,

    name: "Chicken Pizza",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: drinck_01, // Corrected the image reference
    category: "Juce",
    price: "50",
  },
  {
    id: 6,
    key: 6,

    name: "Chicken Noodles",
    short_description: "psum ipsum clita erat amet dolor justo diam",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the..",
    image: noodles_01, // Corrected the image reference
    category: "Noodles",
    price: "50",
  },
];

export default food_items;
