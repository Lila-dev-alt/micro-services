# AltTable


## Projet microservices

### Démarrer le projet 

```npm install```

```npm start```

Attention si vous utilisez postman:
bien mettre dans le headers des requetes:
en key : Content-type
et en valeur: application/json

### Les routes

###### **1) Voir tous les plats:**

```Route: /api/plates```

###### **2)Créer un plat (requête en POST):**

exemple à mettre dans le body de la requete:
``` 
     {
       "name": "toto",
       "description": "description",
       "price": 3,
       "type": "Entrée",   
       "quantity": 4
     } 
```

``` Route : /api/plate```

###### **3) Trouver un plat (requête en get):**

``` Route : /api/plate/:name```

###### **4) Changer la quantité d'un plat ( requête en POST) :**

exemple à mettre dans le body de la requete:
``` 
     {
      quantity: 2
     } 
```

```Route : /api/plate/update/:name```

##### **5) Récupérer tous les plats disponibles**

```Route : /api/carte```