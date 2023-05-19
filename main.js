menuListArray = ["Pizza Vegetariana",//adicionar mais itens
                 "Pizza de Frango";
                 "Pizza Portuguesa";
                 "Pizza Quatro Queijos";
                 "Pizza de Calabresa";
                 "Pizza extravagante";
                    ];

function getMenu(){
var htmldata="";
menuListArray.sort();
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata + menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML
//Completar o código
}

function addItem(){
var htmldata;
var imgtags='<img id="m1" src="images/pizzaImg.png"/>'
var item=document.getElementById("addItem").value;
menuListArray.sort();
htmldata=""
for(var i=0;i<menuListArray.length;i++){
    htmldata=htmldata + menuListArray[i] + '<br>'
}
document.getElementById("displayMenu").innerHTML

//Completar o código

}

function addTop(){
var item=document.getElementById("addItem").value;
    menuListArray.push(item);
    addItem()
//Completar o código
}