//masks

$("#inputPreco").mask('000.000.000.000.000,00', {reverse: true});

var products = [
  {
    id: 1,
    name: "Computador M1-TX",
    description: "Intel i7, RAM 16gb, SSD 256gb, HD 1tb",
    price: 4900,
    category: 1,
    promotion: true,
    new: true,
  },

  {
    id: 2,
    name: "Computador M2-TX",
    description: "Intel i7, RAM 32gb, SSD 512gb, HD 1tb",
    price: 5900,
    category: 2,
    promotion: false,
    new: true,
  },

  {
    id: 3,
    name: "Computador M1-T",
    description: "Intel i5, RAM 8gb, HD 1tb",
    price: 2900,
    category: 3,
    promotion: false,
    new: false,
  },
];

var categories = [

    {
        id: 1,
        name: "Produção própria",
    },

    {
        id: 2,
        name: "Nacional",
    },

    {
        id: 3,
        name: "Importado",
    },

]


//onLoad

loadProducts();

//Load all products

function loadProducts(){

    for(let prod of products){

        addNewRow(prod);

    }

}

//Add new row

function addNewRow(prod){

    var table = document.getElementById("productsTable");

    var newRow = table.insertRow();

    //Insert product id

    var productId = document.createTextNode(prod.id);
    newRow.insertCell().appendChild(productId);

    //Insert product name

    var productName = document.createTextNode(prod.name);
    newRow.insertCell().appendChild(productName);

    //Insert product description

    var productDesc = document.createTextNode(prod.description);
    newRow.insertCell().appendChild(productDesc);

    //Insert product price

    var formatter = new Intl.NumberFormat('pt-BR', {
        style: 'currency',
        currency: 'BRL',
    });

    var productPrice = document.createTextNode(formatter.format(prod.price));
    newRow.insertCell().appendChild(productPrice);

    //Insert product category

    var productCat = document.createTextNode(categories[prod.category-1].name);
    newRow.insertCell().appendChild(productCat);

    //badges

    var options = '';

    if(prod.promotion){

        options = "<span class='badge bg-success me-1'>P</span>";

    }

    if(prod.new){

        // += because I'm adding a new badge
        options += "<span class='badge bg-primary'>L</span>";

    }

    newRow.insertCell().innerHTML = options;

}