# Product Catalog

This is a React FE application that displays a list of products retrieved from a headless CMS. The application uses a mock service layer to simulate an API call to the CMS and stores the products in state. The products are then rendered as cards in separate sections by their type, and expired products are grayed out. It also uses basic CSS for styling and implemented CSS Modules to prevent global scope collisions.

![preview](https://cdn.discordapp.com/attachments/1039657765427224709/1103455081485062225/image.png "Product Catalog Image")

## Installation
1. Clone this repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.
4. Run `npm start` to start the application. It will open automatically in your browser at http://localhost:3000.

## Usage
Once the application is running, you will see a list of product cards displayed on the page. Each card contains the following information about a product:

* Image
* Name
* Description
* Categories
* Expiration
