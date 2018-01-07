## ShoppingFever
App to show React Native with e-commerce running and connected via api.

## E-commerce:
Use [marketcloud.it](https://www.marketcloud.it) to create a shop and use the API.

## Endpoints:
- products:
    - El metodo post, necesita la version de pago: por ello devuelve error 401, pero esta implementado.
    - post:https://api.marketcloud.it/v0/products/:id
    - get: https://api.marketcloud.it/v0/products/:id

    - products_categories: https://api.marketcloud.it/v0/products?category=/:name_category
- cart: https://api.marketcloud.it/v0/carts
    De igualmodo el carrito necesita la versión de pago

## Screenshots
..coming soon


### Error por no estar como usuario de pago.

```
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
```


### Nota para el profesor:
 He cambiado en el último momento la api de marvel por una un poco mas realista. De forma que me encuentre problemas mas comunes como... necesidad de poner un navigation drawer, acceso a pantallas desde cualquier sitio etc.