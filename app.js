    // // console.log("hello world");
    // fetch("https://fakestoreapi.com/products/")

    // .then((response)=>{return response.json()})

    // .then((pass)=>{
    // console.log("pass",pass)
    // addFnc(pass)
    // })
    // .catch((error)=>{
    //     console.log("error",error)
    // })

    // function addFnc(items){
    //     const parent = document.getElementById("parent");
    //     console.log(items[0].image)
    
    //     // console.log("red")
    //     for (const myveriable of items) {
    //         // console.log(myveriable.category
    //         // )
    //          parent.innerHTML +=`  <div class="card" style="width: 40%; padding:20px; margin:20px;">
    //             <img src="${myveriable.image}" class="card-img-top" alt="..." style="width: 100%;">
    //             <div class="card-body">
    //               <h5 class="card-title">${myveriable.category}</h5>
    //               <p class="card-text">${myveriable.description}</p> 

    //               <a href="javaScript:voide(0)" class="btn btn-primary">more deteils</a>
    //             </div>`
    //     }
    // }

    console.log("starting work in 10/07/2024 time : 9:17 am");

    // header section

    // let navIcons = document.getElementById('navIcons');
    let userNamedisplay  = document.getElementById('userName')
    const  signup = (yelp) => {
        console.log("sign Up")
        let profile = document.getElementById('profile');
        let useremail  = document.getElementById('email')
        let usernameI  = document.getElementById('name')

        
        // let useName  = document.getElementById('name')
        // userName.innerHTML= useName;
        // if(!usernameI.value && !useremail.value){
        //     usernameI.style.border = "2px solid red";
        //     return
            
        // }
        // if(!useremail.value){
        //     useremail.style.border = "2px solid red";
        //     if(useremail = '@gmail.com'){
        //         alert("enter valid email")
        //         return
        //     }
        // }else{
        //     userNamedisplay.innerHTML =  usernameI.value;
        //     useremail.value = ""
        //     usernameI.value = ""
        // }

        if(!usernameI.value){
            
            return
        }if (!useremail.value) {
            
        } else {
            // userNamedisplay.innerHTML = usernameI.value            
            localStorage.setItem('user name',usernameI.value)
            userNamedisplay.innerHTML = localStorage.getItem('user name')
            // profile.style.backgroundColor = "red"
            profile.children[0].innerHTML = 'Welcome \n'+ localStorage.getItem('user name').toLocaleUpperCase()
            profile.children[1].style.display = 'none'

            console.log()
            usernameI.value = ""
            useremail.value = ""
        }

        
        
        return
            // useremail.value = ""
            // usernameI.value = "" 
            // alert("thanks")
        //    usernameI = usernameI.value
        
        // userNamedisplay.innerHTML = usernameI.value;
        // useremail.value = '';
        // usernameI = '';
        
        // if(!useremail.value){
        //     // alert("eter valid email")
        // }else{
        //     // alert("thanks")
        //     useremail.value = '';
        //     userNamedisplay.innerHTML = usernameI.value;
        // }
    }
    // userNamedisplay.innerHTML = "red"
    // userNamedisplay.innerHTML = localStorage.getItem('user name').toUpperCase()
    let counter = 0 ;
    const search = (peramitor1,peramitor2)=>{
        
        counter++    
        // navIcons.className = "fa-solid fa-magnifying-glass actev"
        let search = document.getElementById('search');
        
        search.className = "extra profile search show"
        // console.log(active)
        if(counter > 1){
            --counter        
            navIcons.className = "fa-solid fa-magnifying-glass"
            search.className = "extra profile search hide"
            --counter
        }
    }
            
    const profile = (peramitor1,peramitor2)=>{
        
        counter++    
        let profile = document.getElementById('profile');
        profile.className = "extra profile show"
        if(counter > 1){
            profile.className = "extra profile hide"
            --counter        
        --counter
        }
    }
    const shopingBag = (peramitor1,peramitor2)=>{
        counter++
        // console.log("yes click it",peramitor2.style.color ='red')
        let bagItem = document.getElementById('bagItem');
        bagItem.className = "extra show"
        // console.log(bagItem,counter)
        
        if(counter > 1){
            
            --counter        
            bagItem.className = "extra hide"
    --counter
        }
            // counter++
    }
    // header section

    // items
    // let men = document.getElementById("men");
    // let omen = document.getElementById("omen");
    // let kids = document.getElementById("kids");
    // let twos = document.getElementById("twos");


    // let ll = document.getElementById("ll");
    // let en = document.getElementById("en");
    // let ome = document.getElementById("ome");
    // let ids = document.getElementById("ids");
    // let wos = document.getElementById("wos");

    // let containerflex = document.getElementById("containerflex")

    // ll.addEventListener('click',function(){
    //     console.log("all")
    // men.className = "show"    
    // omen.className = "show"
    // kids.className = "show"
    // twos.className = "show"
    // });

    // en.addEventListener('click',function(){
    //     console.log("men")
        
    // men.className = "show"    
    // omen.className = "hide"
    // kids.className = "hide"
    // twos.className = "hide"
    // console.log(containerflex)
        
    // });

    // ome.addEventListener('click',function(){
    //     console.log("women")
    // men.className = "hide"    
    // omen.className = "show"
    // kids.className = "hide"
    // twos.className = "hide"
        
    // });

    // ids.addEventListener('click',function(){
    //     console.log("kids")
    // men.className = "hide"    
    // omen.className = "hide"
    // kids.className = "show"
    // twos.className = "hide"
        
    // });

    // wos.addEventListener('click',function(){
    //     console.log("women")
        
    //     men.className = "hide"    
    //     omen.className = "hide"
    //     kids.className = "hide"
    //     twos.className = "show"
        
    // });


    // items
    let productContainer = document.getElementById("productContainer");
    // let All = (pera1)=>{
    // // console.log(productContainer.children[0].className="show")
    // };

    let men = document.getElementById('men');
    let women = document.getElementById('women');
    let kids = document.getElementById('kids');
    let twos = document.getElementById('twos');

    // let Men = (pera1)=>{
    // console.log(productContainer.children[0],"Men")

    // // productContainer.children.className = "hide"
    // // productContainer.children[1].className = "show"

    // // pera1.className = "active"
    // men.className += 'show'
    // men.style.width = '100%'
    // productContainer.style.height = '100vh'
    // // productContainer.style.border = '2px solid red'
    // women.className = 'hide'
    // kids.className = 'hide'
    // twos.className = 'hide'

    // };

    // let Women = (pera1)=>{
    // console.log(productContainer.children,"Women")
    // men.className = 'hide'
    // productContainer.style.height = '100vh'
    // // productContainer.style.border = '2px solid red'
    // women.className += 'show'
    // women.style.width = '100%'
    // kids.className = 'hide'
    // twos.className = 'hide'

    // };

    // let Kids = (pera1)=>{
    // console.log(productContainer.children,"Kids")

    // men.className = 'hide'
    // productContainer.style.height = '100vh'
    // // productContainer.style.border = '2px solid red'
    // women.className = 'hide'
    // kids.className += 'show'
    // kids.style.width = '100%'
    // twos.className = 'hide'
    // };

    // let Twos = (pera1)=>{
    // console.log(pera1,"Twos")
    // men.className = 'hide'
    // productContainer.style.height = '100vh'
    // // productContainer.style.border = '2px solid red'
    // women.className = 'hide'
    // kids.className = 'hide'
    // twos.className += 'show'
    // twos.style.width = '100%'
    // };
    // let active = false;
    // console.log(active)

    let activeAll = document.getElementById("activeAll")
