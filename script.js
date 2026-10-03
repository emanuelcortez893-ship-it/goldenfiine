// ===============================
// GOLDENFIINE — EDITÁ ESTA PARTE
// ===============================
const CONFIG={
  instagram:"https://www.instagram.com/joyas_goldenfiine?Stkn=MWR6djlndWdjM3d5cA=="
};

// FOTOS: cada producto carga su imagen desde la carpeta images/.
// Para cambiar una foto, reemplazá el archivo con el mismo nombre (ej: images/cadena-1.jpg).
const products=[
 {id:1,name:"Cadena Venezia",cat:"Cadenas",price:45000,img:"images/cadena-1.jpg",badge:"MÁS VENDIDO",sizes:["45 cm","50 cm","55 cm"]},
 {id:2,name:"Cadena Cuban",cat:"Cadenas",price:62000,img:"images/cadena-2.jpg",badge:"NUEVO",sizes:["45 cm","50 cm","55 cm"]},
 {id:3,name:"Cadena Figaro",cat:"Cadenas",price:54000,img:"images/cadena-3.jpg",sizes:["45 cm","50 cm","60 cm"]},
 {id:4,name:"Pulsera Classic",cat:"Pulseras",price:38000,img:"images/pulsera-1.jpg",sizes:["18 cm","20 cm","22 cm"]},
 {id:5,name:"Pulsera Gold",cat:"Pulseras",price:52000,img:"images/pulsera-2.jpg",badge:"NUEVO",sizes:["18 cm","20 cm","22 cm"]},
 {id:6,name:"Pulsera Cuban",cat:"Pulseras",price:58000,img:"images/pulsera-3.jpg",sizes:["18 cm","20 cm","22 cm"]},
 {id:7,name:"Anillo Milano",cat:"Anillos",price:35000,img:"images/anillo-1.jpg",sizes:["16","18","20","22"]},
 {id:8,name:"Anillo Royal",cat:"Anillos",price:49000,img:"images/anillo-2.jpg",badge:"DESTACADO",sizes:["16","18","20","22"]},
 {id:9,name:"Anillo Signet",cat:"Anillos",price:43000,img:"images/anillo-3.jpg",sizes:["16","18","20","22"]},
 {id:10,name:"Dije Corazón",cat:"Dijes",price:28000,img:"images/dije-1.jpg",sizes:["Único"]},
 {id:11,name:"Dije Inicial",cat:"Dijes",price:30000,img:"images/dije-2.jpg",sizes:["A","B","C","D","E"]},
 {id:12,name:"Dije Cruz",cat:"Dijes",price:32000,img:"images/dije-3.jpg",sizes:["Único"]}
];

let cart=JSON.parse(localStorage.getItem("gf_cart")||"[]"), category="Todos", current=null;
const money=n=>"$"+n.toLocaleString("es-AR");
const save=()=>localStorage.setItem("gf_cart",JSON.stringify(cart));

function render(){
 let list=category==="Todos"?[...products]:products.filter(p=>p.cat===category);
 const sort=document.getElementById("sort").value;
 if(sort==="low")list.sort((a,b)=>a.price-b.price);
 if(sort==="high")list.sort((a,b)=>b.price-a.price);
 document.getElementById("catTitle").textContent=category==="Todos"?"Todos los productos":category;
 document.getElementById("grid").innerHTML=list.map(p=>`
 <article class="card" onclick="openProduct(${p.id})">
   <div class="card-img">${p.badge?`<span class="badge">${p.badge}</span>`:""}<button class="heart" onclick="event.stopPropagation()">♡</button><img src="${p.img}" alt="${p.name}" loading="lazy"></div>
   <div class="card-info"><small>${p.cat}</small><h3>${p.name}</h3><div class="price">${money(p.price)}</div></div>
 </article>`).join("");
}

document.querySelectorAll(".filter").forEach(b=>b.onclick=()=>{
 document.querySelectorAll(".filter").forEach(x=>x.classList.remove("active"));b.classList.add("active");
 category=b.dataset.cat;render();document.getElementById("filters")?.classList.remove("show");
});
document.getElementById("sort").onchange=render;

function openProduct(id){
 current=products.find(p=>p.id===id);
 document.getElementById("mImg").src=current.img;
 document.getElementById("mCat").textContent=current.cat;
 document.getElementById("mName").textContent=current.name;
 document.getElementById("mPrice").textContent=money(current.price);
 document.getElementById("sizes").innerHTML=current.sizes.map((s,i)=>`<button class="size ${i===0?"selected":""}" onclick="selectSize(this)">${s}</button>`).join("");
 document.getElementById("modal").classList.add("show");
}
function selectSize(el){document.querySelectorAll(".size").forEach(x=>x.classList.remove("selected"));el.classList.add("selected")}
document.getElementById("modalClose").onclick=()=>document.getElementById("modal").classList.remove("show");
document.getElementById("modal").onclick=e=>{if(e.target.id==="modal")e.currentTarget.classList.remove("show")};
document.getElementById("mAdd").onclick=()=>{add(current.id);document.getElementById("modal").classList.remove("show");openCart()};

function add(id){let x=cart.find(a=>a.id===id);if(x)x.qty++;else cart.push({id,qty:1});save();renderCart()}
function qty(id,n){let x=cart.find(a=>a.id===id);if(!x)return;x.qty+=n;if(x.qty<1)cart=cart.filter(a=>a.id!==id);save();renderCart()}
function remove(id){cart=cart.filter(a=>a.id!==id);save();renderCart()}
function renderCart(){
 document.getElementById("cartCount").textContent=cart.reduce((a,x)=>a+x.qty,0);
 const box=document.getElementById("cartItems");
 if(!cart.length){box.innerHTML='<div style="text-align:center;color:#999;padding:70px 10px;font-size:12px">Tu carrito está vacío.</div>'}
 else box.innerHTML=cart.map(x=>{let p=products.find(a=>a.id===x.id);return `<div class="cart-row"><img src="${p.img}"><div><h4>${p.name}</h4><small>${money(p.price)}</small><div class="qty"><button onclick="qty(${p.id},-1)">−</button><span>${x.qty}</span><button onclick="qty(${p.id},1)">+</button></div></div><button class="remove" onclick="remove(${p.id})">×</button></div>`}).join("");
 let total=cart.reduce((a,x)=>a+products.find(p=>p.id===x.id).price*x.qty,0);
 document.getElementById("total").textContent=money(total);
}
function openCart(){document.getElementById("drawer").classList.add("open");document.getElementById("shade").classList.add("show")}
function closeCart(){document.getElementById("drawer").classList.remove("open");document.getElementById("shade").classList.remove("show")}
document.getElementById("openCart").onclick=openCart;document.getElementById("closeCart").onclick=closeCart;document.getElementById("shade").onclick=closeCart;
document.getElementById("empty").onclick=()=>{cart=[];save();renderCart()};
document.getElementById("buy").onclick=()=>window.open(CONFIG.instagram,"_blank");
document.getElementById("contactBtn").href=CONFIG.instagram;document.getElementById("sideInstagram").href=CONFIG.instagram;
document.getElementById("mobileMenu").onclick=()=>{let n=document.getElementById("nav");n.style.display=n.style.display==="flex"?"none":"flex"};
document.getElementById("filterMobile").onclick=()=>{document.querySelector(".filters").classList.add("show")};
document.getElementById("closeFilters").onclick=()=>{document.querySelector(".filters").classList.remove("show")};
render();renderCart();
