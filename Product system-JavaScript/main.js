
//awl 7aga bs7b el value mn html
var productNameInput=document.getElementById("productNameInput");
var productPriceInput=document.getElementById("productPriceInput");
var productCategoryInput=document.getElementById("productCategoryInput");
var productDescInput=document.getElementById("productDescInput");

// a3ml empty array a5zn fyha
var productContainer;

if(localStorage.getItem('product') !=null){
    productContainer=JSON.parse(localStorage.getItem('product'))
    displayproduct(productContainer);
}
else {
    productContainer=[];
}
var currentEditIndex = null;
//3shan a push  fy el empty array 

          //*** push***/

function addProduct() {
   var product={
      name:productNameInput.value,
      price:productPriceInput.value,
      category:productCategoryInput.value,
      desc:productDescInput.value,
   };
    if (currentEditIndex === null) {
       
        productContainer.push(product);
    } else {
        productContainer[currentEditIndex] = product;
        currentEditIndex = null; 
    }
   // awl 7aga a push
   // productContainer.push(product);
   localStorage.setItem('product',JSON.stringify(productContainer))
   // clear 
   clear();
   // 3mlt call 34an el display y on
   displayproduct(productContainer); 
}
//34an da klw y4t3'l arw7 fy el html 3nd el button a3ml (onclick="addProduct();")



           //*** el clear***/

  function clear() {
   productNameInput.value="";
   productPriceInput.value="";
   productCategoryInput.value="";
   productDescInput.value="";  
  }

          //****display***/

          //tany 7aga lma a3wz a3ml (display)
function displayproduct(list) {
             //a3ml 7aga a3rf a7tha fy el html
   display=``;
   for (var i = 0; i < list.length; i++) {
       //   b call el var b ${}
       // ${variable el array[i].object}
       display +=`
       <tr>
            <td>${i+1}</td>
            <td>${list[i].name}</td>
            <td>${list[i].price}</td>
            <td>${list[i].category}</td>
            <td>${list[i].desc}</td>
            <td><button onclick="editProduct(${i})" class="btn bg-danger">Update</button></td>
            <td><button onclick="deleteProduct(${i})" class="btn bg-info">delete</button></td>
      </tr>
      `}
      document.getElementById('tableBody').innerHTML=display;
    }
      // b3d kda 34an t display a call el function fw2


function editProduct(index) {
    productNameInput.value = productContainer[index].name;
    productPriceInput.value = productContainer[index].price;
    productCategoryInput.value = productContainer[index].category;
    productDescInput.value = productContainer[index].desc; 
    currentEditIndex = index; 
}

function searchProduct(searchterm) {
    var searchResult = [];
    for (var i = 0; i < productContainer.length; i++) {
        if (productContainer[i].name.toLowerCase().includes(searchterm.toLowerCase())) {
            searchResult.push(productContainer[i]);
        }
    }
    displayproduct(searchResult);
}
   

function deleteProduct(index) {
    productContainer.splice(index, 1);
    localStorage.setItem('product', JSON.stringify(productContainer));
    if (currentEditIndex === index) {
        currentEditIndex = null;
        clear();
    }
    displayproduct(productContainer); 
}
