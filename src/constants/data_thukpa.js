// Thukpa menu data parsed from provided images

const momo = [
  { title: 'Steam Momo (Chicken/Pork)', price: '₹90', tags: 'Momo' },
  { title: 'Fried Momo (Chicken/Pork)', price: '₹110', tags: 'Momo' },
  { title: 'Pan Fried Momo (Chicken/Pork)', price: '₹150', tags: 'Momo' },
  { title: 'Malai Momo (Chicken/Pork)', price: '₹150', tags: 'Momo' },
  { title: 'Schezwan Momo (Chicken/Pork)', price: '₹150', tags: 'Momo' },
];
const jholMomo = [
  { title: 'Jhol Momo (Chicken/Pork)', price: '₹150', tags: 'Momo' },
];
const wonton = [
  { title: 'Wonton (Chicken/Pork)', price: '170', tags: 'Momo' },
];

const thukpa = [
  { title: 'Egg Thukpa', price: '₹120', tags: 'Thukpa' },
  { title: 'Chicken/Pork Thukpa', price: '₹150', tags: 'Thukpa' },
];

const specialThukpa = [
  { title: 'Chicken/Pork Special Thukpa', price: '₹170', tags: 'Thukpa' },
  { title: 'Mix Special Thukpa', price: '₹200', tags: 'Thukpa' },
  { title: 'House of Thukpa – Royal', price: '₹250', tags: 'Thukpa' },
];

const chowmein = [
  { title: 'Veg Chowmein', price: '₹100', tags: 'Chowmein' },
  { title: 'Egg Chowmein', price: '₹120', tags: 'Chowmein' },
  { title: 'Chicken/Pork Chowmein', price: '₹150', tags: 'Chowmein' },
];

const specialChow = [
  { title: 'Chicken/Pork Special Chow', price: '₹170', tags: 'Chow' },
  { title: 'Special Hakka Noodles', price: '₹200', tags: 'Chow' },
];

const schezwanChow = [
  { title: 'Chicken/Pork Schezwan Chow', price: '₹170', tags: 'Schezwan' },
];

const specialNoodles = [
  { title: 'Thukpa Special Noodles (Chicken/Pork)', price: '₹170', tags: 'Noodles' },
];

const gravyChowmein = [
  { title: 'Veg Gravy Chowmein', price: '₹100', tags: 'Gravy Chowmein' },
  { title: 'Egg Gravy Chowmein', price: '₹120', tags: 'Gravy Chowmein' },
  { title: 'Chicken/Pork Gravy Chowmein', price: '₹150', tags: 'Gravy Chowmein' },
];

const specialGravyChow = [
  { title: 'Mix Gravy Chow', price: '₹200', tags: 'Special Gravy' },
];

const friedRice = [
  { title: 'Veg Fried Rice', price: '₹100', tags: 'Fried Rice' },
  { title: 'Egg Fried Rice', price: '₹120', tags: 'Fried Rice' },
  { title: 'Chicken/Pork Fried Rice', price: '₹130', tags: 'Fried Rice' },
];

const specialFriedRice = [
  { title: 'Chicken/Pork Special Fried Rice', price: '₹170', tags: 'Special Fried Rice' },
  { title: 'Mix Fried Rice', price: '₹200', tags: 'Special Fried Rice' },
];

const biryani = [
  { title: 'Chicken Dum Biryani', price: '₹250', tags: 'Biryani' },
];

const rolls = [
  { title: 'Veg Roll', price: '₹70', tags: 'Roll' },
  { title: 'Egg Roll', price: '₹80', tags: 'Roll' },
  { title: 'Chicken/Pork Roll', price: '₹100', tags: 'Roll' },
  { title: 'Paneer Roll', price: '₹120', tags: 'Roll' },
  { title: 'Cheese Roll', price: '₹120', tags: 'Roll' },
  { title: 'Mix Roll', price: '₹140', tags: 'Roll' },
  { title: 'Chicken Cheese Roll', price: '₹150', tags: 'Roll' },
  { title: 'Pork Cheese Roll', price: '₹150', tags: 'Roll' },
  { title: 'Paneer Cheese Roll', price: '₹150', tags: 'Roll' },
  { title: 'Thukpa Special Chicken Roll', price: '₹200', tags: 'Roll' },
];

