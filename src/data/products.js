import garriImage from "../assets/garri-1.jpg";
import amalaFlour from "../assets/imageedit_30_5432476129.png";
import rice from "../assets/images (1).jpeg";
import beans from "../assets/360A82C5-6483-47DA-A042-62753AC7FFDA.jpg";
import yamFlour from "../assets/yam_Flour.jpg";
import soyaBeans from "../assets/google/IMG-20260911-WA0079.jpg";
import sogunCorn from "../assets/google/IMG-20260911-WA0073.jpg";
import plantainFlour from "../assets/google/IMG-20260911-WA0077.jpg";
import tapioca from "../assets/google/IMG-20260911-WA0076.jpg";
import wheat from "../assets/google/IMG-20260911-WA0075.jpg";
import lafunWhite from "../assets/google/IMG-20260911-WA0074.jpg";
import riceForPoundo from "../assets/google/IMG-20260911-WA0073.jpg";
import maize from "../assets/google/Screenshot_20260912-113821.png";
import semovita from "../assets/google/images (2).jpeg";
import noodles from "../assets/google/224392_1751596626.jpg";
import vegetableOil from "../assets/google/plastic-bottle-vegetable-cooking-oil-white-background_105428-11685.jpg";

const products = [
  {
    id: 1,
    name: "WhiteGarri",
    category: "Garri",
    description:
      "Fresh and clean garri, available in both white and yellow varieties. Well processed and free of chaff.",
    unit: "per paint bucket",
    price: "",
    image: garriImage,
  },
  {
    id: 2,
    name: "Amala Flour",
    category: "Amala Flour",
    description:
      "Quality amala flour (elubo) ground fine for a smooth, perfect swallow every time.",
    unit: "per paint bucket",
    price: "",
    image: amalaFlour,
  },
  {
    id: 3,
    name: "Rice",
    category: "Rice",
    description:
      "Premium long-grain rice, well sorted and cleaned, suitable for the home or for events.",
    unit: "per bag",
    price: "",
    image: rice,
  },
  {
    id: 4,
    name: "Beans",
    category: "Beans",
    description:
      "Nutritious, fresh honey and brown beans, sorted to remove stones and chaff.",
    unit: "per paint bucket",
    price: "",
    image: beans,
  },
  {
    id: 5,
    name: "Yam Flour (Poundo)",
    category: "Other Foodstuff",
    description:
      "Smooth poundo yam flour that makes a soft, stretchy swallow with no lumps.",
    unit: "per pack",
    price: "",
    image: yamFlour,
  },
  {
    id: 6,
    name: "Soya Beans",
    category: "Other Foodstuff",
    description:
      "Quality soya beans suitable for a variety of meals and household food needs.Available in measured quantities, making it easy to buy the amount you need for your home or business",
    price: "",
    image: soyaBeans,
  },
  {
    id: 7,
    name: "Sogun Corn",
    category: "Other Foodstuff",
    description:
      "Sogun Corn, a versatile staple for preparing traditional meals and other corn-bashed dishes. Available in cobenient quantities for home cooking and everyday use.",
    price: "",
    image: sogunCorn,
  },
  {
    id: 8,
    name: "Plantain Flour",
    category: "Other Foodstuff",
    description:
      "Plantain flour made from processed plantains, perfect for preparing nutritious meals such as plantain swallow and other traditional dishes. Available in convenient quantities for everyday cooking.",
    price: "",
    image: plantainFlour,
  },
  {
    id: 9,
    name: "Tapioca",
    category: "Other Foodstuff",
    description:
      "Tapioca, a versatile staple that can be enjoyed in different meals and tradition dishes. Available in convenient quantities for home cooking and everyday use",
    price: "",
    image: tapioca,
  },
  {
    id: 10,
    name: "Wheat",
    category: "Other Foodstuff",
    description:
      "Wheat suitabel for preparing a variety of meals and traditional dishes. Available  in convenient quantities fpr everyday cooking and household food needs",
    price: "",
    image: wheat,
  },
  {
    id: 11,
    name: "White Lafun",
    category: "Amala Flour",
    description:
      "White Lafun also known as white amala, is a traditional cassava-based staple commonly prepared as a smooth swallow and enjoyed with a variety of soups. Available in convenient quantities for home cooking.",
    price: "",
    image: lafunWhite,
  },
  {
    id: 12,
    name: "Rice for Poundo",
    category: "Other Foodstuff",
    description:
      "Rice for Poundo, specially prepared for making smooth and satisfyig rice-based swallow. A convenient choice for enjoying traditional meals with your favourite soups.",
    price: "",
    image: riceForPoundo,
  },
  {
    id: 13,
    name: "Maize (Corn)",
    category: "Other Foodstuff",
    description:
      "Clean, dried maize grains suitable for pap (ogi) or grinding.",
    unit: "per paint bucket",
    price: "",
    image: maize,
  },
  {
    id: 14,
    name: "Semovita",
    category: "Other Foodstuff",
    description: "Well refined semovita, easy to prepare and always fresh.",
    unit: "per pack",
    price: "",
    image: semovita,
  },
  {
    id: 15,
    name: "Noodles",
    category: "Other Foodstuff",
    description: "Well refined semovita, easy to prepare and always fresh.",
    unit: "per pack",
    price: "",
    image: noodles,
  },
  {
    id: 16,
    name: "Vegetable Oil",
    category: "Other Foodstuff",
    description: "Pure, quality vegetable oil for everyday cooking and frying.",
    unit: "per bottle",
    price: "",
    image: vegetableOil,
  },
];

// The list of categories shown on the Home page and used to filter
// products on the Products page. "All" is added separately in the
// Products page itself.
export const categories = [
  "Garri",
  "Amala Flour",
  "Rice",
  "Beans",
  "Other Foodstuff",
];

export default products;
