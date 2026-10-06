// ===============================
// GOLDENFIINE
// ===============================

const CONFIG = {
  instagram: "https://www.instagram.com/joyas_goldenfiine/",
  instagramDM: "https://ig.me/m/joyas_goldenfiine",
  whatsapp: "https://wa.me/5491153894764"
};

// ===============================
// PRODUCTOS
// ===============================

const products = [

  // ===== CADENAS =====

  {
    id: 1,
    name: "Rosario enchapado brasileño 18k",
    cat: "Cadenas",
    price: 45000,
    img: "Rosario enchapado brasileño18k.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 2,
    name: "Cadena espiga con cierre mosquetón",
    cat: "Cadenas",
    price: 45000,
    img: "cadena espiga con cierre mosqueton.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 3,
    name: "Cadena París con cierre marinero",
    cat: "Cadenas",
    price: 45000,
    img: "cadena paris con cierre marinero.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 4,
    name: "Cadena Singapur fina enchapada 18k",
    cat: "Cadenas",
    price: 45000,
    img: "cadena singapur fina enchapada 18k.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 5,
    name: "Cadena triple gourmet con cierre mosquetón",
    cat: "Cadenas",
    price: 45000,
    img: "cadena triple gourmet con cierre mosqueton.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 6,
    name: "Combo cadena París plana enchapada 18k",
    cat: "Cadenas",
    price: 45000,
    img: "combo cadena paris plana enchapada 18k.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 7,
    name: "Juliana con cierre marinero",
    cat: "Cadenas",
    price: 45000,
    img: "juliana con cierre marinero.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 8,
    name: "Tourbillon con puntera Versace",
    cat: "Cadenas",
    price: 45000,
    img: "tourbillon con puntera versace.jpeg",
    sizes: ["45 cm", "50 cm", "55 cm"]
  },

  {
    id: 9,
    name: "Conjunto Collar Triple Cadena Singapur Torzada + Dije Cruz 3D - Oro 18k",
    cat: "Cadenas",
    price: 45000,
    img: "Conjunto Collar Triple Cadena Singapur Torzada + Dije Cruz 3D - Oro 18k - 45cm + 50cm + 60cm.jpeg",
    sizes: ["45 cm + 50 cm + 60 cm"]
  },

  {
    id: 10,
    name: "Cadena Rolo Gruesa 60cm - Oro 18k",
    cat: "Cadenas",
    price: 45000,
    img: "cadena-rolo-gruesa-60cm-Oro -18k.jpeg",
    sizes: ["60 cm"]
  },

  // ===== PULSERAS =====

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 11 + i,
    name: `Pulsera ${i + 1}`,
    cat: "Pulseras",
    price: 38000,
    img: `images/pulsera-${i + 1}.jpg`,
    sizes: ["18 cm", "20 cm", "22 cm"]
  })),

  // ===== ANILLOS =====

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 21 + i,
    name: `Anillo ${i + 1}`,
    cat: "Anillos",
    price: 35000,
    img: `images/anillo-${i + 1}.jpg`,
    sizes: ["16", "18", "20", "22"]
  })),

  // ===== DIJES =====

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 31 + i,
    name: `Dije ${i + 1}`,
    cat: "Dijes",
    price: 28000,
    img: `images/dije-${i + 1}.jpg`,
    sizes: ["Único"]
  })),

  // ===== ARITOS =====

  ...Array.from({ length: 10 }, (_, i) => ({
    id: 41 + i,
    name: `Arito ${i + 1}`,
    cat: "Aritos",
    price: 30000,
    img: `images/arito-${i + 1}.jpg`,
    sizes: ["Único"]
  }))
];

// ===============================
// VARIABLES
// ===============================

let cart = JSON.parse(localStorage.getItem("gf_cart") || "[]");
let category = "Todos";
let current = null;

const money = n =>
  "$" + Number(n).toLocaleString("es-AR");

// ===============================
// GUARDAR CARRITO
// ===============================

function save() {
  localStorage.setItem("gf_cart", JSON.stringify(cart));
}

// ===============================
// CATEGORÍAS
// ===============================

function setCategory(cat) {
  category = cat;

  document.querySelectorAll("[data-cat]").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.cat === cat
    );
  });

  const title = document.querySelector("#catTitle");

  if (title) {
    title.textContent =
      cat === "Todos"
        ? "Todos los productos"
        : cat;
  }

  render();

  const catalogo = document.querySelector("#catalogo");

  if (catalogo) {
    catalogo.scrollIntoView({
      behavior: "smooth"
    });
  }
}

// ===============================
// MOSTRAR PRODUCTOS
// ===============================

