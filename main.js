
var productContainer ;
if(localStorage.getItem('ourProduct') !=null)
{
    productContainer=JSON.parse(localStorage.getItem('ourProduct'));
    displayData();
}
else{
    productContainer=[];
}



var productNameInput = document.getElementById('productName') ;
var productPriceInput = document.getElementById('productPrice');
var productCategoryInput = document.getElementById('productCategory');
var productDescInput = document.getElementById('productDesc');
var addBtn =document.getElementById("addBtn");
addBtn.onclick=function()
{
    addProduct();
    displayData();
    clearProduct();


    

}



function addProduct()
{
    
    if((validationNameProduct() && validatePrice()) ==true)
    {
        
        var product ={
            name:productNameInput.value,
            price:productPriceInput.value,
            category:productCategoryInput.value,
            decsription:productDescInput.value,
    
        }
        productContainer.push(product);
        localStorage.setItem('ourProduct' ,JSON.stringify(productContainer));
    
        console.log(productContainer);


    }
    
    
    



}
function clearProduct()
{
    productNameInput.value = "";
    productPriceInput.value = "";
    productCategoryInput.value = "";
    productDescInput.value ="";
}
function displayData()
{
    trs=``;
    for(var i=0; i<productContainer.length; i++)
    {
        trs +=`<tr>
                   <td>${i+1}</td>
                   <td>${productContainer[i].name}</td>
                   <td>${productContainer[i].price}</td>
                   <td>${productContainer[i].category}</td>
                   <td>${productContainer[i].decsription}</td>
                   <td><button onclick="deletProduct(${i})" class="btn btn-danger">Delet</button></td>
                   <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>
        
        
        
        </tr>`
    }
    document.getElementById("tableBody").innerHTML=trs;
}
function deletProduct(index)
{
    
    productContainer.splice(index,1);
    localStorage.setItem('ourProduct' ,JSON.stringify(productContainer));
    displayData();

}
function searchProduct(term)
{
    trs=``;
    for(var i=0; i<productContainer.length; i++)
    {
        if(productContainer[i].name.toLowerCase().includes(term.toLowerCase()) ==true)
        {
            
             trs +=`<tr>
             <td>${i+1}</td>
             <td>${productContainer[i].name}</td>
             <td>${productContainer[i].price}</td>
             <td>${productContainer[i].category}</td>
             <td>${productContainer[i].decsription}</td>
             <td><button onclick="deletProduct(${i})" class="btn btn-danger">Delet</button></td>
             <td><button onclick="updateProduct(${i})" class="btn btn-warning">Update</button></td>



             </tr>`

        }
    }
    document.getElementById("tableBody").innerHTML=trs;

}
function updateProduct(index)
{
    productNameInput.value=productContainer[index].name;
    productPriceInput.value=productContainer[index].price;
    productCategoryInput.value=productContainer[index].category;
    productDescInput.value=productContainer[index].decsription;

    deletProduct(index);
    displayData();
    document.getElementById("addBtn").innerHTML="updateProduct"
}
function validationNameProduct()
{
    var regex =/^[A-Z][a-z]{2,5}$/;
    if(regex.test(productNameInput.value)==true)
    {
        return true;
    }
    else
    {
        alert("enter valid name start capital number");
    }
}
function validatePrice()
{
    var regex=/^[1-9][0-9][0-9]$/;
    if(regex.test(productPriceInput.value)==true)
    {
        return true
    }
    else
    {
        alert("enter valid price started  1000");
    }
}
