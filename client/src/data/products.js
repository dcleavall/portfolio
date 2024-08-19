const products = [
    { id: 1, name: "T-Shirt", price: 20.00, description: "This is a description of product 1" },
    { id: 2, name: "Hoodie", price: 45.00, description: "This is a description of product 2" },
    { id: 3, name: "Portfolio Site", price: 100.00, description: "This is a description of product 3" },
];

function getProductData(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        console.log("Product not found:", id);
    }
    return product;
}

export { getProductData, products };
