
function voucher(n, e, a, am){
    this.name= n;
    this.email= e;
    this.address= a;
    this.amount= am;

}

function SubmitForm(e){
    event.preventDefault();

    let form= document.querySelector("#form");

    let name= form.name.value;

    let email= form.email.value;

    let address= form.address.value;

    let amount= form.amount.value;

    let p1= new voucher(name, email, address, amount);

    let data= JSON.parse(localStorage.getItem("user")) || [];

    data.push(p1);

    localStorage.setItem("user", JSON.stringify(data))
}