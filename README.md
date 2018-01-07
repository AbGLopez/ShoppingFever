## ShoppingFever
Simple demo app to show React Native app with e-commerce running.

## E-commerce:
Use [marketcloud.it](https://www.marketcloud.it) to create a shop

## Endpoints:
- products:
    El metodo post, necesita la version de pago: por ello devuelve error 401, pero esta implementado.
    -post:https://api.marketcloud.it/v0/products/:id
    -get: https://api.marketcloud.it/v0/products/:id

- products_categories: https://api.marketcloud.it/v0/products?category=/:name_category
- cart: https://api.marketcloud.it/v0/carts

## Screenshots



## Error por no estar autorizado
{
    "status": false,
    "errors": [
        {
            "code": 401,
            "type": "Unauthorized",
            "message": "Client is not authorized to perform this action, its role is \"public\" but a higher authorization level is required.",
            "isHTTPError": true
        }
    ]
}