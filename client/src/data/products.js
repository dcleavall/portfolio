const products = [
    { id: 1, name: "T-Shirt", price: 50, type: 'tshirt', description: "This limited-edition T-shirt marks the debut of our collection, with new exclusive items dropping every 3-6 months. A portion of every sale will support [Charity Name], a nonprofit committed to providing organic, healthy food to those in need." },
    { id: 2, name: "Hoodie", price: 50, type: 'hoodie', description: "The hoodie collection, similarly, will follow the same release schedule as our t-shirts. However, this will support [Charity Name], a nonprofit dedicated to supporting the environment." },
    { id: 3, name: "Portfolio Site", price: 100, type: 'portfolio', description: "These files will be delivered upon purchase as a zipfile to the specified email. The files will include some default information for you to personalize." },
];

function getProductData(id) {
    const product = products.find(product => product.id === id);
    if (!product) {
        console.log("Product not found:", id);
    }
    return product;
}

export { getProductData, products };
