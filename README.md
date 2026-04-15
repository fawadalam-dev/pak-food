# Pak-Food: Buner Recipes Ordering System

A modern React-based food ordering application featuring traditional Pakistani cuisine from Buner, built with Vite for fast development and deployment.

## Features

### 🍽️ Food Ordering System
- **Product Catalog**: Browse a curated selection of authentic Pakistani dishes including Buner Chapli Kebab, Chicken Burger, Fried Rice, Peshawari Karahi, and Sajji Special
- **Product Images**: High-quality food images for each menu item
- **Pricing**: Clear pricing for all items with real-time total calculations

### 🔍 Search Functionality
- **Real-time Search**: Search products by name or description
- **Instant Filtering**: Results update immediately as you type
- **Seamless Integration**: Add items directly from search results to cart

### 🛒 Cart Management
- **Add to Cart**: One-click addition of products to cart
- **Quantity Control**: Increase or decrease item quantities
- **Item Removal**: Remove items from cart with a single click
- **Price Calculation**: Automatic calculation of individual item prices and total cost

### 💳 Checkout System
- **Multiple Payment Methods**:
  - Cash on Delivery
  - Credit/Debit Card
  - Online Payment
  - Mobile Wallet
- **Order Confirmation**: Instant feedback after placing an order
- **Cart Reset**: Automatic cart clearing after successful checkout

### 🎨 User Interface
- **Responsive Design**: Optimized for desktop and mobile devices
- **Dark Theme**: Modern dark UI with orange accents
- **Smooth Navigation**: Easy routing between home and products pages
- **Interactive Elements**: Hover effects and transitions for better UX

## Getting Started

### Prerequisites
- Node.js (version 16 or higher)
- npm or yarn

### Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd pak-food
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to `http://localhost:5173` to access the home page.

### Build for Production

```bash
npm run build
```

## Project Structure

```
src/
├── components/
│   ├── Hero-section.jsx    # Home page with navigation and intro
│   ├── Product/
│   │   ├── Product.jsx     # Main product page with cart and checkout
│   │   └── Product.css     # Styling for product components
│   ├── Login.jsx           # Login page
│   └── Form.jsx            # Search form for recipes (home page)
├── App.jsx                 # Main app component with routing
├── main.jsx                # App entry point
└── index.css               # Global styles
```

## Technologies Used

- **React**: Frontend framework for building user interfaces
- **React Router**: Client-side routing for navigation
- **Vite**: Fast build tool and development server
- **Tailwind CSS**: Utility-first CSS framework for styling
- **ESLint**: Code linting for consistent code quality

## Navigation

- **Home Page** (`/`): Introduction to Buner Recipes with recipe search
- **Products Page** (`/products`): Full food ordering system
- **Login Page** (`/login`): User authentication

## Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Run tests and linting
5. Submit a pull request

## License

This project is licensed under the MIT License.