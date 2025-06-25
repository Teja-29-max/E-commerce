const products = [
  {
    name: "Wireless Headphones",
    price: "$49.99",
    image: "https://via.placeholder.com/300x200?text=Headphones"
  },
  {
    name: "Smart Watch",
    price: "$89.99",
    image: "https://via.placeholder.com/300x200?text=Watch"
  },
  {
    name: "Laptop Backpack",
    price: "$39.99",
    image: "https://via.placeholder.com/300x200?text=Backpack"
  },
  {
    name: "Gaming Mouse",
    price: "$24.99",
    image: "https://via.placeholder.com/300x200?text=Mouse"
  }
];

const productList = document.getElementById("productList");

products.forEach(p => {
  const card = document.createElement("div");
  card.className = "card";
  card.innerHTML = `
    <img src="${p.image}" alt="${p.name}">
    <h3>${p.name}</h3>
    <p>${p.price}</p>
    <button>Add to Cart</button>
  `;
  productList.appendChild(card);
});
