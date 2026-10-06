const products = [

  /* =========================
     CADENAS
  ========================== */

  {
    id: 1,
    name: "Rosario Enchapado Brasileño 18K",
    category: "Cadenas",
    price: 45000,
    img: "Rosario enchapado brasileño18k.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 2,
    name: "Cadena Espiga",
    category: "Cadenas",
    price: 45000,
    img: "cadena espiga con cierre mosqueton.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 3,
    name: "Cadena París",
    category: "Cadenas",
    price: 45000,
    img: "cadena paris con cierre marinero.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 4,
    name: "Cadena Singapur Fina",
    category: "Cadenas",
    price: 45000,
    img: "cadena singapur fina enchapada 18k.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 5,
    name: "Cadena Triple Gourmet",
    category: "Cadenas",
    price: 45000,
    img: "cadena triple gourmet con cierre mosqueton.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 6,
    name: "Combo Cadena París Plana",
    category: "Cadenas",
    price: 45000,
    img: "combo cadena paris plana enchapada 18k.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 7,
    name: "Juliana",
    category: "Cadenas",
    price: 45000,
    img: "juliana con cierre marinero.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 8,
    name: "Tourbillon con Puntera Versace",
    category: "Cadenas",
    price: 45000,
    img: "tourbillon con puntera versace.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 9,
    name: "Conjunto Triple Cadena Singapur",
    category: "Cadenas",
    price: 45000,
    img: "Conjunto Collar Triple Cadena Singapur Torzada + Dije Cruz 3D - Oro 18k - 45cm + 50cm + 60cm.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },

  {
    id: 10,
    name: "Cadena Rolo Gruesa 60cm",
    category: "Cadenas",
    price: 45000,
    img: "cadena-rolo-gruesa-60cm-Oro -18k.jpeg",
    sizes: ["60 cm"]
  },


  /* =========================
     PULSERAS
  ========================== */

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 101 + i,
    name: `Pulsera ${i + 1}`,
    category: "Pulseras",
    price: 38000,
    img: `images/pulsera-${i + 1}.jpg`,
    sizes: ["16 cm", "18 cm", "20 cm"]
  })),


  /* =========================
     ANILLOS
  ========================== */

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 201 + i,
    name: `Anillo ${i + 1}`,
    category: "Anillos",
    price: 35000,
    img: `images/anillo-${i + 1}.jpg`,
    sizes: ["16", "18", "20", "22"]
  })),


  /* =========================
     DIJES
  ========================== */

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 301 + i,
    name: `Dije ${i + 1}`,
    category: "Dijes",
    price: 28000,
    img: `images/dije-${i + 1}.jpg`,
    sizes: ["Único"]
  })),


  /* =========================
     ARITOS
  ========================== */

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 401 + i,
    name: `Arito ${i + 1}`,
    category: "Aritos",
    price: 30000,
    img: `images/arito-${i + 1}.jpg`,
    sizes: ["Único"]
  }))

];


let currentCategory = "Todos";
let cart = [];
let selectedProduct = null;
let selectedSize = null;


/* =========================
   ELEMENTOS
========================= */

const grid = document.getElementById("grid");
const catTitle = document.getElementById("catTitle");
const sort = document.getElementById("sort");

const modal = document.getElementById("modal");
const mImg = document.getElementById("mImg");
const mCat = document.getElementById("mCat");
const mName = document.getElementById("mName");
const mPrice = document.getElementById("mPrice");
const sizes = document.getElementById("sizes");

const cartCount = document.getElementById("cartCount");
const cartItems = document.getElementById("cartItems");
const total = document.getElementById("total");

const drawer = document.getElementById("drawer");
const shade = document.getElementById("shade");


/* =========================
   PRECIO
========================= */

function money(value) {

  return "$" + value.toLocaleString("es-AR");

}


/* =========================
   PRODUCTOS
========================= */

function renderProducts() {

  let list = products.filter(product => {

    return currentCategory === "Todos"
      || product.category === currentCategory;

  });


  if (sort.value === "low") {

    list.sort((a, b) => a.price - b.price);

  }

  if (sort.value === "high") {

    list.sort((a, b) => b.price - a.price);

  }


  grid.innerHTML = "";


  list.forEach(product => {

    const card = document.createElement("article");

    card.className = "product-card";


    card.innerHTML = `

      <button
        class="product-open"
        data-id="${product.id}"
      >

        <div class="product-image">

          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
            onerror="this.style.display='none'"
          >

        </div>

        <div class="product-info">

          <p class="mini">
            ${product.category}
          </p>

          <h3>
            ${product.name}
          </h3>

          <strong>
            ${money(product.price)}
          </strong>

        </div>

      </button>

    `;


    grid.appendChild(card);

  });


  document
    .querySelectorAll(".product-open")
    .forEach(button => {

      button.addEventListener("click", () => {

        const id = Number(button.dataset.id);

        openProduct(id);

      });

    });

}


