import images from './images';

const wines = [
  {
    title: 'Chapel Hill Shiraz',
    price: '₹56',
    tags: 'AU | Bottle',
  },
  {
    title: 'Catena Malbee',
    price: '₹59',
    tags: 'AU | Bottle',
  },
  {
    title: 'La Vieillw Rose',
    price: '₹44',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Rhino Pale Ale',
    price: '₹31',
    tags: 'CA | 750 ml',
  },
  {
    title: 'Irish Guinness',
    price: '₹26',
    tags: 'IE | 750 ml',
  },
];


const cocktails = [
  {
    title: 'Aperol Sprtiz',
    price: '₹20',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Dark 'N' Stormy",
    price: '₹16',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Daiquiri',
    price: '₹10',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Old Fashioned',
    price: '₹31',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
  {
    title: 'Negroni',
    price: '₹26',
    tags: 'Gin | Sweet Vermouth | Campari | Orange garnish',
  },
];

// Bordoloi’s Assamese Thali menu
const bordoloisThalis = [
  {
    title: 'Veg Thali',
    price: '₹120.00',
    tags: 'Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad',
  },
  {
    title: 'Fish Thali',
    price: '₹150.00',
    tags: 'Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad | Fish Curry',
  },
  {
    title: 'Chicken Thali',
    price: '₹170.00',
    tags: 'Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad | Chicken Curry',
  },
  {
    title: 'Pork Thali',
    price: '₹180.00',
    tags: 'Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad | Pork Curry',
  },
  {
    title: 'Mutton Thali',
    price: '₹220.00',
    tags: 'Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad | Mutton Curry',
  },
  {
    title: 'Bordoloi’s Special Thali',
    price: '₹550.00',
    tags: 'Joha Rice | Yellow Dal | Mati Dal | Mix Veg | Aloo Bhaji | Aloo Pitika | Omita Khar | Chatni | Seasonal Greens Fry | Papad | Salad | Kheer | (Local Chicken with Kol Posala | Chicken Khorika | Chicken Pitika / Til Pork | Pork Khorika | Pork Pitika)',
  }
];

// Authentic Naga Thali menu
const nagaThalis = [
  {
    title: 'Naga Fish Thali',
    price: '₹180.00',
    tags: 'Rice | Naga Dal | Veg Boiled | Machihan | Raja Mircha Chutney | Green Salad | Fish Chutney | Naga Style Fish Curry',
  },
  {
    title: 'Naga Chicken Thali',
    price: '₹220.00',
    tags: 'Rice | Naga Dal | Veg Boiled | Machihan | Raja Mircha Chutney | Green Salad | Chicken Chutney | Naga Style Chicken',
  },
  {
    title: 'Naga Pork Thali',
    price: '₹250.00',
    tags: 'Rice | Naga Dal | Veg Boiled | Machihan | Raja Mircha Chutney | Green Salad | Pork Chutney | Naga Style Pork Curry',
  },
];

// Starters - Veg
const startersVeg = [
  { title: 'French Fries', price: '₹80', tags: 'Veg' },
  { title: 'Honey Chilly Potato', price: '₹100', tags: 'Veg' },
  { title: 'Crispy Chilly Baby Corn', price: '₹120', tags: 'Veg' },
  { title: 'Classic Chilly Paneer', price: '₹150', tags: 'Veg' },
  { title: 'Paneer Tikka', price: '₹170', tags: 'Veg' },
  { title: 'Paneer Malai Tikka', price: '₹180', tags: 'Veg' },
  { title: 'Chilly Garlic Mushroom', price: '₹200', tags: 'Veg' },
  { title: 'Mushroom Manchurian', price: '₹220', tags: 'Veg' },
];

// Starters - Non-Veg
const startersNonVeg = [
  { title: 'Chilly Fish', price: '₹140', tags: 'Non-Veg' },
  { title: 'Fish Finger', price: '₹200', tags: 'Non-Veg' },
  { title: 'Golden Fried Prawn', price: '₹220', tags: 'Non-Veg' },
  { title: 'Chilly Garlic Prawn', price: '₹200', tags: 'Non-Veg' },
  { title: 'Chicken Lollipop (5pc)', price: '₹150', tags: 'Non-Veg' },
  { title: 'Schezwan Chicken', price: '₹180', tags: 'Non-Veg' },
  { title: 'Chilly Chicken Dry', price: '₹200', tags: 'Non-Veg' },
  { title: 'Chicken Tandoori', price: '₹220', tags: 'Non-Veg' },
  { title: 'Chicken 65', price: '₹200', tags: 'Non-Veg' },
  { title: 'Drums of Heaven', price: '₹220', tags: 'Non-Veg' },
  { title: 'Pork Dry Fry', price: '₹250', tags: 'Non-Veg' },
  { title: 'Chilly Pork', price: '₹300', tags: 'Non-Veg' },
];
const breadsRoti = [
  { title: 'Plain Tawa Roti', price: '₹15', },
  { title: 'Butter Tawa Roti', price: '₹25',  },
  { title: 'Phulka', price: '₹30', },
  { title: 'Tandoori Roti', price: '₹20',  },
];
const breadsNaan = [
  { title: 'Plain Naan', price: '₹40', },
  { title: 'Butter Naan', price: '₹60',  },
];
const breadsKulcha = [
  { title: 'Plain Kulcha', price: '₹60', },
  { title: 'Masala Kulcha', price: '₹80',  },
];
const breadsParatha = [
  { title: 'Plain Paratha', price: '₹40', },
  { title: 'Aloo Paratha', price: '₹60',  },
  { title: 'Paneer Paratha', price: '₹80', },
  { title: 'lachha Paratha', price: '₹100',  },
];

// Main Course - Veg
const mainVeg = [
  { title: 'Plain Dal', price: '₹70', tags: 'Veg' },
  { title: 'Mix Veg', price: '₹90', tags: 'Veg' },
  { title: 'Dal Fry', price: '₹100', tags: 'Veg' },
  { title: 'Dal Butter Fry', price: '₹120', tags: 'Veg' },
  { title: 'Aloo Dum', price: '₹120', tags: 'Veg' },
  { title: 'Bordoloi’s Special', price: '—', tags: 'Veg' },
  { title: 'Yellow Daal', price: '₹140', tags: 'Veg' },
  { title: 'Kadai Paneer', price: '₹120', tags: 'Veg' },
  { title: 'Sahi Paneer', price: '₹140', tags: 'Veg' },
  { title: 'Paneer Butter Masala', price: '₹160', tags: 'Veg' },
];

// Main Course - Non-Veg
const mainNonVeg = [
  { title: 'Chicken Masala', price: '₹200', tags: 'Non-Veg' },
  { title: 'Chicken Curry', price: '₹180', tags: 'Non-Veg' },
  { title: 'Kadai Chicken', price: '₹220', tags: 'Non-Veg' },
  { title: 'Chicken Kosha', price: '₹220', tags: 'Non-Veg' },
  { title: 'Chicken Bharta', price: '₹230', tags: 'Non-Veg' },
  { title: 'Chicken Do Pyaza', price: '₹240', tags: 'Non-Veg' },
  { title: 'Chicken Butter Masala', price: '₹250', tags: 'Non-Veg' },
];

// Main Course - Pork
const mainPork = [
  { title: 'Pork Curry', price: '₹300', tags: 'Pork' },
  { title: 'Pork Bamboo Shoot', price: '₹320', tags: 'Pork' },
  { title: 'Til Pork', price: '₹350', tags: 'Pork' },
  { title: 'Pork with Michinga Leaves', price: '₹320', tags: 'Pork' },
  { title: 'Pork with Lai Xaak', price: '₹320', tags: 'Pork' },
];

// Main Course - Fish
const mainFish = [
  { title: 'Local Small Fish with Tenga', price: '₹120', tags: 'Fish' },
  { title: 'Fish Kalia', price: '₹140', tags: 'Fish' },
  { title: 'Fish Curry', price: '₹150', tags: 'Fish' },
  { title: 'Fish with Mustard Seeds', price: '₹200', tags: 'Fish' },
];

// Main Course - Mutton
const mainMutton = [
  { title: 'Mutton Kosha', price: '₹380', tags: 'Mutton' },
  { title: 'Mutton Curry', price: '₹400', tags: 'Mutton' },
  { title: 'Mutton Rogan Josh', price: '₹450', tags: 'Mutton' },
];

// Main Course - Duck
const mainDuck = [
  { title: 'Duck Fry', price: '₹300', tags: 'Duck' },
  { title: 'Duck Curry', price: '₹300', tags: 'Duck' },
  { title: 'Duck with Joha Kumura', price: '₹450', tags: 'Duck' },
];

// Rice & Noodles section
const rice = [
  { title: 'Steam Rice', price: '₹60', tags: 'Rice' },
  { title: 'Veg Fried Rice', price: '₹70', tags: 'Rice' },
  { title: 'Veg Pulao', price: '₹90', tags: 'Rice' },
  { title: 'Jeera Rice', price: '₹120', tags: 'Rice' },
  { title: 'Chicken Fried Rice', price: '₹140', tags: 'Rice' },
  { title: 'Pork Fried Rice', price: '₹150', tags: 'Rice' },
];

const noodles = [
  { title: 'Veg Hakka Noodles', price: '₹80', tags: 'Noodles' },
  { title: 'Chicken Chowmein', price: '₹120', tags: 'Noodles' },
  { title: 'Pork Chowmein', price: '₹150', tags: 'Noodles' },
  { title: 'Special Mix Chowmein', price: '₹180', tags: 'Noodles' },
];

const rolls = [
  { title: 'Veg Roll', price: '₹50', tags: 'Rolls' },
  { title: 'Paneer Roll', price: '₹80', tags: 'Rolls' },
  { title: 'Egg Roll', price: '₹70', tags: 'Rolls' },
  { title: 'Chicken Roll', price: '₹100', tags: 'Rolls' },
  { title: 'Pork Roll', price: '₹120', tags: 'Rolls' },
  { title: 'Double Egg Roll', price: '₹90', tags: 'Rolls' },
  { title: 'Bordoloi’s Special Roll', price: '₹140', tags: 'Rolls' },
];

const momo = [
  { title: 'Steamed Momo (Veg/Chicken/Pork)', price: '₹60/90/120', tags: 'Momo' },
  { title: 'Cheese Momo (Veg/Chicken/Pork)', price: '₹80/100/130', tags: 'Momo' },
  { title: 'Pan Fried Momo (Veg/Chicken/Pork)', price: '₹90/110/130', tags: 'Momo' },
];

const thukpa = [
  { title: 'Veg Thukpa', price: '₹80', tags: 'Thukpa' },
  { title: 'Chicken Thukpa', price: '₹120', tags: 'Thukpa' },
  { title: 'Pork Thukpa', price: '₹140', tags: 'Thukpa' },
  { title: 'Mix Thukpa', price: '₹150', tags: 'Thukpa' },
];

const biryani = [
  { title: 'Chicken Dum Biryani', price: '₹220', tags: 'Biryani' },
  { title: 'Mutton Dum Biryani', price: '₹300', tags: 'Biryani' },
];

const beverages = [
  { title: 'Tea', price: '₹30', tags: 'Beverage' },
  { title: 'Hot Coffee', price: '₹50', tags: 'Beverage' },
  { title: 'Cold Coffee', price: '₹70', tags: 'Beverage' },
  { title: 'Fresh Lime Soda', price: '₹60', tags: 'Beverage' },
  { title: 'Mojito', price: '₹80', tags: 'Beverage' },
  { title: 'Blue Lagoon', price: '₹100', tags: 'Beverage' },
];

export default { wines, cocktails, bordoloisThalis, nagaThalis, startersVeg, startersNonVeg, breadsRoti, breadsNaan, breadsKulcha, breadsParatha, mainVeg, mainNonVeg, mainPork, mainFish, mainMutton, mainDuck, rice, noodles, rolls, momo, thukpa, biryani, beverages };
