import React from "react";
import ProductDetails from "./ProductDetails";
 
const ProductPage = () => {
    const product = {
        name: "Oppo A9 2020",
        price: "Rs 13,500",
        description: `4 GB RAM | 128 GB ROM | Expandable Upto 256 GB 16.51 cm (6.5 inch), 
                      Display 48MP + 8MP + 2MP + 2MP | 16MP Front Camera
                      5000 mAh Battery
                      Qualcomm Snapdragon 665 Processor`
    };

    const productDetailsStyle = {
        border: "1px solid #000000",
        borderRadius: "5px",
        padding: "10px",
        marginBottom: "20px",
        maxWidth: "600px",
        margin: "auto"
    };

    return (
        <div>
            <h2 style={{ textAlign: "center" }}>Product Page</h2>
            <div  style={productDetailsStyle}>
                <img src="https://i.ibb.co/wz8d0Pb/mobile.jpg" alt="mobile"/>
                <ProductDetails
                    name={product.name}
                    price={product.price}
                    description = {product.description}
                />
            </div>
        </div>
    );
}
export default ProductPage;