const comboSet = [
  { title: 'Veg Fried Rice + Chowmein + Chilly', price: '₹250', tags: 'Combo' },
  { title: 'Chicken Fried Rice + Chowmein + Chilly', price: '₹250', tags: 'Combo' },
  { title: 'Chilly Paneer', price: '₹—', tags: 'Combo' },
];

const dryFryGravyChilly = [
  { title: 'Chicken Dry Fry', price: '₹170', tags: 'Dry/Gravy/Chilly' },
  { title: 'Chilly Chicken (dry/gravy)', price: '₹170', tags: 'Dry/Gravy/Chilly' },
  { title: 'Chilly Pork (dry/gravy)', price: '₹200', tags: 'Dry/Gravy/Chilly' },
  { title: 'Chilly Fish (dry/gravy)', price: '₹170', tags: 'Dry/Gravy/Chilly' },
];

const soup = [
  { title: 'Veg Soup', price: '₹100', tags: 'Soup' },
  { title: 'Veg Sweet Corn', price: '₹100', tags: 'Soup' },
  { title: 'Hot & Sour (Veg)', price: '₹100', tags: 'Soup' },
];

const chopsey = [
  { title: 'American Chopsey (Veg)', price: '₹170', tags: 'Chopsey' },
  { title: 'American Chopsey (Chicken/Pork)', price: '₹200', tags: 'Chopsey' },
  { title: 'Chinese Chopsey (Veg)', price: '₹170', tags: 'Chopsey' },
  { title: 'Chinese Chopsey (Chicken/Pork)', price: '₹230', tags: 'Chopsey' },
];

// Indian cuisine
const roti = [
  { title: 'Plain Tandoori Roti', price: '₹30', tags: 'Roti' },
  { title: 'Butter Tandoori Roti', price: '₹40', tags: 'Roti' },
];

const naan = [
  { title: 'Plain Naan', price: '₹55', tags: 'Naan' },
  { title: 'Butter Naan', price: '₹65', tags: 'Naan' },
];

const rice = [
  { title: 'Jeera Rice', price: '₹120', tags: 'Rice' },
  { title: 'Plain Rice', price: '₹70', tags: 'Rice' },
  { title: 'Veg Pulao', price: '₹150', tags: 'Rice' },
  { title: 'Thukpa Spl Fried Rice', price: '₹200', tags: 'Rice' },
];

const paneerGravy = [
  { title: 'Paneer Butter Masala (H/F)', price: '₹150/₹250', tags: 'Paneer' },
  { title: 'Kadai Paneer Kalia (H/F)', price: '₹170/₹280', tags: 'Paneer' },
  { title: 'Paneer Do-Piyaza (H/F)', price: '₹170/₹280', tags: 'Paneer' },
];

const chickenGravy = [
  { title: 'Chicken Masala', price: '₹180', tags: 'Chicken' },
  { title: 'Chicken Kosa', price: '₹200', tags: 'Chicken' },
  { title: 'Chicken Curry', price: '₹180', tags: 'Chicken' },
  { title: 'Chicken Bharta', price: '₹220', tags: 'Chicken' },
  { title: 'Chicken Lajabab (H/F)', price: '₹200/₹300', tags: 'Chicken' },
  { title: 'Kadai Chicken (H/F)', price: '₹200/₹300', tags: 'Chicken' },
  { title: 'Chicken Butter Masala', price: '₹220', tags: 'Chicken' },
  { title: 'Chicken Hyderabadi (H/F)', price: '₹200/₹300', tags: 'Chicken' },
  { title: 'Chicken Do-Piyaza', price: '₹200', tags: 'Chicken' },
];

const tandoor = [
  { title: 'Tandoori Chicken (H/F)', price: '₹300/₹400', tags: 'Tandoor' },
  { title: 'Chicken Tikka (H/F)', price: '₹300/₹400', tags: 'Tandoor' },
  { title: 'Chicken Shoulder/Wings', price: '₹—', tags: 'Tandoor' },
  { title: 'Chicken Malai Tikka (H/F)', price: '₹300/₹400', tags: 'Tandoor' },
];

const pork = [
  { title: 'Pork Stick', price: '₹250', tags: 'Pork' },
  { title: 'Pork Pura', price: '₹300', tags: 'Pork' },
];