/* =========================
   CATEGORÍAS
========================= */

function setCategory(category) {

  currentCategory = category;


  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.cat === category
      );

    });


  if (category === "Todos") {

    catTitle.textContent = "Todos los productos";

  } else {

    catTitle.textContent = category;

  }


  renderProducts();


  document
    .getElementById("catalogo")
    .scrollIntoView({
      behavior: "smooth"
    });

}


document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.addEventListener("click", () => {

      setCategory(button.dataset.cat);

    });

  });


/* =========================
   ORDENAR
========================= */

sort.addEventListener("change", renderProducts);


/* =========================
   MODAL
========================= */

function openProduct(id) {

  selectedProduct =
    products.find(product => product.id === id);

  if (!selectedProduct) return;


  selectedSize =
    selectedProduct.sizes[0];


  mImg.src = selectedProduct.img;

  mImg.alt = selectedProduct.name;

  mCat.textContent = selectedProduct.category;

  mName.textContent = selectedProduct.name;

  mPrice.textContent =
    money(selectedProduct.price);


  sizes.innerHTML = "";


  selectedProduct.sizes.forEach(size => {

    const button =
      document.createElement("button");

    button.textContent = size;

    button.className =
      "size-option";


    if (size === selectedSize) {

      button.classList.add("active");

    }


    button.addEventListener("click", () => {

      selectedSize = size;

      document
        .querySelectorAll(".size-option")
        .forEach(item =>
          item.classList.remove("active")
        );

      button.classList.add("active");

    });


    sizes.appendChild(button);

  });


  modal.classList.add("open");

}


document
  .getElementById("modalClose")
  .addEventListener("click", () => {

    modal.classList.remove("open");

  });


modal.addEventListener("click", event => {

  if (event.target === modal) {

    modal.classList.remove("open");

  }

});


/* =========================
   CARRITO
========================= */

document
  .getElementById("mAdd")
  .addEventListener("click", () => {

    if (!selectedProduct) return;


    cart.push({

      ...selectedProduct,

      selectedSize

    });


    updateCart();

    modal.classList.remove("open");

    openCart();

  });


function updateCart() {

  cartItems.innerHTML = "";


  let cartTotal = 0;


  cart.forEach((item, index) => {

    cartTotal += item.price;


    const row =
      document.createElement("div");

    row.className = "cart-item";


    row.innerHTML = `

      <div>

        <strong>
          ${item.name}
        </strong>

        <span>
          ${item.selectedSize}
        </span>

        <small>
          ${money(item.price)}
        </small>

      </div>

      <button
        class="remove-item"
        data-index="${index}"
      >
        ×
      </button>

    `;


    cartItems.appendChild(row);

  });


  total.textContent =
    money(cartTotal);


  cartCount.textContent =
    cart.length;


  document
    .querySelectorAll(".remove-item")
    .forEach(button => {

      button.addEventListener("click", () => {

        const index =
          Number(button.dataset.index);

        cart.splice(index, 1);

        updateCart();

      });

    });

}


/* =========================
   ABRIR / CERRAR CARRITO
========================= */

function openCart() {

  drawer.classList.add("open");

  shade.classList.add("open");

}


function closeCart() {

  drawer.classList.remove("open");

  shade.classList.remove("open");

}


document
  .getElementById("openCart")
  .addEventListener("click", openCart);


document
  .getElementById("closeCart")
  .addEventListener("click", closeCart);


shade.addEventListener("click", closeCart);


/* =========================
   VACIAR
========================= */

document
  .getElementById("empty")
  .addEventListener("click", () => {

    cart = [];

    updateCart();

  });


/* =========================
   WHATSAPP
========================= */

document
  .getElementById("buy")
  .addEventListener("click", () => {

    if (cart.length === 0) {

      alert("El carrito está vacío.");

      return;

    }


    let message =
      "Hola GOLDENFIINE! Quiero consultar por:%0A%0A";


    cart.forEach(item => {

      message +=
        `• ${item.name} - ${item.selectedSize} - ${money(item.price)}%0A`;

    });


    const cartTotal =
      cart.reduce(
        (sum, item) => sum + item.price,
        0
      );


    message +=
      `%0ATotal: ${money(cartTotal)}`;


    window.open(
      `https://wa.me/5491153894764?text=${message}`,
      "_blank"
    );

  });


/* =========================
   MENÚ CELULAR
========================= */

document
  .getElementById("mobileMenu")
  .addEventListener("click", () => {

    document
      .getElementById("nav")
      .classList.toggle("open");

  });


/* =========================
   FILTROS CELULAR
========================= */

document
  .getElementById("filterMobile")
  .addEventListener("click", () => {

    document
      .getElementById("filters")
      .classList.add("open");

  });


document
  .getElementById("closeFilters")
  .addEventListener("click", () => {

    document
      .getElementById("filters")
      .classList.remove("open");

  });


/* =========================
   INICIO
========================= */

renderProducts();
updateCart();