let activeMen = document.getElementById("activeMen")
let activeWomen = document.getElementById("activeWomen")
let activeKids = document.getElementById("activeKids")
let activeStudy = document.getElementById("activeStudy")

    const All = peramitor => {
        // console.log("All" , peramitor  ,productContainer )
        
        activeAll.className = 'active';
        activeMen.className = '';
        activeWomen.className = '';
        activeKids.className = '';
        activeStudy.className = '';
    men.className = "d-flex justify-content-around w-100"
    women.className = "d-flex justify-content-around w-100"
    kids.className = "d-flex justify-content-around w-100"
    twos.className = "d-flex justify-content-around w-100"

    // if(productContainer.children){
    //     console.log("challa")
    // }else{
    //     console.log("nhi")
    // }
    };

    const Men = peramitor => {
        
        activeAll.className = '';
activeMen.className = 'active';
activeWomen.className = '';
activeKids.className = '';
activeStudy.className = '';
    // peramitor.style.color = 'red'    
    // peramitor.style.color = "red"
    men.className += "men d-flex justify-content-around w-100"
    women.className = "d-none"
    kids.className = "d-none"
    twos.className = "d-none"
  
};
    

    const Women = peramitor => {
        activeAll.className = '';
activeMen.className = '';
activeWomen.className = 'active';
activeKids.className = '';
activeStudy.className = '';
        // console.log("Women" , peramitor)

        men.className = "d-none"
        women.className = "Women d-flex justify-content-around w-100"
        kids.className = "d-none"
        twos.className = "d-none"
    };

    const Kids = peramitor => {
        activeAll.className = '';
activeMen.className = '';
activeWomen.className = '';
activeKids.className = 'active';
activeStudy.className = '';
        // console.log("Kids" , peramitor)
        
        men.className = "d-none"
        women.className = "d-none"
        kids.className = "kids d-flex justify-content-around w-100"
        twos.className = "d-none"
    };


    const Twos = peramitor => {
        activeAll.className = '';
activeMen.className = '';
activeWomen.className = '';
activeKids.className = '';
activeStudy.className = 'active';
        // console.log("Twos" , peramitor)
        
        men.className = "d-none"
        women.className = "d-none"
        kids.className = "d-none"
        twos.className = "Twos d-flex justify-content-around w-100"
        // if(active>1){
        //     peramitor.style.borderBottom = "2px solid red"
        //     console.log("zaada")
        //     active = 0;
        // }else{
        //     peramitor.style.borderBottom = "none"
        //     console.log("kam")
        //     active = 2
        // }
    };


    // timer 
