// --------------------
// 🎯 Part 1: Basics
// --------------------
function showGreeting() {
  let userName = document.getElementById("nameInput").value;
  let age = parseInt(document.getElementById("ageInput").value);

  if (!userName || isNaN(age)) {
    document.getElementById("greeting").innerText = "⚠️ Please enter both name and age!";
    return;
  }

  if (age >= 18) {
    document.getElementById("greeting").innerText = `Hello, ${userName}! 🎉 You are an adult.`;
  } else {
    document.getElementById("greeting").innerText = `Hi, ${userName}! 👶 You are under 18.`;
  }
}

// --------------------
// ❤️ Part 2: Functions
// --------------------
// Function 1: Calculate total price
function calculateTotal(price, quantity) {
  return price * quantity;
}

// Function 2: Show total on the page
function showTotal() {
  let price = parseFloat(document.getElementById("priceInput").value);
  let qty = parseInt(document.getElementById("qtyInput").value);

  if (isNaN(price) || isNaN(qty) || qty <= 0) {
    document.getElementById("totalResult").innerText = "⚠️ Please enter valid numbers!";
    return;
  }

  let total = calculateTotal(price, qty);
  document.getElementById("totalResult").innerText = `💰 Total: $${total}`;
}

// --------------------
// 🔁 Part 3: Loops
// --------------------
// Example 1: Countdown with animation
function showCountdown() {
  let list = document.getElementById("countdownList");
  list.innerHTML = "";

  for (let i = 5; i >= 1; i--) {
    let li = document.createElement("li");
    li.textContent = i;
    list.appendChild(li);
  }
  let li = document.createElement("li");
  li.textContent = "🚀 Blast Off!";
  list.appendChild(li);
}

// Example 2: Loop through array
let fruits = ["🍎 Apple", "🍌 Banana", "🍒 Cherry"];
console.log("Fruit List:");
fruits.forEach(fruit => console.log(fruit));

// --------------------
// 🌐 Part 4: DOM Manipulation
// --------------------
let toggleBtn = document.getElementById("toggleBtn");
let domText = document.getElementById("domText");

toggleBtn.addEventListener("click", function() {
  domText.classList.toggle("highlight");
});

// Extra DOM Example: Add new paragraph dynamically
let newPara = document.createElement("p");
newPara.innerText = "✨ This paragraph was added dynamically with JavaScript!";
document.getElementById("dom").appendChild(newPara);