function render() {

  const grid = document.querySelector("#grid");

  if (!grid) return;

  let list =
    category === "Todos"
      ? products
      : products.filter(
          product => product.cat === category
        );

  // Ordenamiento
  const sort = document.querySelector("#sort");

  if (sort) {

    if (sort.value === "low") {
      list.sort((a, b) => a.price - b.price);
    }

    if (sort.value === "high") {
      list.sort((a, b) => b.price - a.price);
    }
  }

  grid.innerHTML = list.map(product => `

    <article
      class="product-card"
      onclick="openProduct(${product.id})"
    >

      <div class="product-image">

        <img
          src="${product.img}"
          alt="${product.name}"
          onerror="this.style.display='none'"
        >

      </div>

      <div class="product-info">

        <span class="product-category">
          ${product.cat}
        </span>

        <h3>
          ${product.name}
        </h3>

        <strong>
          ${money(product.price)}
        </strong>

      </div>

    </article>

  `).join("");
}

// ===============================
// ABRIR PRODUCTO
// ===============================

function openProduct(id) {

  current = products.find(
    product => product.id === id
  );

  if (!current) return;

  const modal = document.querySelector("#modal");

  if (!modal) return;

  const image = document.querySelector("#mImg");
  const cat = document.querySelector("#mCat");
  const name = document.querySelector("#mName");
  const price = document.querySelector("#mPrice");
  const sizes = document.querySelector("#sizes");

  if (image) {
    image.src = current.img;
    image.alt = current.name;
  }

  if (cat) {
    cat.textContent = current.cat;
  }

  if (name) {
    name.textContent = current.name;
  }

  if (price) {
    price.textContent = money(current.price);
  }

  if (sizes) {

    sizes.innerHTML = current.sizes.map(size => `

      <button
        class="size-btn"
        onclick="selectSize('${size}', this)"
      >
        ${size}
      </button>

    `).join("");

  }

  modal.classList.add("active");
}

// ===============================
// SELECCIONAR TALLE
// ===============================

function selectSize(size, button) {

  document
    .querySelectorAll(".size-btn")
    .forEach(btn =>
      btn.classList.remove("active")
    );

  button.classList.add("active");

  if (current) {
    current.selectedSize = size;
  }
}

// ===============================
// CERRAR MODAL
// ===============================

function closeProduct() {

  const modal =
    document.querySelector("#modal");

  if (modal) {
    modal.classList.remove("active");
  }

  current = null;
}

// ===============================
// AGREGAR AL CARRITO
// ===============================

function addToCart() {

  if (!current) return;

  const selected =
    document.querySelector(".size-btn.active");

  if (!selected) {

    alert(
      "Seleccioná una medida antes de agregar el producto."
    );

    return;
  }

  const size =
    selected.textContent.trim();

  const existing = cart.find(item =>
    item.id === current.id &&
    item.size === size
  );

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      id: current.id,
      name: current.name,
      price: current.price,
      img: current.img,
      size: size,
      qty: 1
    });

  }

  save();
  renderCart();
  closeProduct();
  openCart();
}

// ===============================
// MOSTRAR CARRITO
// ===============================

function renderCart() {

  const container =
    document.querySelector("#cartItems");

  const totalElement =
    document.querySelector("#total");

  const countElement =
    document.querySelector("#cartCount");

  if (!container) return;

  if (cart.length === 0) {

    container.innerHTML = `
      <div class="empty-cart">
        <p>Tu carrito está vacío.</p>
      </div>
    `;

  } else {

    container.innerHTML = cart.map(
      (item, index) => `

      <div class="cart-item">

        <img
          src="${item.img}"
          alt="${item.name}"
        >

        <div class="cart-item-info">

          <h4>
            ${item.name}
          </h4>

          <p>
            Tamaño: ${item.size}
          </p>

          <strong>
            ${money(item.price * item.qty)}
          </strong>

          <div class="cart-controls">

            <button
              onclick="changeQty(${index}, -1)"
            >
              −
            </button>

            <span>
              ${item.qty}
            </span>

            <button
              onclick="changeQty(${index}, 1)"
            >
              +
            </button>

            <button
              onclick="removeFromCart(${index})"
            >
              Eliminar
            </button>

          </div>

        </div>

      </div>

    `
    ).join("");
  }

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  const count = cart.reduce(
    (sum, item) =>
      sum + item.qty,
    0
  );

  if (totalElement) {
    totalElement.textContent =
      money(total);
  }

  if (countElement) {
    countElement.textContent =
      count;
  }
}

// ===============================
// CANTIDAD
// ===============================

function changeQty(index, amount) {

  if (!cart[index]) return;

  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  save();
  renderCart();
}

// ===============================
// ELIMINAR
// ===============================

function removeFromCart(index) {

  cart.splice(index, 1);

  save();
  renderCart();
}

// ===============================
// VACIAR CARRITO
// ===============================

function emptyCart() {

  if (cart.length === 0) return;

  if (
    confirm(
      "¿Querés vaciar el carrito?"
    )
  ) {

    cart = [];

    save();
    renderCart();
  }
}

// ===============================
// ABRIR CARRITO
// ===============================

