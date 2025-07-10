const foodData = {
  fast: [
    { name: "Burger", emoji: "🍔" },
    { name: "Pizza", emoji: "🍕" },
    { name: "Fries", emoji: "🍟" },
    { name: "Hot Dog", emoji: "🌭" },
    { name: "Sandwich", emoji: "🥪" },
    { name: "Tacos", emoji: "🌮" },
    { name: "Wraps", emoji: "🌯" },
    { name: "Nuggets", emoji: "🍗" },
    { name: "Onion Rings", emoji: "🧅" },
    { name: "Cheesy Sticks", emoji: "🧀" },
    { name: "Samosa", emoji: "🥟" },
    { name: "Patties", emoji: "🥟" },
    { name: "Kebab Roll", emoji: "🍖" },
    { name: "Fried Chicken", emoji: "🍗" },
    { name: "Popcorn Chicken", emoji: "🍿" },
    { name: "Loaded Nachos", emoji: "🧀" },
    { name: "Veg Roll", emoji: "🌯" },
    { name: "Chicken Wings", emoji: "🍗" },
    { name: "Chilli Dog", emoji: "🌭" },
    { name: "Quesadilla", emoji: "🌮" },
    { name: "Doner Kebab", emoji: "🥙" },
    { name: "Paneer Wrap", emoji: "🌯" },
    { name: "Cheese Balls", emoji: "🧀" },
    { name: "Veg Burger", emoji: "🍔" },
    { name: "Aloo Tikki", emoji: "🥔" },
    { name: "Sub Sandwich", emoji: "🥪" },
    { name: "Tofu Wrap", emoji: "🌯" },
    { name: "Sloppy Joe", emoji: "🍖" },
    { name: "Pizza Pockets", emoji: "🍕" },
    { name: "Mac & Cheese Bites", emoji: "🧀" }
  ],
  dessert: [
    { name: "Cake", emoji: "🍰" },
    { name: "Brownie", emoji: "🍫" },
    { name: "Ice Cream", emoji: "🍨" },
    { name: "Donut", emoji: "🍩" },
    { name: "Cupcake", emoji: "🧁" },
    { name: "Pudding", emoji: "🍮" },
    { name: "Cheesecake", emoji: "🍰" },
    { name: "Apple Pie", emoji: "🥧" },
    { name: "Chocolate Tart", emoji: "🍫" },
    { name: "Strawberry Mousse", emoji: "🍓" },
    { name: "Ladoo", emoji: "🍬" },
    { name: "Gulab Jamun", emoji: "🍯" },
    { name: "Rasgulla", emoji: "🍡" },
    { name: "Jalebi", emoji: "🍯" },
    { name: "Muffin", emoji: "🧁" },
    { name: "Truffle", emoji: "🍬" },
    { name: "Candy", emoji: "🍬" },
    { name: "Churros", emoji: "🍩" },
    { name: "Falooda", emoji: "🥤" },
    { name: "Kulfi", emoji: "🍦" },
    { name: "Fruit Tart", emoji: "🍓" },
    { name: "Banana Split", emoji: "🍌" },
    { name: "Macaron", emoji: "🍬" },
    { name: "Eclair", emoji: "🍫" },
    { name: "Milkshake", emoji: "🥤" },
    { name: "Waffle", emoji: "🧇" },
    { name: "Tiramisu", emoji: "☕" },
    { name: "Halwa", emoji: "🍯" },
    { name: "Sundae", emoji: "🍨" },
    { name: "Baklava", emoji: "🥧" }
  ],
  indian: [
    { name: "Biryani", emoji: "🍛" },
    { name: "Paneer Butter Masala", emoji: "🧈" },
    { name: "Chole Bhature", emoji: "🍛" },
    { name: "Rajma Chawal", emoji: "🍚" },
    { name: "Dal Makhani", emoji: "🍲" },
    { name: "Butter Naan", emoji: "🥖" },
    { name: "Aloo Paratha", emoji: "🥔" },
    { name: "Dosa", emoji: "🥞" },
    { name: "Idli", emoji: "⚪" },
    { name: "Sambar", emoji: "🥣" },
    { name: "Vada", emoji: "🍩" },
    { name: "Kadhi Chawal", emoji: "🍲" },
    { name: "Poha", emoji: "🍚" },
    { name: "Upma", emoji: "🍛" },
    { name: "Pakora", emoji: "🥟" },
    { name: "Tandoori Chicken", emoji: "🍗" },
    { name: "Baingan Bharta", emoji: "🍆" },
    { name: "Palak Paneer", emoji: "🥬" },
    { name: "Kofta Curry", emoji: "🍲" },
    { name: "Fish Curry", emoji: "🐟" },
    { name: "Korma", emoji: "🍛" },
    { name: "Khichdi", emoji: "🍚" },
    { name: "Thepla", emoji: "🫓" },
    { name: "Dhokla", emoji: "🟨" },
    { name: "Misal Pav", emoji: "🥣" },
    { name: "Kachori", emoji: "🥟" },
    { name: "Bhindi Masala", emoji: "🍽️" },
    { name: "Chicken Curry", emoji: "🍗" },
    { name: "Litti Chokha", emoji: "🥔" },
    { name: "Mutton Rogan Josh", emoji: "🍖" }
  ],
  chinese: [
    { name: "Chowmein", emoji: "🍜" },
    { name: "Fried Rice", emoji: "🍚" },
    { name: "Spring Roll", emoji: "🥠" },
    { name: "Manchurian", emoji: "🍲" },
    { name: "Schezwan Noodles", emoji: "🍜" },
    { name: "Sweet and Sour Chicken", emoji: "🍗" },
    { name: "Kung Pao Chicken", emoji: "🍗" },
    { name: "Chilli Paneer", emoji: "🧀" },
    { name: "Dimsums", emoji: "🥟" },
    { name: "Hot and Sour Soup", emoji: "🥣" },
    { name: "Wonton", emoji: "🥟" },
    { name: "Lo Mein", emoji: "🍜" },
    { name: "Egg Roll", emoji: "🥚" },
    { name: "Sticky Rice", emoji: "🍚" },
    { name: "Mapo Tofu", emoji: "🍲" },
    { name: "Crispy Noodles", emoji: "🍜" },
    { name: "Prawn Crackers", emoji: "🦐" },
    { name: "Shanghai Chicken", emoji: "🍗" },
    { name: "Tofu Stir Fry", emoji: "🍽️" },
    { name: "Gobi Manchurian", emoji: "🥦" },
    { name: "Chilli Garlic Noodles", emoji: "🍜" },
    { name: "Hakka Noodles", emoji: "🍜" },
    { name: "Egg Fried Rice", emoji: "🍳" },
    { name: "Pepper Chicken", emoji: "🌶️" },
    { name: "Dragon Roll", emoji: "🐉" },
    { name: "Schezwan Fried Rice", emoji: "🍚" },
    { name: "Veg Ball Soup", emoji: "🥣" },
    { name: "Chinese Bhel", emoji: "🥗" },
    { name: "Teriyaki Chicken", emoji: "🍗" },
    { name: "Sesame Tofu", emoji: "🍽️" }
  ]
};

function generateFood() {
  const category = document.getElementById("foodType").value;
  let allItems = [];

  if (category && foodData[category]) {
    allItems = foodData[category];
  } else {
    Object.values(foodData).forEach(arr => allItems.push(...arr));
  }

  const random = allItems[Math.floor(Math.random() * allItems.length)];
  document.getElementById("food").textContent = random.name;
  document.getElementById("emoji").textContent = random.emoji;
}

function copyFood() {
  const food = document.getElementById("food").textContent;
  if (food !== "--") {
    navigator.clipboard.writeText(food)
      .then(() => alert("Copied: " + food))
      .catch(err => alert("Failed to copy"));
  }
}