let day = document.getElementById('day')
let hours = document.getElementById('hours')
let minutes = document.getElementById('minutes')
let second = document.getElementById('second')



day.innerHTML = 5;
hours.innerHTML = 8;
minutes.innerHTML = 53;
second.innerHTML = 42;

setInterval(function(){
//     // console.log("hello wold")
    second.innerHTML--
        if(second.innerHTML < 1){
                second.innerHTML = 60;
                minutes.innerHTML--
            }
        if(minutes.innerHTML < 1){
                minutes.innerHTML = 59;
                hours.innerHTML--
            }
        if(hours.innerHTML < 1){
                hours.innerHTML = 23;
                day.innerHTML--
            }
            if(day.innerHTML < 1){
                day.innerHTML = 5;
hours.innerHTML = 8;
minutes.innerHTML = 53;
second.innerHTML = 42;
            }
    },1000)


    // fecth


    const more =  (eleme)=>{
     
    fetch('https://fakestoreapi.com/products/')
    // fetch('https://api.escuelajs.co/api/v1/products')
    .then((sate)=>{
return sate.json()
    })
    .then((solve)=>{
        console.log("solve",solve)
        fanctionCalling(solve)
    })
    .catch((error)=>{
        console.log("error",error)
    })

    // for (const product of error) {
    //     console.log("helo")
    // }
   
    function fanctionCalling(items){
        let productContainer = document.getElementById("productContainer");
        for (const products of items) {
            console.log(products)
            productContainer.innerHTML += `<div class='card m-0 '  style='width: 20rem;' >
          <img src=${products.image} class='card-img-top" alt="product images w-100'>
          <div class='card-body text-start'>
            <h2 class = 'fs-3'>${products.title}</h2>
            <p class='fs-6  card-text'>${products.description}</p>
            <h5 class='fs-5 '>$ ${products.price}</h5>
          </div>
        </div>`
        }
    }
    // eleme.innerHTML = "close"
}
var click = 0;

    const productDropdoun = document.getElementById("productDropdoun");
    const carouselExample = document.getElementById("carouselExample");
    const dami = document.getElementById("dami");
    const pro = document.getElementById("pro");
    const form = document.getElementById("form");
    const proName = document.getElementById("proName");
    const searcher =(pera1) =>{
        console.log(form.children[0].value)
if(click === 0){
    console.log(form.children[0].value)
    console.log(form.children[1].style.pointerEvents= "none")
    pera1.className = 'bg-dark';
    // console.log("iam brabar of 0",);
    // body.innerHTML = ""
    // carouselExample.innerHTML = ""
    // console.log(form.children[1].style.cursor="not-allowed")
}
if(form.children[0].value === "Black & White Ca"){
    // dami.className = "flex";
    dami.style.display = 'flex'
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value+"p";
    proName.appendChild(h1)
    dami.appendChild(men.children[0])
    
    pro.style.display = "none"
}
if(form.children[0].value === "shoes for Men"){
    // console.log(form.children[0].value)
    // console.log(men.children[1])
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(men.children[1])
    
    pro.style.display = "none"
}
if(form.children[0].value === "Watch"){
    // console.log(form.children[0].value)
    // console.log(men.children[1])
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(men.children[2])
    
    pro.style.display = "none"
}
if(form.children[0].value === "Red Lip Stick"){
    // console.log(form.children[0].value)
    // console.log(women.children)
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(women.children[1])
    
    pro.style.display = "none"
}
if(form.children[0].value === "Lakme CC cream"){
    // console.log(form.children[0].value)
    // console.log(women.children)
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(women.children[0])
    
    pro.style.display = "none"
}
if(form.children[0].value === "Writing LCD"){
    // console.log(form.children[0].value)
    // console.log(women.children)
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(kids.children[1])
    
    pro.style.display = "none"
}
if(form.children[0].value === "School Backpack"){
    // console.log(form.children[0].value)
    // console.log(women.children)
    dami.style.display = 'flex'
    
    var h1  = document.createElement(h1)
    
    h1.innerHTML = "Result"+'<br />'+form.children[0].value;
    proName.appendChild(h1)
    dami.appendChild(twos.children[2])
    
    pro.style.display = "none"
}
}

// const get= ()=>{
//     console.log("hello")
// }