// Quotes array
const quotes = [
  { text: "Code is like humor. When you have to explain it, it’s bad.", category: "Programming" },
  { text: "In the middle of difficulty lies opportunity.", category: "Motivation" },
  { text: "Simplicity is the soul of efficiency.", category: "Design" }
];

// Function to display a random quote
function showRandomQuote() {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  const quote = quotes[randomIndex];
  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.textContent = `"${quote.text}" — [${quote.category}]`;
}

// Function to add a new quote
function addQuote() {
  const quoteText = document.getElementById("newQuoteText").value.trim();
  const quoteCategory = document.getElementById("newQuoteCategory").value.trim();

  if (!quoteText || !quoteCategory) {
    alert("Please fill in both fields.");
    return;
  }

  quotes.push({ text: quoteText, category: quoteCategory });
  document.getElementById("newQuoteText").value = "";
  document.getElementById("newQuoteCategory").value = "";
  alert("Quote added successfully!");
}

// Add event listener for new quote button
document.getElementById("newQuote").addEventListener("click", displayRandomQuote);

document.addEventListener("DOMContentLoaded", () => {
  createAddQuoteForm(); // ✅ ensure it's called
});


//display randome quote
function displayRandomQuote() {
  const index = Math.floor(Math.random() * quotes.length);
  const quote = quotes[index];

  const quoteDisplay = document.getElementById("quoteDisplay");
  quoteDisplay.innerHTML = `<p>"${quote.text}" — <em>${quote.category}</em></p>`;
}

//create add quote function
function createAddQuoteForm() {
  const formContainer = document.createElement("div");

  const quoteInput = document.createElement("input");
  quoteInput.id = "newQuoteText";
  quoteInput.type = "text";
  quoteInput.placeholder = "Enter a new quote";

  const categoryInput = document.createElement("input");
  categoryInput.id = "newQuoteCategory";
  categoryInput.type = "text";
  categoryInput.placeholder = "Enter quote category";

  const addButton = document.createElement("button");
  addButton.textContent = "Add Quote";
  addButton.onclick = addQuote;

  formContainer.appendChild(quoteInput);
  formContainer.appendChild(categoryInput);
  formContainer.appendChild(addButton);

  document.body.appendChild(formContainer);
}

