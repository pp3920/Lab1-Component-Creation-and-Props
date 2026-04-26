import "./App.css";
import AlertBox from "./components/AlertBox/AlertBox";
import UserProfileCard from "./components/UserProfileCard/UserProfileCard";
import ProductDisplay, { type Product } from "./components/ProductDisplay/ProductDisplay";

function App() {
  // user data
  const user = {
    id: "1",
    name: "John Doe",
    email: "john.doe@example.com",
    role: "Software Engineer",
    avatarUrl: "https://example.com/avatar.jpg",
  };

  // product data
  const product: Product = {
    id: "1",
    name: "Wireless Headphones",
    price: 199.99,
    description: "High-quality wireless headphones with noise cancellation.",
    imageUrl: "https://example.com/headphones.jpg",
    inStock: true,
  };

  return (
    <>
      {/* Alert Box */}
      <AlertBox
        type="success"
        message="Your profile has been updated successfully!"
        onClose={() => alert("Alert closed")}
      >
        <p className="text-sm">
          You can now continue using the application.
        </p>
      </AlertBox>

      {/* User Profile Card */}
      <UserProfileCard
        user={user}
        showEmail={true}
        showRole={true}
        onEdit={(userId: any) =>
          alert(`Editing user ${userId}`)
        }
      >
        Last login: 2 hours ago
      </UserProfileCard>

      {/* 🛍️ Product Display (NEW INTEGRATION) */}
      <div className="mt-4 d-flex justify-content-center">
        <ProductDisplay
          product={product}
          showDescription={true}
          showStockStatus={true}
          onAddToCart={(productId) =>
            alert(`Added product ${productId} to cart`)
          }
        >
          <div className="text-sm text-muted">
          
          </div>
        </ProductDisplay>
      </div>
    </>
  );
}

export default App;