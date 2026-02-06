import { getProducts } from "../data/products";

export default function Home(){
    const products = getProducts();
    return (
        <div className="page">
            <div className="home-hero">
                <h1 className="home-title"> Welcome to ModelKitShop</h1>
                <p className="home-subtitle">
                    Discover amazing model from the series Fruity Robo was made from Yilichuangwan Model Toys Factory 
                </p>
            </div>
            <div className="container">
                <h2 className="page-title">Our Products</h2>
                <div className="products-grid">
                    {products.map((product) => (
                        <div className="product-card" key={product.id}>
                            <img src={product.image} className="product-card-image" />
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}