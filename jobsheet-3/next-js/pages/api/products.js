export default async function handler(req, res) {
    const Response = await fetch('https://fakestoreapi.com/products');
    const products = await Response.json();

    res.status(200).json(products);
}