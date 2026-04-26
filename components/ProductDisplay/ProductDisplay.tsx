import React from "react";

export interface Product {
  id: string;
  name: string;
  price: number;
  description: string;
  imageUrl?: string;
  inStock: boolean;
}

export interface ProductDisplayProps {
  product: Product;
  showDescription?: boolean;
  showStockStatus?: boolean;
  onAddToCart?: (productId: string) => void;
  children?: React.ReactNode;
}

const ProductDisplay: React.FC<ProductDisplayProps> = ({
  product,
  showDescription = false,
  showStockStatus = false,
  onAddToCart,
  children,
}) => {
  return (
    <div
      className="card shadow-sm text-center"
      style={{ width: "300px" }}
    >
      {/* Image */}
      {product.imageUrl && (
        <img
          src={product.imageUrl}
          alt={product.name}
          className="card-img-top"
          style={{ height: "180px", objectFit: "cover" }}
        />
      )}

      <div className="card-body">

        {/* Name */}
        <h5 className="card-title">{product.name}</h5>

        {/* Price */}
        <h6 className="text-primary">₹ {product.price}</h6>

        {/* Description */}
        {showDescription && (
          <p className="text-muted">{product.description}</p>
        )}

        {/* Stock */}
        {showStockStatus && (
          <p
            className={
              product.inStock ? "text-success" : "text-danger"
            }
          >
            {product.inStock ? "In Stock" : "Out of Stock"}
          </p>
        )}

        {/* Extra content */}
        {children && <div className="mb-2">{children}</div>}

        {/* Button */}
        {onAddToCart && (
          <button
            className="btn btn-success w-100"
            disabled={!product.inStock}
            onClick={() => onAddToCart(product.id)}
          >
            Add to Cart
          </button>
        )}
      </div>
    </div>
  );
};

export default ProductDisplay;