
const url = "https://masai-vouchers-api.herokuapp.com/api/vouchers";

const items = document.querySelector("#voucher_list")

fetch(url)
    .then(function(res){
        return res.json();
    })
    .then(function(res){
        appenData(res);
    })
    .catch(function(err){
        console.log("err:", err)
    })


    function appenData(data){
        data.forEach(function(el){
            let div = document.createElement("div");

            let name = document.createElement("p");
            name.innerText= el.name;
            name.setAttribute("id", "voucher_name")

            let image = document.createElement("img");
            image.src = el.image;
            image.setAttribute("id", "voucher_img")

            let price = document.createElement("p");
            price.innerText = el.price;
            price.setAttribute("id", "voucher_price")

            let button= document.createElement("button");
            button.innerText = "Buy"
            button.setAttribute("class", "buy_voucher");
            button.addEventListener("click", function(){
                buttonFunc(elem, index);
            })

            div.append(image, name, price, button);
            items.append(div)
        })
    }

    function Voucher(n, p, i){
        this.name= n;
        this.price= p;
        this.image= i;
    
    }
    
    function buttonFunc(elem, index){
        event.preventDefault();
    
    
        let name= document.querySelector("#voucher_name");
    
        let image = document.querySelector("#voucher_img");
    
        let price = documetn.querySelector("#voucher_price")
    
        let p2= new Voucher(name, email, address, amount);
    
        let data= JSON.parse(localStorage.getItem("purchased")) || [];
    
        data.push(p1);
    
        localStorage.setItem("purchased", JSON.stringify(data))
    }