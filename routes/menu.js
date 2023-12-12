const express = require("express");
const router =  express.Router();

// Middleware
const keycloak = require("#middlewares/keycloak");
const extractTokenData = require("#middlewares/extractTokenData");
const checkIfAdmin = require("#middlewares/checkIfAdmin");

// Fake Data
const menuItems = [
  {
    name: "Croissant",
    price: "$1",
    onMenu: true
  },
  {
    name:"Latte",
    price: "$5",
    onMenu: true
  },
  {
    name: "Roti Canai",
    price: "$0.50",
    onMenu: true
  },
  {
    name: "Hot Chocolate",
    price: "$5",
    onMenu: false
  },
  {
    name: "Satay",
    price: "$8",
    onMenu: false
  },
  {
    name: "Pad Thai",
    price: "$7",
    onMenu: false
  }
];

// Route open to any role
router.get("/menu", 
[keycloak.protect()],
async ( req, res, next) => {
  try {
    let filtered = menuItems.filter(item => {
      if (item.onMenu === true) {
        return item;
      }
    });
    res.json(filtered);
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

module.exports = router;