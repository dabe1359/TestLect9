var name = localStorage.getItem(`name`); //getItem read value from storage

var cars = [
{
    name : 'Fiat',
    year : 2020
},
{
    'name' : 'Ford',
    year : 2019
}];

var CarStringUnified = JSON.stringify(cars); //[{"name":"Fiat","year":2020},{"name":"Ford","year":2019}]
console.log(CarStringUnified);

localStorage.setItem("Cars",CarStringUnified); //save String object to key in localstorage

//now how from string to object...

var newString = localStorage.getItem("Cars");
var parseCars = JSON.parse(newString);

console.log(parseCars[0].name);



if(name != 'null')
{
    alert(`Welcome Back ${name}`);
}

$(`#myBtn`).on(`click`, ()=>{
    var name = $(`#myInput`).val(); //read the value but direct.... not saved in storage
    localStorage.setItem(`name`,name); //save in localStorage value
    //localStorage.clear(`name`)
    alert(`HEllo ${name}`);
});