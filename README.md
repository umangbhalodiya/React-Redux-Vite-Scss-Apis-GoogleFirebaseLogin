# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

# Movie Finder

E-commerce app 

## Prerequisites

- Node.js (version 18.17.0)
- NPM (version 10.2.0)

## Installation

1. Clone the repository:

2. Navigate to the project directory

3. Install dependencies

   npm install or yarn install

4. Run application

   npm run dev 

   The app will be served at http://localhost:5173/

## Folder Structure

/src
├── api
├── assets
├── Components
    |----Header 
         |----Page Components
         |----header.scss
├── helpers
    |----authHelper.js 
├── routes
    |----Cart
         |----cart.scss
    |----Home
         |----home.scss
    |----Products
         |----products.scss
    |----ProductDetailsModal
         |----ProductDetailsModal.scss
    |----ProductDetails
         |----ProductDetails.scss
    |----protectedroute.jsx
    |----routes.jsx
├── store 
    |----ApiSlice
    |----index.js
└── App.jsx
└── App.css
└── main.jsx
└── index.css

## Technologies Used

- React
- Vite
- HTML/SCSS

## Libraries Used

   - react-redux
   - @reduxjs/toolkit
   - axios
   - moment
   - react-hot-toast
   - react-loading-skeleton
   - firebase
   - sass-lint
   - sass
   - @firebase/app
   

## Features

1 - Products : Listed different products using third party open APIs
2 - Cart :  Enabled Add product to cart , and Remove product from cart 
3 - Authentication : User must have to login first then they will be able to see products
4 - Product Page : User can view product individually and add to cart from the box


## Contributing

Please follow these steps:

1.Fork the repository.
2.Create a new branch for your feature/bugfix.
3.Make your changes.
4.Commit and push your changes to your forked repository.
5.Submit a pull request.
