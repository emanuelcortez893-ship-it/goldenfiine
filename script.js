// ===============================
// GOLDENFIINE
// ===============================

const CONFIG = {
  instagram: "https://www.instagram.com/joyas_goldenfiine/",
  whatsapp: "https://wa.me/5491153894764"
};

// ===============================
// PRODUCTOS
// ===============================

const products = [

  // ===== CADENAS =====
  {id:1,name:"Cadena 1",cat:"Cadenas",price:45000,img:"images/cadena-1.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:2,name:"Cadena 2",cat:"Cadenas",price:45000,img:"images/cadena-2.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:3,name:"Cadena 3",cat:"Cadenas",price:45000,img:"images/cadena-3.jpg",sizes:["45 cm","50 cm","60 cm"]},
  {id:4,name:"Cadena 4",cat:"Cadenas",price:45000,img:"images/cadena-4.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:5,name:"Cadena 5",cat:"Cadenas",price:45000,img:"images/cadena-5.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:6,name:"Cadena 6",cat:"Cadenas",price:45000,img:"images/cadena-6.jpg",sizes:["45 cm","50 cm","60 cm"]},
  {id:7,name:"Cadena 7",cat:"Cadenas",price:45000,img:"images/cadena-7.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:8,name:"Cadena 8",cat:"Cadenas",price:45000,img:"images/cadena-8.jpg",sizes:["45 cm","50 cm","55 cm"]},
  {id:9,name:"Cadena 9",cat:"Cadenas",price:45000,img:"images/cadena-9.jpg",sizes:["45 cm","50 cm","60 cm"]},
  {id:10,name:"Cadena 10",cat:"Cadenas",price:45000,img:"images/cadena-10.jpg",sizes:["45 cm","50 cm","55 cm"]},

  // ===== PULSERAS =====
  {id:11,name:"Pulsera 1",cat:"Pulseras",price:38000,img:"images/pulsera-1.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:12,name:"Pulsera 2",cat:"Pulseras",price:38000,img:"images/pulsera-2.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:13,name:"Pulsera 3",cat:"Pulseras",price:38000,img:"images/pulsera-3.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:14,name:"Pulsera 4",cat:"Pulseras",price:38000,img:"images/pulsera-4.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:15,name:"Pulsera 5",cat:"Pulseras",price:38000,img:"images/pulsera-5.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:16,name:"Pulsera 6",cat:"Pulseras",price:38000,img:"images/pulsera-6.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:17,name:"Pulsera 7",cat:"Pulseras",price:38000,img:"images/pulsera-7.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:18,name:"Pulsera 8",cat:"Pulseras",price:38000,img:"images/pulsera-8.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:19,name:"Pulsera 9",cat:"Pulseras",price:38000,img:"images/pulsera-9.jpg",sizes:["18 cm","20 cm","22 cm"]},
  {id:20,name:"Pulsera 10",cat:"Pulseras",price:38000,img:"images/pulsera-10.jpg",sizes:["18 cm","20 cm","22 cm"]},

  // ===== ANILLOS =====
  {id:21,name:"Anillo 1",cat:"Anillos",price:35000,img:"images/anillo-1.jpg",sizes:["16","18","20","22"]},
  {id:22,name:"Anillo 2",cat:"Anillos",price:35000,img:"images/anillo-2.jpg",sizes:["16","18","20","22"]},
  {id:23,name:"Anillo 3",cat:"Anillos",price:35000,img:"images/anillo-3.jpg",sizes:["16","18","20","22"]},
  {id:24,name:"Anillo 4",cat:"Anillos",price:35000,img:"images/anillo-4.jpg",sizes:["16","18","20","22"]},
  {id:25,name:"Anillo 5",cat:"Anillos",price:35000,img:"images/anillo-5.jpg",sizes:["16","18","20","22"]},
  {id:26,name:"Anillo 6",cat:"Anillos",price:35000,img:"images/anillo-6.jpg",sizes:["16","18","20","22"]},
  {id:27,name:"Anillo 7",cat:"Anillos",price:35000,img:"images/anillo-7.jpg",sizes:["16","18","20","22"]},
  {id:28,name:"Anillo 8",cat:"Anillos",price:35000,img:"images/anillo-8.jpg",sizes:["16","18","20","22"]},
  {id:29,name:"Anillo 9",cat:"Anillos",price:35000,img:"images/anillo-9.jpg",sizes:["16","18","20","22"]},
  {id:30,name:"Anillo 10",cat:"Anillos",price:35000,img:"images/anillo-10.jpg",sizes:["16","18","20","22"]},

  // ===== DIJES =====
  {id:31,name:"Dije 1",cat:"Dijes",price:28000,img:"images/dije-1.jpg",sizes:["Único"]},
  {id:32,name:"Dije 2",cat:"Dijes",price:28000,img:"images/dije-2.jpg",sizes:["Único"]},
  {id:33,name:"Dije 3",cat:"Dijes",price:28000,img:"images/dije-3.jpg",sizes:["Único"]},
  {id:34,name:"Dije 4",cat:"Dijes",price:28000,img:"images/dije-4.jpg",sizes:["Único"]},
  {id:35,name:"Dije 5",cat:"Dijes",price:28000,img:"images/dije-5.jpg",sizes:["Único"]},
  {id:36,name:"Dije 6",cat:"Dijes",price:28000,img:"images/dije-6.jpg",sizes:["Único"]},
  {id:37,name:"Dije 7",cat:"Dijes",price:28000,img:"images/dije-7.jpg",sizes:["Único"]},
  {id:38,name:"Dije 8",cat:"Dijes",price:28000,img:"images/dije-8.jpg",sizes:["Único"]},
  {id:39,name:"Dije 9",cat:"Dijes",price:28000,img:"images/dije-9.jpg",sizes:["Único"]},
  {id:40,name:"Dije 10",cat:"Dijes",price:28000,img:"images/dije-10.jpg",sizes:["Único"]},

  // ===== ARITOS =====
  {id:41,name:"Arito 1",cat:"Aritos",price:30000,img:"images/arito-1.jpg",sizes:["Único"]},
  {id:42,name:"Arito 2",cat:"Aritos",price:30000,img:"images/arito-2.jpg",sizes:["Único"]},
  {id:43,name:"Arito 3",cat:"Aritos",price:30000,img:"images/arito-3.jpg",sizes:["Único"]},
  {id:44,name:"Arito 4",cat:"Aritos",price:30000,img:"images/arito-4.jpg",sizes:["Único"]},
  {id:45,name:"Arito 5",cat:"Aritos",price:30000,img:"images/arito-5.jpg",sizes:["Único"]},
  {id:46,name:"Arito 6",cat:"Aritos",price:30000,img:"images/arito-6.jpg",sizes:["Único"]},
  {id:47,name:"Arito 7",cat:"Aritos",price:30000,img:"images/arito-7.jpg",sizes:["Único"]},
  {id:48,name:"Arito 8",cat:"Aritos",price:30000,img:"images/arito-8.jpg",sizes:["Único"]},
  {id:49,name:"Arito 9",cat:"Aritos",price:30000,img:"images/arito-9.jpg",sizes:["Único"]},
  {id:50,name:"Arito 10",cat:"Aritos",price:30000,img:"images/arito-10.jpg",sizes:["Único"]}
];

// ===============================
// VARIABLES
// ===============================

let cart = JSON.parse(localStorage.getItem("gf_cart") || "[]");
let category = "Todos";
let current = null;

const money = n => "$" + n.toLocaleString("es-AR");

const save = () =>
  localStorage.setItem("gf_cart", JSON.stringify(cart));

// ===============================
// CATEGORÍAS
// ===============================

function setCategory(cat) {
  category = cat;

  document.querySelectorAll(".filter").forEach(x => {
    x.classList.toggle("active", x.dataset.cat === cat);
  });

  render();

  document.getElementById("catalogo")
    .scrollIntoView({behavior:"smooth"});
}

// ===============================
// PRODUCTOS
// ===============================

function render() {

  let list =
    category === "Todos"
      ? [...products]
      : products.filter(p => p.cat === category);

  const sort = document.getElementById("sort").value;

  if (sort === "low")
    list.sort((a,b) => a.price - b.price);

  if (sort === "high")
    list.sort((a,b) => b.price - a.price);

  document.getElementById("catTitle").textContent =
    category === "Todos"
      ? "Todos los productos"
      : category;

  document.getElementById("grid").innerHTML =
    list.map(p => `
      <article class="card" onclick="openProduct(${p.id})">

        <div class="card-img">

          ${p.badge
            ? `<span class="badge">${p.badge}</span>`
            : ""
          }

          <button
            class="heart"
            onclick="event.stopPropagation()">
            ♡
          </button>

          <img
            src="${p.img}"
            alt="${p.name}"
            loading="lazy">

        </div>

        <div class="card-info">

          <small>${p.cat}</small>

          <h3>${p.name}</h3>

          <div class="price">
            ${money(p.price)}
          </div>

        </div>

      </article>
    `).join("");
}

// ===============================
// FILTROS
// ===============================

document.querySelectorAll(".filter").forEach(b => {

  b.onclick = () => {

    document
      .querySelectorAll(".filter")
      .forEach(x => x.classList.remove("active"));

    b.classList.add("active");

    category = b.dataset.cat;

    render();

    document
      .querySelector(".filters")
      ?.classList.remove("show");
  };

});

document.getElementById("sort").onchange = render;

// ===============================
// PRODUCTO
// ===============================

function openProduct(id) {

  current = products.find(p => p.id === id);

  document.getElementById("mImg").src = current.img;
  document.getElementById("mCat").textContent = current.cat;
  document.getElementById("mName").textContent = current.name;
  document.getElementById("mPrice").textContent = money(current.price);

  document.getElementById("sizes").innerHTML =
    current.sizes.map((s,i) => `
      <button
        class="size ${i === 0 ? "selected" : ""}"
        onclick="selectSize(this)">
        ${s}
      </button>
    `).join("");

  document
    .getElementById("modal")
    .classList.add("show");
}

function selectSize(el) {

  document
    .querySelectorAll(".size")
    .forEach(x => x.classList.remove("selected"));

  el.classList.add("selected");
}

document.getElementById("modalClose").onclick = () =>
  document.getElementById("modal").classList.remove("show");

document.getElementById("modal").onclick = e => {

  if (e.target.id === "modal")
    e.currentTarget.classList.remove("show");

};

document.getElementById("mAdd").onclick = () => {

  add(current.id);

  document
    .getElementById("modal")
    .classList.remove("show");

  openCart();
};

// ===============================
// CARRITO
// ===============================

function add(id) {

  let x = cart.find(a => a.id === id);

  if (x)
    x.qty++;
  else
    cart.push({id,qty:1});

  save();
  renderCart();
}

function qty(id,n) {

  let x = cart.find(a => a.id === id);

  if (!x) return;

  x.qty += n;

  if (x.qty < 1)
    cart = cart.filter(a => a.id !== id);

  save();
  renderCart();
}

function remove(id) {

  cart = cart.filter(a => a.id !== id);

  save();
  renderCart();
}

function renderCart() {

  document.getElementById("cartCount").textContent =
    cart.reduce((a,x) => a + x.qty, 0);

  const box = document.getElementById("cartItems");

  if (!cart.length) {

    box.innerHTML = `
      <div style="
        text-align:center;
        color:#999;
        padding:70px 10px;
        font-size:12px">
        Tu carrito está vacío.
      </div>
    `;

  } else {

    box.innerHTML = cart.map(x => {

      let p = products.find(a => a.id === x.id);

      return `
        <div class="cart-row">

          <img src="${p.img}">

          <div>

            <h4>${p.name}</h4>

            <small>${money(p.price)}</small>

            <div class="qty">

              <button onclick="qty(${p.id},-1)">
                −
              </button>

              <span>${x.qty}</span>

              <button onclick="qty(${p.id},1)">
                +
              </button>

            </div>

          </div>

          <button
            class="remove"
            onclick="remove(${p.id})">
            ×
          </button>

        </div>
      `;

    }).join("");
  }

  let total = cart.reduce(
    (a,x) =>
      a +
      products.find(p => p.id === x.id).price * x.qty,
    0
  );

  document.getElementById("total").textContent =
    money(total);
}

// ===============================
// CARRITO ABRIR / CERRAR
// ===============================

function openCart() {

  document
    .getElementById("drawer")
    .classList.add("open");

  document
    .getElementById("shade")
    .classList.add("show");
}

function closeCart() {

  document
    .getElementById("drawer")
    .classList.remove("open");

  document
    .getElementById("shade")
    .classList.remove("show");
}

document.getElementById("openCart").onclick = openCart;

document.getElementById("closeCart").onclick = closeCart;

document.getElementById("shade").onclick = closeCart;

document.getElementById("empty").onclick = () => {

  cart = [];

  save();

  renderCart();
};

// ===============================
// PEDIDO → INSTAGRAM
// ===============================

document.getElementById("buy").onclick = () => {

  window.open(CONFIG.instagram, "_blank");

};

// ===============================
// CONSULTAS → WHATSAPP
// ===============================

document.getElementById("contactBtn").href =
  CONFIG.whatsapp;

document.getElementById("sideInstagram").href =
  CONFIG.whatsapp;

// ===============================
// MENÚ CELULAR
// ===============================

document.getElementById("mobileMenu").onclick = () => {

  let n = document.getElementById("nav");

  n.style.display =
    n.style.display === "flex"
      ? "none"
      : "flex";
};

document.getElementById("filterMobile").onclick = () => {

  document
    .querySelector(".filters")
    .classList.add("show");

};

document.getElementById("closeFilters").onclick = () => {

  document
    .querySelector(".filters")
    .classList.remove("show");

};

// ===============================
// INICIAR
// ===============================

render();
renderCart();
