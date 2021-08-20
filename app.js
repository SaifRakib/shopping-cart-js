// phone case function
function updateProductNumber(product,price,isIncresing) {
    const productInput = document.getElementById(product + '-input');
    let productNumber = productInput.value;
    if (isIncresing === true) {
       productNumber= parseInt(productNumber) + 1;
    }else if(productNumber > 0){
        productNumber = parseInt(productNumber) - 1;
    }

    productInput.value = productNumber;
    // update case total
    const productTotal = document.getElementById(product + '-total');
    productTotal.innerText = productNumber * price;
    // calculate total
    calculateTotalAmount();
}

function getInputValue(product) {
    const productInput = document.getElementById(product+'-input');
    const productNumber = parseInt(productInput.value);
    return productNumber;
}

function calculateTotalAmount(params) {
    const phoneTotal = getInputValue("phone") * 1219;
    const caseTotal = getInputValue("case") * 59;
    const subTotal = parseInt(phoneTotal + caseTotal);
    const tax = subTotal / 10;
    const totalAmount = subTotal + tax;
    document.getElementById('sub-total').innerText = subTotal;
    document.getElementById('tax-amount').innerText = tax;
    document.getElementById('total-amount').innerText = totalAmount;

}

// case event handler
document.getElementById('case-plus').addEventListener('click', function(){
    updateProductNumber("case",59,true);
});

document.getElementById('case-minus').addEventListener('click', function(){
    updateProductNumber("case",59,false);
    
});
// phone event handler
document.getElementById('phone-plus').addEventListener('click', function() {
    updateProductNumber("phone",1219,true);
});

document.getElementById('phone-minus').addEventListener('click', function() {
    updateProductNumber("phone",1219,false);
});