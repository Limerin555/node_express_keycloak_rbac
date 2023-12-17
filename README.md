# Node Express Keycloak RBAC
![alt text](https://miro.medium.com/v2/resize:fit:1100/format:webp/1*YJvx7UtN2adQhWiA_Fercw.png)

This is a **Node** + **Express** project for a [**tutorial**](https://medium.com/@erinlim555/simple-keycloak-rbac-with-node-js-express-js-bc9031c9f1ba) on Medium. 

The tutorial is a simple demonstration of how you can implement Role Based Access Control (RBAC) with Keycloak authentication into your Node & Express REST API.

## Routes

| URL             | Method |                     Roles                    |
|:---------------:|:------:|:--------------------------------------------:|
| /menu-items     | GET    | any                                          |
| /menu-items/all | GET    | admin                                        |

## Local Installation Guide

1. Run `npm install` to install npm packages
2. Create your own ".env" file following ".env.example"
3. Run `npm start` to start server