
let name = document .getElementById('name');
let address = document .getElementById('address');
let email = document .getElementById('email');
let submit = document .getElementById('submit');

console.log( name, address,email)
if( localStorage.product !=null){
    datapro= JSON.parse(localStorage.product)
}else{
    datapro = [];

}

submit.onclick = function(){
    let newpro = {
        name:name.value,
        address: address.value,
        email:email.value,

    }
    datapro.push(newpro)
    localStorage.setItem('product' ,  JSON.stringify (datapro))
    console.log(datapro)
    clearData()
}

function clearData(){
    name.value = '';
    address.value = '';
    email.value = '';
}