//masks

$("#inputPreco").mask('000.000.000.000.000,00', {reverse: true});

function convertToNumber(priceFormat){
    return priceFormat.replace(/\./g,'').replace(',', '.');
}

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

//Save button

function save(){
    
    var prod = {

        id: products.length + 1,
        name: document.getElementById("inputNome").value,
        description: document.getElementById("inputDesc").value,
        price: convertToNumber(document.getElementById("inputPreco").value),
        category: document.getElementById("selectCategoria").value,
        promotion: document.getElementById("checkBoxPromocao").checked,
        new: document.getElementById("checkBoxLancamento").checked,

    };

    addNewRow(prod);
    products.push(prod);

    document.getElementById("formProduct").reset();

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
    var cell = newRow.insertCell();
    cell.className='d-none d-md-table-cell'
    cell.appendChild(productDesc);

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

    var options = "";

    if(prod.promotion){

        options = "<span class='badge bg-success me-1 d-none d-md-table-cell'>P</span>";

    }

    if(prod.new){

        // += because I'm adding a new badge
        options += "<span class='badge bg-primary d-none d-md-table-cell'>L</span>";

    }

    cell = newRow.insertCell();
    cell.className = "d-none d-md-table-cell";
    newRow.insertCell().innerHTML = options;

}



