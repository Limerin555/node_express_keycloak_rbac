const express = require("express");
const router =  express.Router();

// Middleware
const keycloak = require("#middleware/keycloak");
const extractTokenData = require("#middleware/extractTokenData");
const checkIfAdmin = require("#middleware/checkIfAdmin");

// Fake Data
// Regular items
const menuItems = [
  {
    name: "Croissant",
    price: "$1"
  },
  {
    name:"Latte",
    price: "$5"
  },
  {
    name: "Roti Canai",
    price: "$0.50"
  }
];

// New items
const newItems = [
  {
    name: "Hot Chocolate",
    price: "$5"
  },
  {
    name: "Satay",
    price: "$8"
  },
  {
    name: "Pad Thai",
    price: "$7"
  }
]

// Route open to any role
router.get("/menu", 
[keycloak.protect(), extractTokenData],
async ( req, res, next) => {
  try {
    res.json(menuItems);
  } catch (error) {
    return next(error);
  }
});

// Route restricted to Admin role only
router.get("/menu/all", 
[keycloak.protect(), extractTokenData, checkIfAdmin],
async ( req, res, next) => {
  try {
    res.json(menuItems);
  } catch (error) {
    return next(error);
  }
});