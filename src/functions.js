function addToCart(quantity,productName="Elma") {
    console.log("Sepete eklendi! : " + productName + " adet : " + quantity)
}

//addToCart()
addToCart(10)
//addToCart("15")

let sayHello = ()=> {
    console.log("selamn aleykum")
}

sayHello()

let sayHello2=function () {
    console.log("selamın aleykum 2")
}
sayHello2()

function addToCart2(productName,quantity,unitPrice) {
    
}

addToCart2("Elma",5,10)
addToCart2("Armut",2,20)
addToCart2("Limon",3,15)

function addToCart3(product) {

    
}

let product1={productName:"Elma",unitPrice:10,quantity:5}

function addToCart3(product) {
    console.log(" Ürün : " + product.productName)
    console.log("Adet : "+product.quantity)
    console.log("Fiyat : "+product.unitPrice)
}

addToCart3(product1)

let araba1 = {arabaMarka:"BMW",arabaRenk:"Kırmızı",arabaUcret:50}

function sepeteEkle(araba) {
    console.log("Arabanın markası : "+araba.arabaMarka)
    console.log("Arabanın Rengi : "+araba.arabaRenk)
    console.log("Arabanın Ücreti : "+araba.arabaUcret)
}

sepeteEkle(araba1)

let product2={productName:"Elma",unitPrice:10,quantity:5}
let product3={productName:"Elma",unitPrice:10,quantity:5}
product2=product3
product2.productName="Karpuz"
console.log(product3.productName)




function addToCart4(products) {

    console.log(products)    
}

let products = [
    {productName:"Elma",unitPrice:10,quantity:5},
    {productName:"Armut",unitPrice:10,quantity:5},
    {productName:"Karpuz",unitPrice:10,quantity:5}
]

addToCart4(products)

function add(...numbers) {
    let total=0;
    for (let i = 0; i < numbers.length; i++) {
        total=total+numbers[i]
    }
    console.log(total)
}

add(20+30)
add(20,30,40)
add(20,30,40,50)


function carp(...sayilar) {  //rest
    let total=1
    for (let i = 0; i < sayilar.length; i++) {
        total=total*sayilar[i]
        
    }
    console.log(total)
}

carp(2,3,4)

let numbers=[100,200,300,600]
console.log(Math.max(...numbers)) 

let [icAnadolu,marmara,karadeniz,[icAnadoluSehirleri]]=[
    {name:"İç Anadolu",population:"20M"},
    {name:"Marmara",population:"30M"},
    {name:"Karadeniz",population:"10M"},
    [
        ["Ankara","Konya"],
        ["İstanbul","Bursa"],
        ["Sinop","Trabzon"],
    ]
]

console.log(icAnadolu)
console.log(marmara)
console.log(icAnadoluSehirleri)




let newProductName, newUnitPrice, newQuantity
({productName:newProductName,unitPrice:newUnitPrice,quantity:newQuantity}=
    {productName:"Elma",unitPrice:10,quantity:5})

    console.log(newProductName)
    console.log(newUnitPrice)
    console.log(newQuantity)


    