function openCart() {

  const drawer =
    document.querySelector("#drawer");

  const shade =
    document.querySelector("#shade");

  if (drawer) {
    drawer.classList.add("active");
  }

  if (shade) {
    shade.classList.add("active");
  }

  renderCart();
}

// ===============================
// CERRAR CARRITO
// ===============================

function closeCart() {

  const drawer =
    document.querySelector("#drawer");

  const shade =
    document.querySelector("#shade");

  if (drawer) {
    drawer.classList.remove("active");
  }

  if (shade) {
    shade.classList.remove("active");
  }
}

// ===============================
// MENSAJE WHATSAPP
// ===============================

function buildOrderMessage() {

  if (cart.length === 0) {

    return `
Hola GOLDENFIINE 👋

Quiero consultar por algunos productos.
`;
  }

  let message =
    "Hola GOLDENFIINE 👋\n\n";

  message +=
    "Quiero consultar por este pedido:\n\n";

  cart.forEach(item => {

    message +=
      `• ${item.name}\n`;

    message +=
      `  Medida: ${item.size}\n`;

    message +=
      `  Cantidad: ${item.qty}\n`;

    message +=
      `  Precio: ${money(
        item.price * item.qty
      )}\n\n`;
  });

  const total = cart.reduce(
    (sum, item) =>
      sum + item.price * item.qty,
    0
  );

  message +=
    `Total: ${money(total)}\n\n`;

  message +=
    "¿Me pueden confirmar disponibilidad?";

  return message;
}

// ===============================
// WHATSAPP
// ===============================

function sendWhatsApp() {

  const message =
    encodeURIComponent(
      buildOrderMessage()
    );

  window.open(
    `${CONFIG.whatsapp}?text=${message}`,
    "_blank"
  );
}

// ===============================
// INSTAGRAM
// ===============================

function sendInstagram() {

  window.open(
    CONFIG.instagramDM,
    "_blank"
  );
}

// ===============================
// INICIO
// ===============================

document.addEventListener(
  "DOMContentLoaded",
  () => {

    // FILTROS
    document
      .querySelectorAll("[data-cat]")
      .forEach(button => {

        button.addEventListener(
          "click",
          () => {

            setCategory(
              button.dataset.cat
            );

          }
        );

      });

    // ORDENAR
    const sort =
      document.querySelector("#sort");

    if (sort) {

      sort.addEventListener(
        "change",
        render
      );

    }

    // BOTÓN CARRITO
    const openCartButton =
      document.querySelector("#openCart");

    if (openCartButton) {

      openCartButton.addEventListener(
        "click",
        openCart
      );

    }

    // CERRAR CARRITO
    const closeCartButton =
      document.querySelector("#closeCart");

    if (closeCartButton) {

      closeCartButton.addEventListener(
        "click",
        closeCart
      );

    }

    // FONDO CARRITO
    const shade =
      document.querySelector("#shade");

    if (shade) {

      shade.addEventListener(
        "click",
        closeCart
      );

    }

    // VACIAR
    const emptyButton =
      document.querySelector("#empty");

    if (emptyButton) {

      emptyButton.addEventListener(
        "click",
        emptyCart
      );

    }

    // COMPRAR / WHATSAPP
    const buyButton =
      document.querySelector("#buy");

    if (buyButton) {

      buyButton.addEventListener(
        "click",
        sendWhatsApp
      );

    }

    // AGREGAR AL CARRITO
    const addButton =
      document.querySelector("#mAdd");

    if (addButton) {

      addButton.addEventListener(
        "click",
        addToCart
      );

    }

    // CERRAR MODAL
    const modalClose =
      document.querySelector("#modalClose");

    if (modalClose) {

      modalClose.addEventListener(
        "click",
        closeProduct
      );

    }

    // CERRAR MODAL AL TOCAR AFUERA
    const modal =
      document.querySelector("#modal");

    if (modal) {

      modal.addEventListener(
        "click",
        event => {

          if (event.target === modal) {
            closeProduct();
          }

        }
      );

    }

    // MENÚ CELULAR
    const mobileMenu =
      document.querySelector("#mobileMenu");

    const nav =
      document.querySelector("#nav");

    if (mobileMenu && nav) {

      mobileMenu.addEventListener(
        "click",
        () => {

          nav.classList.toggle("active");

        }
      );

    }

    // BOTÓN FILTRAR EN CELULAR
    const filterMobile =
      document.querySelector("#filterMobile");

    const filters =
      document.querySelector("#filters");

    if (filterMobile && filters) {

      filterMobile.addEventListener(
        "click",
        () => {

          filters.classList.add("active");

        }
      );

    }

    // CERRAR FILTROS
    const closeFilters =
      document.querySelector("#closeFilters");

    if (closeFilters && filters) {

      closeFilters.addEventListener(
        "click",
        () => {

          filters.classList.remove("active");

        }
      );

    }

    // CARGAR PRODUCTOS
    render();

    // CARGAR CARRITO
    renderCart();

  }
);