// Beverages
const soda = [
  { title: 'Masala Lime Soda', price: '₹55', tags: 'Soda' },
  { title: 'Masala Cold Drink', price: '₹60', tags: 'Soda' },
  { title: 'Regular Cold Drink', price: '₹50', tags: 'Soda' },
  { title: 'Shikanji Soda', price: '₹60', tags: 'Soda' },
  { title: 'Green Mint Soda', price: '₹50', tags: 'Soda' },
  { title: 'Regular Mint Soda', price: '₹50', tags: 'Soda' },
  { title: 'Blue Lagoon Soda', price: '₹60', tags: 'Soda' },
];

const freshJuice = [
  { title: 'Orange', price: '₹100', tags: 'Fresh Juice' },
  { title: 'Pineapple', price: '₹100', tags: 'Fresh Juice' },
  { title: 'Watermelon', price: '₹100', tags: 'Fresh Juice' },
  { title: 'Pomegranate', price: '₹100', tags: 'Fresh Juice' },
  { title: 'Mixed Fruit Juice', price: '₹100', tags: 'Fresh Juice' },
  { title: 'Grapes', price: '₹100', tags: 'Fresh Juice' },
];

const shakes = [
  { title: 'Mango Shake / Ice Cream', price: '₹120/₹150', tags: 'Shake' },
  { title: 'Banana Shake', price: '₹100', tags: 'Shake' },
  { title: 'Apple Shake', price: '₹120', tags: 'Shake' },
  { title: 'Strawberry Shake', price: '₹130', tags: 'Shake' },
  { title: 'Kesar Badam Shake / Ice Cream', price: '₹150', tags: 'Shake' },
  { title: 'Rose Shake', price: '₹120', tags: 'Shake' },
  { title: 'Orange Shake', price: '₹120', tags: 'Shake' },
  { title: 'Chocolate Shake', price: '₹130', tags: 'Shake' },
  { title: 'Kaju Butter Scotch / Ice Cream', price: '₹150', tags: 'Shake' },
  { title: 'Kitkat Shake / Ice Cream', price: '₹130/₹170', tags: 'Shake' },
  { title: 'Oreo Shake / Ice Cream', price: '₹130/₹170', tags: 'Shake' },
];

const coffee = [
  { title: 'Hot Coffee', price: '₹50', tags: 'Coffee' },
  { title: 'Cold Coffee / Ice Cream', price: '₹120/₹150', tags: 'Coffee' },
];

const lassi = [
  { title: 'Mast Lassi', price: '₹100', tags: 'Lassi' },
  { title: 'Mango Lassi', price: '₹130', tags: 'Lassi' },
  { title: 'Sweet Lassi', price: '₹120', tags: 'Lassi' },
  { title: 'Apple Lassi', price: '₹120', tags: 'Lassi' },
];

const tea = [
  { title: 'Classic Tea', price: '₹30', tags: 'Tea' },
  { title: 'Masala Tea', price: '₹40', tags: 'Tea' },
  { title: 'Butter Tea', price: '₹50', tags: 'Tea' },
  { title: 'Keesar Tea', price: '₹50', tags: 'Tea' },
  { title: 'Chocolate Tea', price: '₹50', tags: 'Tea' },
  { title: 'Ice Tea', price: '₹100', tags: 'Tea' },
];

const mojito = [
  { title: 'Classic Mojito', price: '₹100', tags: 'Mojito' },
  { title: 'Virgin Mojito', price: '₹100', tags: 'Mojito' },
  { title: 'Cucumber Mojito', price: '₹100', tags: 'Mojito' },
];

const nitrogenSpecial = [
  { title: 'Oreo Nitrogen', price: '₹100', tags: 'Nitrogen Special' },
  { title: 'Kitkat Nitrogen', price: '₹100', tags: 'Nitrogen Special' },
  { title: 'Kurkure Nitrogen', price: '₹100', tags: 'Nitrogen Special' },
  { title: 'Chips Nitrogen', price: '₹100', tags: 'Nitrogen Special' },
];

const dataThukpa = {
  momo,
  thukpa,
  specialThukpa,
  chowmein,
  specialChow,
  schezwanChow,
  specialNoodles,
  gravyChowmein,
  specialGravyChow,
  friedRice,
  specialFriedRice,
  biryani,
  rolls,
  comboSet,
  dryFryGravyChilly,
  soup,
  chopsey,
  roti,
  naan,
  rice,
  paneerGravy,
  chickenGravy,
  tandoor,
  pork,
  soda,
  freshJuice,
  shakes,
  coffee,
  lassi,
  tea,
  mojito,
  nitrogenSpecial,
};

export default dataThukpa;
