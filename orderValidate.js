//variables for each form element
var quantity = document.forms["order-form"]["quantity"];
var totalPrice = document.forms["order-form"]["price"];
var ccNum = document.forms["order-form"]["CC_number"];
var expdate = document.forms["order-form"]["Expdate"];
var cvv = document.forms["order-form"]["cvv"];
var cardholder = document.forms["order-form"]["cardholder"];

var ITEM_PRICE = 10.00

//add functions to validate each form element
function validateCC(){
    var CCregex = /^[0-9]{16}$/;
    var isTrue = CCregex.test(ccNum.value);
    console.log(isTrue);
    return isTrue;
}

function validateExpDate(){
    var expRegex = /^(0[1-9]|1[0-2])\/?([0-9]{2})$/;
    var isTrue = expRegex.test(expdate.value);
    return isTrue;
}

function validateCVV(){
    var cvvRegex = /^[0-9]{3}$/;
    return cvvRegex.test(cvv.value);
}

function validateName(){
    var nameRegex = /^[A-Za-z]+ ([A-Za-z] )?[A-Za-z]+$/
    return nameRegex.test(cardholder.value);
}

//add listeners to the form elements
ccNum.addEventListener("input", function(event) {
    var test = validateCC() || ccNum.value.length === 0;
    var isvalid = test ? "valid" : "invalid";
    ccNum.className = "form-control " + isvalid;
})

expdate.addEventListener("input", function(event) {
    var test = validateExpDate() || expdate.value.length === 0;
    var isvalid = test ? "valid" : "invalid";
    expdate.className = "form-control " + isvalid;
})

cvv.addEventListener("input", function(event) {
    var test = validateCVV() || cvv.value.length === 0;
    var isvalid = test ? "valid" : "invalid";
    cvv.className = "form-control " + isvalid;
})

cardholder.addEventListener("input", function(event) {
    var test = validateName() || cardholder.value.length === 0;
    var isvalid = test ? "valid" : "invalid";
    cardholder.className = "form-control " + isvalid;
})

//immediately update the price value when teh page loads
document.addEventListener("DOMContentLoaded", function(event)
{
    updatePrice();
})

//function to update the price as the quantity changes
function updatePrice(){
    totalPrice.value = "$" + (ITEM_PRICE * quantity.value);
}

//function to ensure that all fields are valid
function validateForm() {
    //ensure that all fields are nonempty and valid
    if (!(validateCC() && validateCVV() && validateExpDate() && validateName() )){
        alert("Error: please make sure that all fields are filled and valid");
        return false;
    }

    //give the user a confirmation of submission
    return confirm("Are you sure you want to submit?");

}