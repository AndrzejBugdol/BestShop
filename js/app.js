//define prices//
let prices = {
    product: 5,
    order: 10,
    package: {
        basic: 0,
        professional: 25,
        premium: 60
    },
    accounting: 53,
    terminal: 8
}
let accountingPrice = 0;
let terminalPrice = 0;
let ordersPrice = 0;
let productsPrice = 0;
let dropPrice = 0;
let summary = [{
    products: 0,
    orders: 0,
    drop: 0,
    accouting: 0,
    termial: 0
}];

//define variables that will change// 
let forms = document.querySelector(".calc__form");
let packageInput = forms.querySelector(".calc__select");
let dropdownListElement = Array.from(forms.querySelector(".select__dropdown").children);
let packageLi = document.querySelector('[data-id="package"]');

let ordersInput = forms.querySelector("#orders");
let ordersLi = document.querySelector('[data-id="orders"]');

let productsInput = forms.querySelector("#products");
let productsLi = document.querySelector('[data-id="products"]');

  //checkboxes variables
let terminalCheckbox = forms.querySelector("#terminal");
let accountingCheckbox = forms.querySelector("#accounting");
let terminalLi = document.querySelector('[data-id="terminal"]');
let accountLi = document.querySelector('[data-id="accounting"]');

let summaryTotal = document.querySelector(".summary__total");
// logic for dropdown //
packageInput.addEventListener("click", function(){
    packageInput.classList.toggle("open");
    packageInput.style
    });

dropdownListElement.forEach(function(element){
    element.addEventListener("click",function(){
    let dropID = element.innerHTML;
    dropPrice = 0;
    forms.querySelector(".select__input").innerHTML= dropID;
    packageLi.querySelector(".item__calc").innerHTML= dropID;
    switch (dropID) {
        case "Basic":
            dropPrice = prices.package.basic;
            break;
        case "Professional":
            dropPrice = prices.package.professional;
            break;
        case "Premium":
            dropPrice = prices.package.premium;
            break;
        default:
            break;
    }
    packageLi.querySelector(".item__price").innerHTML= "\$"+dropPrice;
    packageLi.classList.add("open");

    calculator('drop',dropPrice);

});

});
//first two values//
ordersInput.addEventListener("input",function(){
    
    ordersLi.querySelector(".item__calc").innerHTML = ordersInput.value +" \* $"+ prices.order;
    ordersLi.querySelector(".item__price").innerHTML = "$"+prices.order*ordersInput.value;
    ordersPrice = prices.order*ordersInput.value;

    if (ordersPrice == 0){
        ordersLi.classList.remove("open");
    } else {
        ordersLi.classList.add("open");
    }
    calculator('orders',ordersPrice);

    
})
productsInput.addEventListener("input",function(){
    productsLi.classList.add("open");
    productsLi.querySelector(".item__calc").innerHTML = productsInput.value +" \* $"+ prices.product;
    productsLi.querySelector(".item__price").innerHTML = "$"+prices.product*productsInput.value;
    productsPrice = prices.product*productsInput.value

    if (productsPrice == 0){
        productsLi.classList.remove("open");
    } else {
        productsLi.classList.add("open");
    }

    calculator('products',productsPrice);

})

//define event listerers on checkboxes //
terminalCheckbox.addEventListener("change",function(){
    terminalLi.querySelector(".item__price").innerHTML = "$"+prices.terminal;
    terminalPrice = prices.terminal;
    if (this.checked) {
        terminalLi.classList.add("open");
    } else {
        terminalLi.classList.remove("open");
        terminalPrice = 0;
    }
    calculator('termial',terminalPrice);

});

accountingCheckbox.addEventListener("change",function(){
    accountLi.querySelector(".item__price").innerHTML = "$"+prices.accounting;
    accountingPrice = prices.accounting;
    if (this.checked) {
        accountLi.classList.add("open");
    } else {
        accountLi.classList.remove("open");
        accountingPrice = 0;
    }

    calculator('accouting',accountingPrice)
    return accountingPrice

});
console.log(accountingPrice)

function calculator(rate,volume) {
    summary[0][rate] = volume;
    console.log(summary);
    let sumprice = Object.values(summary[0]).reduce(function(previous,current){
        return previous + current;
    });
    summaryTotal.querySelector('span:last-of-type').innerHTML = "\$"+sumprice;
    if (sumprice == 0){
        summaryTotal.classList.remove('open');
    } else {
        summaryTotal.classList.add('open');
    }

    console.log(sumprice)
}