# :star: API de Mercado Libre


---

## Autenticación

[Autenticación y autorización](https://developers.mercadolibre.com.ar/es_ar/autenticacion-y-autorizacion/)

---

## :book: Datos que uso en la aplicación

- Para obtener las **categorías de Argentina**: [https://api.mercadolibre.com/sites/MLA/categories/all](https://api.mercadolibre.com/sites/MLA/categories/all)

- **Categoría Principal - Inmueble**: [https://api.mercadolibre.com/sites/MLA/categories](https://api.mercadolibre.com/sites/MLA/categories), para tener la categoría de **Inmuebles**

```JSON
{
   "id": "MLA1459",
   "name": "Inmuebles"
}
```

- **árbol de categorías**: [https://api.mercadolibre.com/categories/MLA79242](https://api.mercadolibre.com/categories/MLA79242), principalmente para ver las **subcategorías** y hay más datos que se ven en la URL:

| categoría  | id |
| ---------- | -- |
| "Casas" | "MLA1466" |
|  "Departamentos" | "MLA1472" |
| "PH" | "MLA105179" |
| "Quintas" | "MLA50547" |
`

- **Subcategorías - Alquiler, Ventas, etc**: [https://api.mercadolibre.com/categories/MLA1466](https://api.mercadolibre.com/categories/MLA1466) en este ejemplo busco de `MLA1466` casas, cambiando el id puedo ver las opciones para todas las elegidas.

| tipo inmueble | alquiler | alquiler temporario | venta |
| ------------- | -------- | ------------------- | ----- |
| **casas(MLA1466)** | "MLA1467" | "MLA50278" | "MLA1468" |
| **departamentos(MLA1472)** | "MLA1473" |  "MLA50279" |  "MLA1474" |
| **PH** | "MLA105181" | "MLA105180" |  "MLA105182" |
| **quintas** |  "MLA50549" |  "MLA52745" | "MLA50551" |

- **Búsqueda por categoría/Subcategoria**: [https://api.mercadolibre.com/sites/MLA/search?category=MLA5726](https://api.mercadolibre.com/sites/MLA/search?category=MLA1468), este es un ejemplo de **casas en venta**


- Para hacer los filtros por **unicación**:

-Para ver los **paises**: [https://api.mercadolibre.com/classified_locations/countries](https://api.mercadolibre.com/classified_locations/countries), en el caso de Argentina:

```JSON
{
   "id":"AR",
   "name":"Argentina",
   "locale":"es_AR",
   "currency_id":"ARS"
}
```

-Para ver el detalle del pais: `https://api.mercadolibre.com/classified_locations/countries/$COUNTRY_ID`, para ver Argentina: [https://api.mercadolibre.com/classified_locations/countries/AR](https://api.mercadolibre.com/classified_locations/countries/AR).

Dentro de **states** tengo los estados(Provincias)

Para ver la información de los estados(las **provincias**): `https://api.mercadolibre.com/classified_locations/states/$STATE_ID``, ejemplo buscando de Capital Federal: [ttps://api.mercadolibre.com/classified_locations/states/TUxBUENBUGw3M2E1](ttps://api.mercadolibre.com/classified_locations/states/TUxBUENBUGw3M2E1)

Para ver la información de la **ciudad**:  `https://api.mercadolibre.com/classified_locations/cities/$CITY_ID`, ejmplo con Capital Federal: [https://api.mercadolibre.com/classified_locations/cities/TUxBQ0NBUGZlZG1sYQ](https://api.mercadolibre.com/classified_locations/cities/TUxBQ0NBUGZlZG1sYQ), aca tengo los **barrios**


Para ver la información por **barrio**: `https://api.mercadolibre.com/classified_locations/neighborhoods/$NEIGHBORHOOD_ID`, ejemplo de Caballito: [ https://api.mercadolibre.com/classified_locations/neighborhoods/TUxBQkNBQjM4MDda]( https://api.mercadolibre.com/classified_locations/neighborhoods/TUxBQkNBQjM4MDda)

----
---

## :star: Categorías por Site

El recurso Sites puede ofrecerte la estructura de categorías para un país en particular, en este caso Argentina.

Ejemplo: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/categories``

Respuesta:

```JSON
[
    {
        "id": "MLA5725",
        "name": "Accesorios para Vehículos"
    },
    {
        "id": "MLA1512",
        "name": "Agro"
    },
    {
        "id": "MLA1403",
        "name": "Alimentos y Bebidas"
    },
    {
        "id": "MLA1071",
        "name": "Animales y Mascotas"
    },
    {
        "id": "MLA1367",
        "name": "Antigüedades y Colecciones"
    },
    {
        "id": "MLA1368",
        "name": "Arte, Librería y Mercería"
    },
    {
        "id": "MLA1743",
        "name": "Autos, Motos y Otros"
    },
    {
        "id": "MLA1384",
        "name": "Bebés"
    },
    {
        "id": "MLA1246",
        "name": "Belleza y Cuidado Personal"
    },
    {
        "id": "MLA1039",
        "name": "Cámaras y Accesorios"
    },
    {
        "id": "MLA1051",
        "name": "Celulares y Teléfonos"
    },
    {
        "id": "MLA1648",
        "name": "Computación"
    },
    {
        "id": "MLA1144",
        "name": "Consolas y Videojuegos"
    },
    {
        "id": "MLA1500",
        "name": "Construcción"
    },
    {
        "id": "MLA1276",
        "name": "Deportes y Fitness"
    },
    {
        "id": "MLA5726",
        "name": "Electrodomésticos y Aires Ac."
    },
    {
        "id": "MLA1000",
        "name": "Electrónica, Audio y Video"
    },
    {
        "id": "MLA2547",
        "name": "Entradas para Eventos"
    },
    {
        "id": "MLA407134",
        "name": "Herramientas"
    },
    {
        "id": "MLA1574",
        "name": "Hogar, Muebles y Jardín"
    },
    {
        "id": "MLA1499",
        "name": "Industrias y Oficinas"
    },
    {
        "id": "MLA1459",
        "name": "Inmuebles"
    },
    {
        "id": "MLA1182",
        "name": "Instrumentos Musicales"
    },
    {
        "id": "MLA3937",
        "name": "Joyas y Relojes"
    },
    {
        "id": "MLA1132",
        "name": "Juegos y Juguetes"
    },
    {
        "id": "MLA3025",
        "name": "Libros, Revistas y Comics"
    },
    {
        "id": "MLA1168",
        "name": "Música, Películas y Series"
    },
    {
        "id": "MLA1430",
        "name": "Ropa y Accesorios"
    },
    {
        "id": "MLA409431",
        "name": "Salud y Equipamiento Médico"
    },
    {
        "id": "MLA1540",
        "name": "Servicios"
    },
    {
        "id": "MLA9304",
        "name": "Souvenirs, Cotillón y Fiestas"
    },
    {
        "id": "MLA1953",
        "name": "Otras categorías"
    }
]
Para categorías de segundo nivel o información relacionada con categorías específicas, debes utilizar el recurso Categorías y enviar el ID de categoría como parámetro URL.

Veamos qué encontramos en la categoría "Inmuebles".


Ejemplo:

curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/categories/MLA1459
Respuesta:

{
    "id": "MLA1459",
    "name": "Inmuebles",
    "picture": "http://resources.mlstatic.com/category/images/cc0eed64-9cfb-4b78-9258-6266475f6427.png",
    "permalink": "https://www.mercadolibre.com.ar/c/inmuebles",
    "total_items_in_this_category": 652169,
    "path_from_root": [
        {
            "id": "MLA1459",
            "name": "Inmuebles"
        }
    ],
    "children_categories": [
        {
            "id": "MLA374730",
            "name": "Camas Náuticas",
            "total_items_in_this_category": 319
        },
        {
            "id": "MLA1496",
            "name": "Campos",
            "total_items_in_this_category": 5789
        },
        {
            "id": "MLA1466",
            "name": "Casas",
            "total_items_in_this_category": 172797
        },
        {
            "id": "MLA50541",
            "name": "Cocheras",
            "total_items_in_this_category": 9817
        },
        {
            "id": "MLA392265",
            "name": "Consultorios",
            "total_items_in_this_category": 506
        },
        {
            "id": "MLA1472",
            "name": "Departamentos",
            "total_items_in_this_category": 279183
        },
        {
            "id": "MLA1475",
            "name": "Depósitos y Galpones",
            "total_items_in_this_category": 11609
        },
        {
            "id": "MLA50545",
            "name": "Fondo de Comercio",
            "total_items_in_this_category": 2984
        },
        {
            "id": "MLA79242",
            "name": "Locales",
            "total_items_in_this_category": 23445
        },
        {
            "id": "MLA50538",
            "name": "Oficinas",
            "total_items_in_this_category": 16826
        },
        {
            "id": "MLA50544",
            "name": "Parcelas, Nichos y Bóvedas",
            "total_items_in_this_category": 406
        },
        {
            "id": "MLA105179",
            "name": "PH",
            "total_items_in_this_category": 28017
        },
        {
            "id": "MLA50547",
            "name": "Quintas",
            "total_items_in_this_category": 4927
        },
        {
            "id": "MLA1493",
            "name": "Terrenos y Lotes",
            "total_items_in_this_category": 88830
        },
        {
            "id": "MLA50536",
            "name": "Tiempo Compartido",
            "total_items_in_this_category": 299
        },
        {
            "id": "MLA1892",
            "name": "Otros Inmuebles",
            "total_items_in_this_category": 6401
        }
    ],
    "attribute_types": "none",
    "settings": {
        "adult_content": false,
        "buying_allowed": false,
        "buying_modes": [
            "classified"
        ],
        "catalog_domain": null,
        "coverage_areas": "not_allowed",
        "currencies": [
            "USD",
            "ARS"
        ],
        "fragile": false,
        "immediate_payment": "optional",
        "item_conditions": [
            "not_specified",
            "new",
            "used"
        ],
        "items_reviews_allowed": false,
        "listing_allowed": false,
        "max_description_length": 50000,
        "max_pictures_per_item": 30,
        "max_pictures_per_item_var": 6,
        "max_sub_title_length": 70,
        "max_title_length": 200,
        "maximum_price": null,
        "maximum_price_currency": "ARS",
        "minimum_price": 33,
        "minimum_price_currency": "ARS",
        "mirror_category": null,
        "mirror_master_category": null,
        "mirror_slave_categories": [],
        "price": "required",
        "reservation_allowed": "not_allowed",
        "restrictions": [],
        "rounded_address": false,
        "seller_contact": "optional",
        "shipping_modes": [
            "custom",
            "not_specified"
        ],
        "shipping_options": [],
        "shipping_profile": "not_allowed",
        "show_contact_information": true,
        "simple_shipping": "not_allowed",
        "stock": "required",
        "sub_vertical": "null",
        "subscribable": false,
        "tags": [],
        "vertical": "real_estate",
        "vip_subdomain": "inmueble",
        "buyer_protection_programs": [
            "delivered",
            "undelivered"
        ],
        "status": "enabled"
    },
    "channels_settings": [],
    "meta_categ_id": null,
    "attributable": false,
    "date_created": "2018-04-25T08:12:56.000Z"
}
```


Obtienes los atributos **“path_from_root”** y **children_categories**. 

Utiliza estos atributos para explorar el **árbol de categorías** y encontrar la **categoría específica para tu publicación**. Como puedes ver, las categorías se basan en tipos de propiedad seguidas, en primer lugar, por tipo de operación. Debes seleccionar la categoría hijo.

Ejemplo: ```curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/categories/MLA79242```

Respuesta:

```JSON
{
    "id": "MLA1459",
    "name": "Inmuebles",
    "picture": "http://resources.mlstatic.com/category/images/cc0eed64-9cfb-4b78-9258-6266475f6427.png",
    "permalink": "https://www.mercadolibre.com.ar/c/inmuebles",
    "total_items_in_this_category": 652169,
    "path_from_root": [
        {
            "id": "MLA1459",
            "name": "Inmuebles"
        }
    ],
    "children_categories": [
        {
            "id": "MLA374730",
            "name": "Camas Náuticas",
            "total_items_in_this_category": 319
        },
        {
            "id": "MLA1496",
            "name": "Campos",
            "total_items_in_this_category": 5789
        },
        {
            "id": "MLA1466",
            "name": "Casas",
            "total_items_in_this_category": 172797
        },
        {
            "id": "MLA50541",
            "name": "Cocheras",
            "total_items_in_this_category": 9817
        },
        {
            "id": "MLA392265",
            "name": "Consultorios",
            "total_items_in_this_category": 506
        },
        {
            "id": "MLA1472",
            "name": "Departamentos",
            "total_items_in_this_category": 279183
        },
        {
            "id": "MLA1475",
            "name": "Depósitos y Galpones",
            "total_items_in_this_category": 11609
        },
        {
            "id": "MLA50545",
            "name": "Fondo de Comercio",
            "total_items_in_this_category": 2984
        },
        {
            "id": "MLA79242",
            "name": "Locales",
            "total_items_in_this_category": 23445
        },
        {
            "id": "MLA50538",
            "name": "Oficinas",
            "total_items_in_this_category": 16826
        },
        {
            "id": "MLA50544",
            "name": "Parcelas, Nichos y Bóvedas",
            "total_items_in_this_category": 406
        },
        {
            "id": "MLA105179",
            "name": "PH",
            "total_items_in_this_category": 28017
        },
        {
            "id": "MLA50547",
            "name": "Quintas",
            "total_items_in_this_category": 4927
        },
        {
            "id": "MLA1493",
            "name": "Terrenos y Lotes",
            "total_items_in_this_category": 88830
        },
        {
            "id": "MLA50536",
            "name": "Tiempo Compartido",
            "total_items_in_this_category": 299
        },
        {
            "id": "MLA1892",
            "name": "Otros Inmuebles",
            "total_items_in_this_category": 6401
        }
    ],
    "attribute_types": "none",
    "settings": {
        "adult_content": false,
        "buying_allowed": false,
        "buying_modes": [
            "classified"
        ],
        "catalog_domain": null,
        "coverage_areas": "not_allowed",
        "currencies": [
            "USD",
            "ARS"
        ],
        "fragile": false,
        "immediate_payment": "optional",
        "item_conditions": [
            "not_specified",
            "new",
            "used"
        ],
        "items_reviews_allowed": false,
        "listing_allowed": false,
        "max_description_length": 50000,
        "max_pictures_per_item": 30,
        "max_pictures_per_item_var": 6,
        "max_sub_title_length": 70,
        "max_title_length": 200,
        "maximum_price": null,
        "maximum_price_currency": "ARS",
        "minimum_price": 33,
        "minimum_price_currency": "ARS",
        "mirror_category": null,
        "mirror_master_category": null,
        "mirror_slave_categories": [],
        "price": "required",
        "reservation_allowed": "not_allowed",
        "restrictions": [],
        "rounded_address": false,
        "seller_contact": "optional",
        "shipping_modes": [
            "custom",
            "not_specified"
        ],
        "shipping_options": [],
        "shipping_profile": "not_allowed",
        "show_contact_information": true,
        "simple_shipping": "not_allowed",
        "stock": "required",
        "sub_vertical": "null",
        "subscribable": false,
        "tags": [],
        "vertical": "real_estate",
        "vip_subdomain": "inmueble",
        "buyer_protection_programs": [
            "delivered",
            "undelivered"
        ],
        "status": "enabled"
    },
    "channels_settings": [],
    "meta_categ_id": null,
    "attributable": false,
    "date_created": "2018-04-25T08:12:56.000Z"
}
```

En este caso, las **children_categories** son **“Venta”** y **“Alquiler”**. Puedes publicar tu inmueble en la que más te convenga.

---

## Categorías JSON

Realizar una llamada a una **categoría en particular** te permitirá **conocer sus atributos**. 

A continuación encontrarás una descripción de algunos de estos atributos. Al realizar una solicitud **GET** al **category_id**, encontrarás todos los atributos disponibles y puedes saber si son obligatorios u opcionales para publicar en la categoría.

Ejemplo: ```curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/categories/MLA79243```

Respuesta:

```JSON
{
    "id": "MLA79243",
    "name": "Alquiler",
    "picture": null,
    "permalink": null,
    "total_items_in_this_category": 8964,
    "path_from_root": [
        {
            "id": "MLA1459",
            "name": "Inmuebles"
        },
        {
            "id": "MLA79242",
            "name": "Locales"
        },
        {
            "id": "MLA79243",
            "name": "Alquiler"
        }
    ],
    "children_categories": [],
    "attribute_types": "attributes",
    "settings": {
        "adult_content": false,
        "buying_allowed": false,
        "buying_modes": [
            "classified"
        ],
        "catalog_domain": "MLA-RETAIL_SPACE_FOR_RENT",
        "coverage_areas": "not_allowed",
        "currencies": [
            "USD",
            "ARS"
        ],
        "fragile": false,
        "immediate_payment": "optional",
        "item_conditions": [
            "not_specified",
            "new",
            "used"
        ],
        "items_reviews_allowed": false,
        "listing_allowed": true,
        "max_description_length": 50000,
        "max_pictures_per_item": 30,
        "max_pictures_per_item_var": 6,
        "max_sub_title_length": 70,
        "max_title_length": 200,
        "maximum_price": 8000000,
        "maximum_price_currency": "ARS",
        "minimum_price": 33,
        "minimum_price_currency": "ARS",
        "mirror_category": null,
        "mirror_master_category": null,
        "mirror_slave_categories": [],
        "price": "required",
        "reservation_allowed": "not_allowed",
        "restrictions": [],
        "rounded_address": false,
        "seller_contact": "optional",
        "shipping_modes": [
            "custom",
            "not_specified"
        ],
        "shipping_options": [],
        "shipping_profile": "not_allowed",
        "show_contact_information": true,
        "simple_shipping": "not_allowed",
        "stock": "required",
        "sub_vertical": "properties",
        "subscribable": false,
        "tags": [],
        "vertical": "real_estate",
        "vip_subdomain": "inmueble",
        "buyer_protection_programs": [
            "delivered",
            "undelivered"
        ],
        "status": "enabled"
    },
    "channels_settings": [],
    "meta_categ_id": null,
    "attributable": false,
    "date_created": "2018-04-25T08:12:56.000Z"
}
```

---

## Atributos específicos de las categorías

Para conocer los atributos específicos y valores posibles de las categorías que debes enviar para publicar un publicación, consulta el recurso /attributes.

Ejemplo:

```JSON
[
  {
    "id": "CONTACT_SCHEDULE",
    "name": "Horario de contacto",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "string",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "PROPERTY_TYPE",
    "name": "Inmueble",
    "tags": {
      "fixed": true,
      "product_pk": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "list",
    "values": [
      {
        "id": "242065",
        "name": "Local"
      }
    ],
    "attribute_group_id": "MAIN",
    "attribute_group_name": "Principales"
  },
  {
    "id": "OPERATION",
    "name": "Operación",
    "tags": {
      "fixed": true,
      "product_pk": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "list",
    "values": [
      {
        "id": "242073",
        "name": "Alquiler"
      }
    ],
    "attribute_group_id": "MAIN",
    "attribute_group_name": "Principales"
  },
  {
    "id": "TOTAL_AREA",
    "name": "Superficie total",
    "tags": {
      "catalog_required": true,
      "required": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number_unit",
    "value_max_length": 255,
    "allowed_units": [
      {
        "id": "m²",
        "name": "m²"
      }
    ],
    "default_unit": "m²",
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "COVERED_AREA",
    "name": "Superficie cubierta",
    "tags": {
      "catalog_required": true,
      "required": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number_unit",
    "value_max_length": 255,
    "allowed_units": [
      {
        "id": "m²",
        "name": "m²"
      }
    ],
    "default_unit": "m²",
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "FULL_BATHROOMS",
    "name": "Baños",
    "tags": {
      "catalog_required": true,
      "required": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "PARKING_LOTS",
    "name": "Cocheras",
    "tags": {
      "catalog_required": true,
      "required": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "WAREHOUSES",
    "name": "Bodegas",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "FLOORS",
    "name": "Pisos",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "PROPERTY_AGE",
    "name": "Antigüedad",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number_unit",
    "value_max_length": 255,
    "allowed_units": [
      {
        "id": "años",
        "name": "años"
      }
    ],
    "default_unit": "años",
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "IPTU_TAX",
    "name": "Valor del IPTU",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "DFLT",
    "attribute_group_name": "Otros"
  },
  {
    "id": "CONDO_VALUE",
    "name": "Valor del condominio",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "DFLT",
    "attribute_group_name": "Otros"
  },
  {
    "id": "MAINTENANCE_FEE",
    "name": "Expensas",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "number",
    "value_max_length": 255,
    "attribute_group_id": "FIND",
    "attribute_group_name": "Ficha técnica"
  },
  {
    "id": "HAS_INTERNET_ACCESS",
    "name": "Acceso a internet",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "COMOYAMEN",
    "attribute_group_name": "Comodidades y amenities"
  },
  {
    "id": "HAS_TAP_WATER",
    "name": "Agua corriente",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      },
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_AIR_CONDITIONING",
    "name": "Aire acondicionado",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "COMOYAMEN",
    "attribute_group_name": "Comodidades y amenities"
  },
  {
    "id": "HAS_HEATING",
    "name": "Calefacción",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "COMOYAMEN",
    "attribute_group_name": "Comodidades y amenities"
  },
  {
    "id": "HAS_NATURAL_GAS",
    "name": "Gas natural",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_ELECTRIC_GENERATOR",
    "name": "Grupo electrógeno",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_ELECTRIC_LIGHT",
    "name": "Luz eléctrica",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_FIRE_SYSTEM",
    "name": "Sistema contra incendio",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_TELEPHONE_LINE",
    "name": "Línea telefónica",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_SECURITY",
    "name": "Seguridad",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "COMOYAMEN",
    "attribute_group_name": "Comodidades y amenities"
  },
  {
    "id": "HAS_KITCHEN",
    "name": "Cocina",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "AMBIENTES",
    "attribute_group_name": "Ambientes"
  },
  {
    "id": "HAS_FITTING_ROOM",
    "name": "Probador",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "HAS_GUEST_PARKING",
    "name": "Estacionamiento para visitantes",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      },
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      }
    ],
    "attribute_group_id": "COMOYAMEN",
    "attribute_group_name": "Comodidades y amenities"
  },
  {
    "id": "WHEELCHAIR_RAMP",
    "name": "Rampa para silla de ruedas",
    "tags": {
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      },
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      }
    ],
    "attribute_group_id": "CARACTERISTICAS",
    "attribute_group_name": "Características adicionales"
  },
  {
    "id": "CMG_SITE",
    "name": "Sitio de origen",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "string",
    "value_max_length": 255,
    "attribute_group_id": "DFLT",
    "attribute_group_name": "Otros"
  },
  {
    "id": "CANONICAL_URL",
    "name": "Url canónica",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "string",
    "value_max_length": 255,
    "attribute_group_id": "DFLT",
    "attribute_group_name": "Otros"
  },
  {
    "id": "HAS_LIFT",
    "name": "Ascensor",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 1,
    "value_type": "boolean",
    "values": [
      {
        "id": "242084",
        "name": "No",
        "metadata": {
          "value": false
        }
      },
      {
        "id": "242085",
        "name": "Sí",
        "metadata": {
          "value": true
        }
      }
    ],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  },
  {
    "id": "ITEM_CONDITION",
    "name": "Condición del ítem",
    "tags": {
      "hidden": true
    },
    "hierarchy": "ITEM",
    "relevance": 2,
    "value_type": "list",
    "values": [
      {
        "id": "2230581",
        "name": "Usado"
      },
      {
        "id": "2230284",
        "name": "Nuevo"
      }
    ],
    "attribute_group_id": "OTHERS",
    "attribute_group_name": "Otros"
  }
]
```

---

## Nombre

Este atributo muestra un nombre corto. Con solo leer el JSON anterior sabes que, por ejemplo, se trata de una categoría de clasificados que no permite incluir opciones de envío, existen 1332 publicaciones publicados en la misma y puedes incluir el precio en ARS o USD.

---

## Atributos obligatorios

Los atributos obligatorios se configuran como **“required”** en el detalle de la categoría. 

En el ejemplo anterior, puedes ver que precio y stock son obligatorios; no se permiten las áreas de cobertura y el seller_contact es opcional. Además, atributos específicos de la categoría, como los atributos “Antigüedad” y “Estado”, que tienen el tag “required”: verdadero, se deben enviar con los valores posibles detallados en el JSON y stock son obligatorios; no se permiten las áreas de cobertura y el seller_contact es opcional. Además, atributos específicos de la categoría, como los atributos “Antigüedad” y “Estado”, que tienen el tag “required”: verdadero, se deben enviar con los valores posibles detallados en el JSON.

---

## Descarga de categorías

El árbol de categorías no cambia con mucha frecuencia. Si prefieres, puedes solicitar el volcado de todo el árbol de categorías para el sitio de un país determinado destinado al procesamiento offline. La API devuelve el árbol de categorías en formato JSON dentro de una respuesta codificada con gzip.

Para obtener las categorías de Brasil, utiliza este URL: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLB/categories/all``

Para obtener las categorías de Argentina, utiliza este URL: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/categories/all``

Este URL contiene 2 encabezados que se pueden utilizar para verificar cuándo se generó el último volcado.

``X-Content-Created ``: contiene la fecha de la última generación.

``X-Content-MD5``: contiene la suma de comprobación MD5 de la última generación.

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/categories/all``

```
HTTP/1.1 200 OK

Server: nginx/1.0.4
Date: Tue, 24 Jul 2012 15:14:58 GMT
Content-Type: application/json;charset=UTF-8
Connection: keep-alive
X-MLAPI-Version: 1.9.5
Content-Encoding: gzip
X-Content-Created: 2012-07-24T14:00:59.716Z
X-Content-MD5: 943541196986770119b4af1e66bda2dc
```

---

## Elige la categoría para tu propiedad

Elegir la categoría correcta para tu inmueble determinará la rapidez con que los compradores la encontrarán y mejorará tus posibilidades de venderla. Por este motivo, te recomendamos utilizar nuestra herramienta de predicción de Categorías antes de publicar un publicación.


## Búsqueda por categoría

La operación de búsqueda devuelve publicaciones que pertenecen a una categoría de publicación de MercadoLibre; si bien pueden haber toneladas de publicaciones en ciertas categorías, no te preocupes: puedes paginar los resultados. Lee sobre paginación de los resultados de búsqueda. Para acceder a todos los publicaciones en una categoría determinada, tienes que hacer lo siguiente:

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?category=MLA5726``

La respuesta de búsqueda tiene gran cantidad de parámetros. Utiliza el método OPCIONES http para obtener una respuesta codificada con JSON que describirá la API, con todos los métodos y conexiones permitidos entre otra parte de la API.

---

## Paginación y dimensionamiento de resultados

Este tutorial te será útil de ahora en adelante porque te ayudará a trabajar con conjuntos específicos de resultados cada vez que realices una llamada a la API. La mayoría de los recursos presentan parámetros url comunes para paginar y dimensionar resultados: **limit** y **offset**.


### Valores por defecto

Los valores por defecto son ``offset=0`` y ``limit=50``.

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?q=ipod nano``

En la sección de paginación de la respuesta JSON, puedes ver la cantidad total de publicaciones que coinciden con la búsqueda y el valor de offset con el limit por defecto aplicado.

```JSON
  "paging": {
    "total": 285,
    "offset": 0,
    "limit": 50,
  }
```

## Limit

Para reducir el tamaño de página, puedes cambiar el parámetro de limit. Por ejemplo, si estás interesado en recuperar solo los primeros 3 publicaciones:

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&limit=3``

Esta acción recupera un dato JSON con un conjunto de 3 publicaciones, como se ilustra a continuación:

```JSON
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 284,
    "offset": 0,
    "limit": 3,
  },
  "results": [
    {...},
    {...},
    {...},
  ],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
```

## Offset

Al utilizar el atributo offset, puedes mover el límite inferior del bloque de resultados. Por ejemplo, si te interesa recuperar los 50 publicaciones que siguen la respuesta por defecto:

Ejemplo: ``
curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&offset=50``

Respuesta:
```JSON
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 285,
    "offset": 50,
    "limit": 50,
  },
  "results": [...],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
```

Esta respuesta recupera 50 publicaciones a partir de los primeros cincuenta.


## Definir un rango de resultados

Es posible combinar ambos parámetros. Puedes recuperar publicaciones desde el tercero al sexto en el resultado de búsqueda original:

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?q=ipod nano&offset=3&limit=3``

Esta acción recupera un dato JSON con un conjunto de 5 publicaciones, como se ilustra a continuación:

```JSON
{
  "site_id": "MLA",
  "query": "ipod nano",
  "paging": {
    "total": 285,
    "offset": 3,
    "limit": 3,
  },
  "results": [
    {...},
    {...},
    {...},
  ],
  "sort": {...},
  "available_sorts": [...],
  "filters": [...],
  "available_filters": [...],
}
```

`https://api.mercadolibre.com/sites/MLA/search/`


---
---

# :star: Localiza inmuebles

Para publicar un inmueble, vehículo o servicio, deberás determinar de forma obligatoria la ciudad aunque también le podrás añadir de forma opcional estado y también barrio. Para hacerlo, lo mejor es familiarizarte con el recurso classified_locations.

Al publicar un artículo, solo debes enviar el ID de ubicación de la hoja. Es decir, enviar solo el ID del Barrio es suficiente para que nuestra API complete con los ID de Estado y Ciudad correspondientes. Si la ciudad elegida no tiene ningún barrio, entonces solo deberás enviar el ID de la Ciudad. Es obligatorio enviar el ID del barrio o el ID de la Ciudad. Si envías solo el ID del Estado, nuestra API no te permitirá publicar(de todos modos, nunca debes enviar el ID del Estado porque se completará automáticamente según el ID del Barrio o el ID de la Ciudad ingresados). Este recurso te permitirá explorar las posibles ubicaciones por país, estado, ciudad y barrio.


## Explorar todos los países

Ejemplo:
``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/countries``

Respuesta:
```JSON
[
   {
      "id":"AR",
      "name":"Argentina",
      "locale":"es_AR",
      "currency_id":"ARS"
   },
   {
      "id":"BR",
      "name":"Brasil",
      "locale":"pt_BR",
      "currency_id":"BRL"
   },
   {
      "id":"CO",
      "name":"Colombia",
      "locale":"es_CO",
      "currency_id":"COP"
   },
   {
      "id":"CR",
      "name":"Costa Rica",
      "locale":"es_CR",
      "currency_id":"CRC"
   },
   {
      "id":"CL",
      "name":"Chile",
      "locale":"es_CL",
      "currency_id":"CLP"
   },
   {
      "id":"EC",
      "name":"Ecuador",
      "locale":"es_EC",
      "currency_id":"USD"
   },
   {
      "id":"MX",
      "name":"Mexico",
      "locale":"es_MX",
      "currency_id":"MXN"
   },
   {
      "id":"PA",
      "name":"Panamá",
      "locale":"es_PA",
      "currency_id":"USD"
   },
   {
      "id":"PE",
      "name":"Peru",
      "locale":"es_PE",
      "currency_id":"PEN"
   },
   {
      "id":"DO",
      "name":"República Dominicana",
      "locale":"es_DO",
      "currency_id":"DOP"
   },
   {
      "id":"VE",
      "name":"Venezuela",
      "locale":"es_VE",
      "currency_id":"VEF"
   }
]
```

## Explorar información del país

Llamada:
``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/countries/$COUNTRY_ID``

Ejemplo: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/countries/AR``

Respuesta:

```JSON
{
   "id":"AR",
   "name":"Argentina",
   "locale":"es_AR",
   "currency_id":"ARS",
   "decimal_separator":",",
   "thousands_separator":".",
   "time_zone":"GMT-03:00",
   "geo_information":{
      "location":{
         "latitude":-38.416097,
         "longitude":-63.616672
      }
   },
   "states":[
      {
         "id":"TUxBUEJSQWwyMzA1",
         "name":"Brasil"
      },
      {
         "id":"TUxBUENPU2ExMmFkMw",
         "name":"Bs.As. Costa Atlántica"
      },
      {
         "id":"TUxBUEdSQWU4ZDkz",
         "name":"Bs.As. G.B.A. Norte"
      },
      {
         "id":"TUxBUEdSQWVmNTVm",
         "name":"Bs.As. G.B.A. Oeste"
      },
      {
         "id":"TUxBUEdSQXJlMDNm",
         "name":"Bs.As. G.B.A. Sur"
      },
      {
         "id":"TUxBUFpPTmFpbnRl",
         "name":"Buenos Aires Interior"
      },
      {
         "id":"TUxBUENBUGw3M2E1",
         "name":"Capital Federal"
      },
      {
         "id":"TUxBUENBVGFiY2Fm",
         "name":"Catamarca"
      },
      {
         "id":"TUxBUENIQW8xMTNhOA",
         "name":"Chaco"
      },
      {
         "id":"TUxBUENIVXQxNDM1MQ",
         "name":"Chubut"
      },
      {
         "id":"TUxBUENPUnM5MjI0",
         "name":"Corrientes"
      },
      {
         "id":"TUxBUENPUmFkZGIw",
         "name":"Córdoba"
      },
      {
         "id":"TUxBUEVOVHMzNTdm",
         "name":"Entre Ríos"
      },
      {
         "id":"TUxBUEZPUmE1OTk5",
         "name":"Formosa"
      },
      {
         "id":"TUxBUEpVSnk3YmUz",
         "name":"Jujuy"
      },
      {
         "id":"TUxBUExBWmE1OWMy",
         "name":"La Pampa"
      },
      {
         "id":"TUxBUExBWmEyNzY0",
         "name":"La Rioja"
      },
      {
         "id":"TUxBUE1FTmE5OWQ4",
         "name":"Mendoza"
      },
      {
         "id":"TUxBUE1JU3MzNjIx",
         "name":"Misiones"
      },
      {
         "id":"TUxBUE5FVW4xMzMzNQ",
         "name":"Neuquén"
      },
      {
         "id":"TUxBUFJFUDQyMjQ4Ng",
         "name":"República Dominicana"
      },
      {
         "id":"TUxBUFLNT29iZmZm",
         "name":"Río Negro"
      },
      {
         "id":"TUxBUFNBTGFjMTJi",
         "name":"Salta"
      },
      {
         "id":"TUxBUFNBTm5lYjU4",
         "name":"San Juan"
      },
      {
         "id":"TUxBUFNBTnM0ZTcz",
         "name":"San Luis"
      },
      {
         "id":"TUxBUFNBTno3ZmY5",
         "name":"Santa Cruz"
      },
      {
         "id":"TUxBUFNBTmU5Nzk2",
         "name":"Santa Fe"
      },
      {
         "id":"TUxBUFNBTm9lOTlk",
         "name":"Santiago del Estero"
      },
      {
         "id":"TUxBUFRJRVoxM2M5YQ",
         "name":"Tierra del Fuego"
      },
      {
         "id":"TUxBUFRVQ244NmM3",
         "name":"Tucumán"
      },
      {
         "id":"TUxBUFVTQWl1cXdlMg",
         "name":"USA"
      },
      {
         "id":"TUxBUFVSVXllZDVl",
         "name":"Uruguay"
      }
   ]
}
```

---

## Explorar información de estados

- Llamada: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/states/$STATE_ID``

- Ejemplo: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/states/TUxBUENBUGw3M2E1``

Respuesta:

```JSON
{
   "id":"TUxBUENBUGw3M2E1",
   "name":"Capital Federal",
   "country":{
      "id":"AR",
      "name":"Argentina"
   },
   "geo_information":{
      "location":{
         "latitude":-34.6143048,
         "longitude":-58.4401655
      }
   },
   "cities":[
      {
         "id":"TUxBQ0NBUGZlZG1sYQ",
         "name":"Capital Federal"
      }
   ]
}
```

---

## Explorar información de la ciudad

- Llamada: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/cities/$CITY_ID``


- Ejemplo: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/cities/TUxBQ0NBUGZlZG1sYQ``

Respuesta:

```JSON
{
   "id":"TUxBQ0NBUGZlZG1sYQ",
   "name":"Capital Federal",
   "state":{
      "id":"TUxBUENBUGw3M2E1",
      "name":"Capital Federal"
   },
   "country":{
      "id":"AR",
      "name":"Argentina"
   },
   "geo_information":{
      "location":{
         "latitude":-34.6084175,
         "longitude":-58.3731613
      }
   },
   "neighborhoods":[
      {
         "id":"TUxBQkFHUjk3NjJa",
         "name":"Agronomía"
      },
      {
         "id":"TUxBQkFMTTMwNTBa",
         "name":"Almagro"
      },
      {
         "id":"TUxBQkJBTDMxMDZa",
         "name":"Balvanera"
      },
      {
         "id":"TUxBQkJBUjM0MDha",
         "name":"Barracas"
      },
      {
         "id":"TUxBQkJBUjQwMDQ3MA",
         "name":"Barrio Norte"
      },
      {
         "id":"TUxBQkJFTDcyNTJa",
         "name":"Belgrano"
      },
      {
         "id":"TUxBQkJFTDkwNjNa",
         "name":"Belgrano Barrancas"
      },
      {
         "id":"TUxBQkJFTDk4MDRa",
         "name":"Belgrano C"
      },
      {
         "id":"TUxBQkJFTDU0ODda",
         "name":"Belgrano Chico"
      },
      {
         "id":"TUxBQkJFTDU5NzNa",
         "name":"Belgrano R"
      },
      {
         "id":"TUxBQkJPRTQ0OTRa",
         "name":"Boedo"
      },
      {
         "id":"TUxBQkJPVDQ2NTFa",
         "name":"Botánico"
      },
      {
         "id":"TUxBQkNBQjM4MDda",
         "name":"Caballito"
      },
      {
         "id":"TUxBQkNIQTM5NjBa",
         "name":"Chacarita"
      },
      {
         "id":"TUxBQkNPRzY5MTZa",
         "name":"Coghlan"
      },
      {
         "id":"TUxBQkNPTDI3NDNa",
         "name":"Colegiales"
      },
      {
         "id":"TUxBQkNPTjgyODY1Mg",
         "name":"Congreso"
      },
      {
         "id":"TUxBQkNPTjExMDBa",
         "name":"Constitución"
      },
      {
         "id":"TUxBQkZMTzMwNzRa",
         "name":"Flores"
      },
      {
         "id":"TUxBQkZMTzg5MjFa",
         "name":"Floresta"
      },
      {
         "id":"TUxBQkxBQjk1ODJa",
         "name":"La Boca"
      },
      {
         "id":"TUxBQkxBUzIxNTJa",
         "name":"Las Cañitas"
      },
      {
         "id":"TUxBQkxJTjEzNTha",
         "name":"Liniers"
      },
      {
         "id":"TUxBQk1BVDMwMDJa",
         "name":"Mataderos"
      },
      {
         "id":"TUxBQk1PTjUxOTJa",
         "name":"Monserrat"
      },
      {
         "id":"TUxBQk1PTjE2OTBa",
         "name":"Monte Castro"
      },
      {
         "id":"TUxBQk5VRTc3MTZa",
         "name":"Nueva Pompeya"
      },
      {
         "id":"TUxBQk7a0TcwOTRa",
         "name":"Núñez"
      },
      {
         "id":"TUxBQk9OQzM1Mjk5Ng",
         "name":"Once"
      },
      {
         "id":"TUxBQlBBTDI1MTVa",
         "name":"Palermo"
      },
      {
         "id":"TUxBQlBBTDg3OTha",
         "name":"Palermo Chico"
      },
      {
         "id":"TUxBQlBBTDg1NjJa",
         "name":"Palermo Hollywood"
      },
      {
         "id":"TUxBQlBBTDgwMjla",
         "name":"Palermo Nuevo"
      },
      {
         "id":"TUxBQlBBTDg3MDda",
         "name":"Palermo Soho"
      },
      {
         "id":"TUxBQlBBTDE5ODla",
         "name":"Palermo Viejo"
      },
      {
         "id":"TUxBQlBBUjQ1NDda",
         "name":"Parque Avellaneda"
      },
      {
         "id":"TUxBQlBBUjUyOTZa",
         "name":"Parque Chacabuco"
      },
      {
         "id":"TUxBQlBBUjYwMzZa",
         "name":"Parque Patricios"
      },
      {
         "id":"TUxBQlBBVDI0ODFa",
         "name":"Paternal"
      },
      {
         "id":"TUxBQlBVRTQ5NjBa",
         "name":"Puerto Madero"
      },
      {
         "id":"TUxBQlJFQzkyMTVa",
         "name":"Recoleta"
      },
      {
         "id":"TUxBQlJFVDgyMDVa",
         "name":"Retiro"
      },
      {
         "id":"TUxBQlNBQTM3Mzda",
         "name":"Saavedra"
      },
      {
         "id":"TUxBQlNBTjkwNTZa",
         "name":"San Cristóbal"
      },
      {
         "id":"TUxBQlNBTjgzMjRa",
         "name":"San Nicolás"
      },
      {
         "id":"TUxBQlNBTjgxMzNa",
         "name":"San Telmo"
      },
      {
         "id":"TUxBQlNBTjEyMjNa",
         "name":"Santa Rita"
      },
      {
         "id":"TUxBQlZFTDIwNDha",
         "name":"Velez Sarsfield"
      },
      {
         "id":"TUxBQlZFUjY3MDFa",
         "name":"Versailles"
      },
      {
         "id":"TUxBQlZJTDQyMjBa",
         "name":"Villa Crespo"
      },
      {
         "id":"TUxBQlZJTDYzNzZa",
         "name":"Villa Devoto"
      },
      {
         "id":"TUxBQlZJTDI1ODla",
         "name":"Villa Gral. Mitre"
      },
      {
         "id":"TUxBQlZJTDQ4MzBa",
         "name":"Villa Lugano"
      },
      {
         "id":"TUxBQlZJTDI3MDJa",
         "name":"Villa Luro"
      },
      {
         "id":"TUxBQlZJTDQyMjFa",
         "name":"Villa Ortúzar"
      },
      {
         "id":"TUxBQlZJTDE2MDBa",
         "name":"Villa Pueyrredón"
      },
      {
         "id":"TUxBQlZJTDM3Mzda",
         "name":"Villa Real"
      },
      {
         "id":"TUxBQlZJTDU5MTFa",
         "name":"Villa Riachuelo"
      },
      {
         "id":"TUxBQlZJTDM5MjZa",
         "name":"Villa Soldati"
      },
      {
         "id":"TUxBQlZJTDcwOTla",
         "name":"Villa Urquiza"
      },
      {
         "id":"TUxBQlZJTDc4MDda",
         "name":"Villa del Parque"
      }
   ]
}
```

---

## Explorar información de barrios

- Llamada: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/neighborhoods/$NEIGHBORHOOD_ID``

- Ejemplo: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/classified_locations/neighborhoods/TUxBQkNBQjM4MDda``

Respuesta:

```JSON
{
   "id":"TUxBQkNBQjM4MDda",
   "name":"Caballito",
   "city":{
      "id":"TUxBQ0NBUGZlZG1sYQ",
      "name":"Capital Federal"
   },
   "state":{
      "id":"TUxBUENBUGw3M2E1",
      "name":"Capital Federal"
   },
   "country":{
      "id":"AR",
      "name":"Argentina"
   },
   "geo_information":{
      "location":{
         "latitude":-34.6166667,
         "longitude":-58.45
      }
   },
   "subneighborhoods":[

   ]
}
```

---

## Buscar un inmueble por ubicación

Una vez seleccionada la ubicación para tu inmueble, este recurso te permitirá buscar artículos por su ubicación entre un rango de latitud y longitud especificado.

- Llamada: ``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?item_location=lat:$LATITUDE1_LATITUDE2,lon:$LONGITUDE1_LONGITUDE2&category=$CATEGORY_ID``

- Ejemplo: Incluyo la categoría inmuebles en MLA, un rango de ubicación dentro de Buenos Aires, AR y un límite de 2 artículos en los resultados.

``curl -X GET -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/sites/MLA/search?item_location=lat:-37.987148_-30.987148,lon:-57.5483864_-50.5483864&category=MLA1459&limit=2``

Respuesta:


```JSON
{
   "site_id":"MLA",
   "paging":{
      "total":6246,
      "offset":0,
      "limit":2
   },
   "results":[
      {
         "id":"MLA532174177",
         "site_id":"MLA",
         "title":"Casa En Valeria Del Mar (gustavo)",
         "subtitle":null,
         "seller":{
            "id":156627013,
            "power_seller_status":null,
            "car_dealer":false,
            "real_estate_agency":false
         },
         "price":750,
         "currency_id":"ARS",
         "available_quantity":1,
         "sold_quantity":0,
         "buying_mode":"classified",
         "listing_type_id":"gold_premium",
         "stop_time":"2015-11-11T16:16:52.000Z",
         "condition":"new",
         "permalink":"http://casa.mercadolibre.com.ar/MLA-532174177-casa-en-valeria-del-mar-gustavo-_JM",
         "thumbnail":"http://mla-s2-p.mlstatic.com/19874-MLA20179087101_102014-I.jpg",
         "accepts_mercadopago":false,
         "installments":null,
         "address":{
            "state_id":"TUxBUENPU2ExMmFkMw",
            "state_name":"Bs.as. Costa Atlántica",
            "city_id":"TUxBQ1ZBTDM4MGFj",
            "city_name":"Valeria del Mar",
            "area_code":"02267",
            "phone1":"15538544"
         },
         "shipping":{
            "free_shipping":false,
            "mode":"not_specified"
         },
         "seller_address":{
            "id":139563091,
            "comment":"",
            "address_line":"urthubey 1181",
            "zip_code":"7167",
            "country":{
               "id":"AR",
               "name":"Argentina"
            },
            "state":{
               "id":"AR-B",
               "name":"Buenos Aires"
            },
            "city":{
               "id":"TUxBQ1ZBTDM4MGFj",
               "name":"Valeria del Mar"
            },
            "latitude":"",
            "longitude":""
         },
         "seller_contact":{
            "contact":"",
            "other_info":"",
            "area_code":"02267",
            "phone":"15538544",
            "area_code2":"",
            "phone2":"",
            "email":"",
            "webpage":""
         },
         "location":{
            "address_line":"urthubey 1100",
            "zip_code":"",
            "subneighborhood":null,
            "neighborhood":{
               "id":"",
               "name":""
            },
            "city":{
               "id":"TUxBQ1ZBTDM4MGFj",
               "name":"Valeria del Mar"
            },
            "state":{
               "id":"TUxBUENPU2ExMmFkMw",
               "name":"Bs.as. Costa Atlántica"
            },
            "country":{
               "id":"AR",
               "name":"Argentina"
            },
            "latitude":-37.137337,
            "longitude":-56.89233
         },
         "attributes":[
            {
               "attribute_group_id":"FIND",
               "id":"MLA1459-INMUEBLE",
               "name":"Inmueble",
               "value_name":"Casa",
               "value_id":"MLA1459-INMUEBLE-CASA",
               "attribute_group_name":"Ficha técnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1459-OPERACION",
               "name":"Operación",
               "value_name":"Alquiler Temporario",
               "value_id":"MLA1459-OPERACION-ALQUILER_DE_TEMPORADA",
               "attribute_group_name":"Ficha técnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1466-AMBQTY",
               "name":"Ambientes",
               "value_name":"4",
               "value_id":"MLA1466-AMBQTY-4",
               "attribute_group_name":"Ficha tecnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1466-MTRS",
               "name":"Superficie cubierta (m²)",
               "value_name":"90",
               "value_id":"",
               "attribute_group_name":"Ficha técnica"
            }
         ],
         "original_price":null,
         "category_id":"MLA50278"
      },
      {
         "id":"MLA532037889",
         "site_id":"MLA",
         "title":"Alquilo Duplex 3 Amb Barrio San Rafael - Mar De Ajo",
         "subtitle":null,
         "seller":{
            "id":62970704,
            "power_seller_status":null,
            "car_dealer":false,
            "real_estate_agency":false
         },
         "price":400,
         "currency_id":"ARS",
         "available_quantity":1,
         "sold_quantity":0,
         "buying_mode":"classified",
         "listing_type_id":"gold_premium",
         "stop_time":"2015-11-11T15:49:46.000Z",
         "condition":"used",
         "permalink":"http://casa.mercadolibre.com.ar/MLA-532037889-alquilo-duplex-3-amb-barrio-san-rafael-mar-de-ajo-_JM",
         "thumbnail":"http://mla-s2-p.mlstatic.com/20590-MLA20193199450_112014-I.jpg",
         "accepts_mercadopago":false,
         "installments":null,
         "address":{
            "state_id":"TUxBUENPU2ExMmFkMw",
            "state_name":"Bs.as. Costa Atlántica",
            "city_id":"TUxBQ01BUjNmZDhl",
            "city_name":"Mar de Ajo",
            "area_code":"011",
            "phone1":"15-5919-9616"
         },
         "shipping":{
            "free_shipping":false,
            "mode":"not_specified"
         },
         "seller_address":{
            "id":152837111,
            "comment":"Duplex 4",
            "address_line":"Daniel Rial 200",
            "zip_code":"7109",
            "country":{
               "id":"AR",
               "name":"Argentina"
            },
            "state":{
               "id":"AR-B",
               "name":"Buenos Aires"
            },
            "city":{
               "id":"TUxBQ01BUjNmZDhl",
               "name":"Mar de Ajo"
            },
            "latitude":-36.715473,
            "longitude":-56.676258
         },
         "seller_contact":{
            "contact":"",
            "other_info":"",
            "area_code":"011",
            "phone":"15-5919-9616",
            "area_code2":"",
            "phone2":"",
            "email":"",
            "webpage":""
         },
         "location":{
            "address_line":"Daniel Rial 200",
            "zip_code":"",
            "subneighborhood":null,
            "neighborhood":{
               "id":"",
               "name":""
            },
            "city":{
               "id":"TUxBQ01BUjNmZDhl",
               "name":"Mar de Ajo"
            },
            "state":{
               "id":"TUxBUENPU2ExMmFkMw",
               "name":"Bs.as. Costa Atlántica"
            },
            "country":{
               "id":"AR",
               "name":"Argentina"
            },
            "latitude":-36.715473,
            "longitude":-56.676258
         },
         "attributes":[
            {
               "attribute_group_id":"FIND",
               "id":"MLA1459-INMUEBLE",
               "name":"Inmueble",
               "value_name":"Casa",
               "value_id":"MLA1459-INMUEBLE-CASA",
               "attribute_group_name":"Ficha técnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1459-OPERACION",
               "name":"Operación",
               "value_name":"Alquiler Temporario",
               "value_id":"MLA1459-OPERACION-ALQUILER_DE_TEMPORADA",
               "attribute_group_name":"Ficha técnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1466-AMBQTY",
               "name":"Ambientes",
               "value_name":"3",
               "value_id":"MLA1466-AMBQTY-3",
               "attribute_group_name":"Ficha tecnica"
            },
            {
               "attribute_group_id":"FIND",
               "id":"MLA1466-MTRS",
               "name":"Superficie cubierta (m²)",
               "value_name":"95",
               "value_id":"",
               "attribute_group_name":"Ficha técnica"
            }
         ],
         "original_price":null,
         "category_id":"MLA50278"
      }
   ],
   "secondary_results":[

   ],
   "related_results":[

   ],
   "sort":{
      "id":"relevance",
      "name":"More relevant"
   },
   "available_sorts":[
      {
         "id":"price_asc",
         "name":"Lower price"
      },
      {
         "id":"price_desc",
         "name":"Higher price"
      }
   ],
   "filters":[
      {
         "id":"category",
         "name":"Categories",
         "type":"text",
         "values":[
            {
               "id":"MLA1459",
               "name":"Inmuebles",
               "path_from_root":[
                  {
                     "id":"MLA1459",
                     "name":"Inmuebles"
                  }
               ]
            }
         ]
      }
   ],
   "available_filters":[
      {
         "id":"9991459-AMLA_1459_1",
         "name":"Inmueble",
         "type":"text",
         "values":[
            {
               "id":"9991459-AMLA_1459_1-MMLA12617",
               "name":"Departamentos",
               "results":2624
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12616",
               "name":"Casas",
               "results":2597
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12619",
               "name":"Terrenos y Lotes",
               "results":263
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12777",
               "name":"Tiempo Compartido",
               "results":184
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA32199",
               "name":"PH",
               "results":82
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA23362",
               "name":"Locales",
               "results":45
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12780",
               "name":"Fondo de Comercio",
               "results":17
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12778",
               "name":"Cocheras",
               "results":10
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12781",
               "name":"Quintas",
               "results":8
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12782",
               "name":"Oficinas y Consultorios",
               "results":4
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12615",
               "name":"Campos",
               "results":3
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA28331",
               "name":"Depósitos y Galpones",
               "results":2
            },
            {
               "id":"9991459-AMLA_1459_1-MMLA12618",
               "name":"Otros Inmuebles",
               "results":407
            }
         ]
      },
      {
         "id":"9991459-AMLA_1459_2",
         "name":"Operación",
         "type":"text",
         "values":[
            {
               "id":"9991459-AMLA_1459_2-MMLA14069",
               "name":"Alquiler Temporario",
               "results":4794
            },
            {
               "id":"9991459-AMLA_1459_2-MMLA12623",
               "name":"Venta",
               "results":1199
            },
            {
               "id":"9991459-AMLA_1459_2-MMLA12620",
               "name":"Alquiler",
               "results":253
            }
         ]
      },
      {
         "id":"state",
         "name":"Location",
         "type":"text",
         "values":[
            {
               "id":"TUxBUENPU2ExMmFkMw",
               "name":"Bs.As. Costa Atlántica",
               "results":5666
            },
            {
               "id":"TUxBUFVSVXllZDVl",
               "name":"Uruguay",
               "results":566
            },
            {
               "id":"TUxBUFpPTmFpbnRl",
               "name":"Buenos Aires Interior",
               "results":14
            }
         ]
      },
      {
         "id":"price",
         "name":"Price range",
         "type":"range",
         "values":[
            {
               "id":"*-700.0",
               "name":"Up to $700",
               "results":2043
            },
            {
               "id":"700.0-8000.0",
               "name":"$700 to $8.000",
               "results":2013
            },
            {
               "id":"8000.0-*",
               "name":"More than $8.000",
               "results":2190
            }
         ]
      },
      {
         "id":"159-MTRSTOTAL",
         "name":"Metros totales",
         "type":"range",
         "values":[
            {
               "id":"*-35.0",
               "name":"Up to 35 m²",
               "results":1078
            },
            {
               "id":"35.0-65.0",
               "name":"35 to 65m²",
               "results":1397
            },
            {
               "id":"65.0-100.0",
               "name":"65 to 100m²",
               "results":1065
            },
            {
               "id":"100.0-300.0",
               "name":"100 to 300m²",
               "results":1285
            },
            {
               "id":"300.0-*",
               "name":"More than 300m²",
               "results":1421
            }
         ]
      },
      {
         "id":"159-AMBQTY",
         "name":"Cant. de ambientes",
         "type":"text",
         "values":[
            {
               "id":"159-AMBQTY-1",
               "name":"1 ambiente",
               "results":381
            },
            {
               "id":"159-AMBQTY-2",
               "name":"2 ambientes",
               "results":1425
            },
            {
               "id":"159-AMBQTY-3",
               "name":"3 ambientes",
               "results":1820
            },
            {
               "id":"159-AMBQTY-4",
               "name":"4 ambientes",
               "results":859
            }
         ]
      },
      {
         "id":"159-GARAGE",
         "name":"Cochera/s",
         "type":"text",
         "values":[
            {
               "id":"159-GARAGE-1",
               "name":"1 cochera",
               "results":2250
            },
            {
               "id":"159-GARAGE-2",
               "name":"2 cocheras",
               "results":351
            },
            {
               "id":"159-GARAGE-3",
               "name":"3 cocheras",
               "results":74
            },
            {
               "id":"159-GARAGE-4_O_MAS",
               "name":"4 o más cocheras",
               "results":150
            }
         ]
      },
      {
         "id":"159-AIRCEN",
         "name":"Aire acondicionado central",
         "type":"boolean",
         "values":[
            {
               "id":"159-AIRCEN-YES",
               "name":"Con aire acondicionado central",
               "results":517
            }
         ]
      },
      {
         "id":"159-ALAR",
         "name":"Alarma",
         "type":"boolean",
         "values":[
            {
               "id":"159-ALAR-YES",
               "name":"Con Alarma",
               "results":774
            }
         ]
      },
      {
         "id":"real_estate_agency",
         "name":"Real estate agency filter",
         "type":"boolean",
         "values":[
            {
               "id":"yes",
               "name":"Real estate agency",
               "results":910
            }
         ]
      },
      {
         "id":"condition",
         "name":"Condition filter",
         "type":"text",
         "values":[
            {
               "id":"new",
               "name":"New",
               "results":795
            },
            {
               "id":"used",
               "name":"Used",
               "results":5124
            }
         ]
      },
      {
         "id":"power_seller",
         "name":"Seller quality filter",
         "type":"boolean",
         "values":[
            {
               "id":"yes",
               "name":"Best sellers",
               "results":23
            }
         ]
      },
      {
         "id":"buying_mode",
         "name":"Buying mode filter",
         "type":"text",
         "values":[
            {
               "id":"buy_it_now",
               "name":"Buy it now",
               "results":6246
            }
         ]
      },
      {
         "id":"since",
         "name":"Auction start date filter",
         "type":"text",
         "values":[
            {
               "id":"today",
               "name":"Starting today",
               "results":117
            }
         ]
      },
      {
         "id":"until",
         "name":"Auction stop filter",
         "type":"text",
         "values":[
            {
               "id":"today",
               "name":"Ending today",
               "results":22
            }
         ]
      },
      {
         "id":"has_video",
         "name":"Video publications filter",
         "type":"boolean",
         "values":[
            {
               "id":"yes",
               "name":"Publications with video",
               "results":200
            }
         ]
      },
      {
         "id":"has_pictures",
         "name":"Items with images filter",
         "type":"boolean",
         "values":[
            {
               "id":"yes",
               "name":"With pictures",
               "results":6177
            }
         ]
      }
   ]
}
```

---

## Ofuscar dirección exacta del inmueble

Al publicar un anuncio éste muestra su localización con el número exacto del inmueble. Por motivos de seguridad y privacidad, la integración es quien define si la localización exacta debe mostrarse o no.

- Ejemplo: ``curl -X PUT -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/items/ITEM_ID/address_line_by_reference``

- Ejemplo: Si necesitas mostrar la dirección exacta, puedes realizar un delete del tag.

``curl -X DELETE -H 'Authorization: Bearer $ACCESS_TOKEN' https://api.mercadolibre.com/items/ITEM_ID/address_line_by_reference``

Respuesta:204

---