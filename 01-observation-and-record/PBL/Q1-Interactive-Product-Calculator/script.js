
// Select the input elements from the webpage
const productName = document.getElementById("productName");
const quantity = document.getElementById("quantity");
const price = document.getElementById("price");

// Select the elements that display the calculated information
const displayProduct = document.getElementById("displayProduct");
const displayQuantity = document.getElementById("displayQuantity");
const displayPrice = document.getElementById("displayPrice");
const totalPrice = document.getElementById("totalPrice");
const message = document.getElementById("message");

// Function to calculate and display the product total
function updateCalculator() {

    const product = productName.value.trim();
    const quantityValue = Number(quantity.value);
    const priceValue = Number(price.value);

    // Reset validation message
    message.textContent = "";

    // Display product information
    displayProduct.textContent =
        product === "" ? "Not selected" : product;

    // Display quantity
    displayQuantity.textContent =
        quantity.value === "" ? "—" : quantityValue;

    // Display price
    displayPrice.textContent =
        price.value === ""
            ? "₹0.00"
            : `₹${priceValue.toFixed(2)}`;

    // Validate quantity
    if (quantity.value !== "" && quantityValue <= 0) {

        message.textContent =
            "⚠ Quantity must be greater than zero.";

        totalPrice.textContent = "₹0.00";

        return;
    }

    // Validate price
    if (price.value !== "" && priceValue < 0) {

        message.textContent =
            "⚠ Price cannot be negative.";

        totalPrice.textContent = "₹0.00";

        return;
    }

    // Calculate only after both values are provided
    if (quantity.value !== "" && price.value !== "") {

        const total = quantityValue * priceValue;

        // Update the webpage without refreshing
        totalPrice.textContent =
            `₹${total.toFixed(2)}`;
    }

    // Show a helpful message when only the product is entered
    else if (product !== "") {

        message.textContent =
            "Enter quantity and price to calculate the total.";
    }
}

// Event listener for product name changes
productName.addEventListener("input", updateCalculator);

// Event listener for quantity changes
quantity.addEventListener("input", updateCalculator);

// Event listener for price changes
price.addEventListener("input", updateCalculator);

