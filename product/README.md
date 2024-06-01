# Product Listing App

This is a Product Listing App built with Next.js. The app fetches product data from the Fake Store API and displays it in a paginated list. Users can search for products and view detailed information about each product.

## Table of Contents

- [Installation](#installation)
  - [Prerequisites](#prerequisites)
  - [Clone the Repository](#clone-the-repository)
  - [Install Dependencies](#install-dependencies)
- [Usage](#usage)
  - [Running the Development Server](#running-the-development-server)
  - [Building for Production](#building-for-production)
  - [Running the Production Server](#running-the-production-server)
- [Project Structure](#project-structure)
- [Components](#components)
- [Pages](#pages)

## Installation

To set up and run this project locally, follow these steps:

### Prerequisites

Make sure you have the following installed on your machine:

- [Node.js](https://nodejs.org/) (version 12.x or later)
- [npm](https://www.npmjs.com/) (version 6.x or later) or [Yarn](https://yarnpkg.com/)

#### Installing Node.js and npm

1. **Node.js and npm**: Node.js comes with npm, so installing Node.js will also install npm.
   - Download the Node.js installer from the [official website](https://nodejs.org/).
   - Run the installer and follow the setup steps.
   - Verify the installation by running the following commands in your terminal:
     ```bash
     node -v
     npm -v
     ```
   You should see the version numbers of Node.js and npm.

### Clone the Repository

Clone the repository to your local machine using the following command:

```bash
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app/product

Install Dependencies
Install the required dependencies using npm or Yarn.

Using npm:

npm install

Or using Yarn:

yarn install

#Usage

Running the Development Server
To start the development server, run:

Using npm:
npm run dev

Or using Yarn:
yarn dev


Open your browser and navigate to http://localhost:3000 to see the app in action.

#Building for Production
To create an optimized production build, run:

Using npm:
npm run build

Or using Yarn:
yarn build

#Running the Production Server
After building the project, you can start the production server with:

Using npm:

npm start

Or using Yarn:

yarn start

#Project Structure
The project structure is as follows:

.
├── components
│   ├── ProductList.js
│   └── SearchInput.js
├── pages
│   ├── index.js
│   └── products
│       └── [productId].js
├── public
│   └── ...
├── styles
│   └── ...
├── README.md
├── package.json
└── ...
#Components
ProductList.js: Displays the list of products with pagination and handles the pagination logic.
SearchInput.js: Provides a search input for filtering products based on their title or category.
Pages

#index.js
index.js: The home page that lists all products and includes the search functionality.
getStaticProps fetches the products from the Fake Store API using getStaticProps.
Renders the SearchInput and ProductList components.

#products.[productId].js
products/[productId].js: The product details page that displays detailed information about a selected product.
Fetches the product details using getStaticProps and getStaticPaths.
Displays the product's title, price, description, category, image, and rating.

# Fake Api
API
This project uses the Fake Store API to fetch product data.

API Endpoints
GET /products: Fetches all products.
GET /products/:productId: Fetches details for a specific product by its ID.




