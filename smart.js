// Sample product data (replace this with your product information)
const products = [
    {
      name: "Product 1",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 1."
    },
    {
      name: "Product 2",
      image: "https://via.placeholder.com/150",
      description: "Description of Product 2."
    },
    // Add more product objects as needed
  ];
  
  // Function to display products
  function displayProducts() {
    const container = document.getElementById("productsContainer");
  
    products.forEach(product => {
      const productDiv = document.createElement("div");
      productDiv.classList.add("product");
  
      const productName = document.createElement("h3");
      productName.textContent = product.name;
  
      const productImage = document.createElement("img");
      productImage.src = product.image;
      productImage.alt = product.name;
  
      const productDescription = document.createElement("p");
      productDescription.textContent = product.description;
  
      productDiv.appendChild(productName);
      productDiv.appendChild(productImage);
      productDiv.appendChild(productDescription);
  
      container.appendChild(productDiv);
    });
  }
  
  // Display products when the page loads
  window.addEventListener("load", displayProducts);
  