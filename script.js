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

  {
    id: 11,
    name: "Pulsera 1",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-1.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 12,
    name: "Pulsera 2",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-2.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 13,
    name: "Pulsera 3",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-3.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 14,
    name: "Pulsera 4",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-4.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 15,
    name: "Pulsera 5",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-5.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 16,
    name: "Pulsera 6",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-6.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 17,
    name: "Pulsera 7",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-7.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 18,
    name: "Pulsera 8",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-8.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 19,
    name: "Pulsera 9",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-9.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 20,
    name: "Pulsera 10",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera-10.jpg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  // ===== ANILLOS =====

  {
    id: 21,
    name: "Anillo 1",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-1.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 22,
    name: "Anillo 2",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-2.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 23,
    name: "Anillo 3",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-3.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 24,
    name: "Anillo 4",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-4.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 25,
    name: "Anillo 5",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-5.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 26,
    name: "Anillo 6",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-6.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 27,
    name: "Anillo 7",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-7.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 28,
    name: "Anillo 8",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-8.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 29,
    name: "Anillo 9",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-9.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 30,
    name: "Anillo 10",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo-10.jpg",
    sizes: ["16", "18", "20", "22"]
  },

  // ===== DIJES =====

  {
    id: 31,
    name: "Dije 1",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-1.jpg",
    sizes: ["Único"]
  },

  {
    id: 32,
    name: "Dije 2",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-2.jpg",
    sizes: ["Único"]
  },

  {
    id: 33,
    name: "Dije 3",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-3.jpg",
    sizes: ["Único"]
  },

  {
    id: 34,
    name: "Dije 4",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-4.jpg",
    sizes: ["Único"]
  },

  {
    id: 35,
    name: "Dije 5",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-5.jpg",
    sizes: ["Único"]
  },

  {
    id: 36,
    name: "Dije 6",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-6.jpg",
    sizes: ["Único"]
  },

  {
    id: 37,
    name: "Dije 7",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-7.jpg",
    sizes: ["Único"]
  },

  {
    id: 38,
    name: "Dije 8",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-8.jpg",
    sizes: ["Único"]
  },

  {
    id: 39,
    name: "Dije 9",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-9.jpg",
    sizes: ["Único"]
  },

  {
    id: 40,
    name: "Dije 10",
    cat: "Dijes",
    price: 28000,
    img: "images/dije-10.jpg",
    sizes: ["Único"]
  },

  // ===== ARITOS =====

  {
    id: 41,
    name: "Arito 1",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-1.jpg",
    sizes: ["Único"]
  },

  {
    id: 42,
    name: "Arito 2",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-2.jpg",
    sizes: ["Único"]
  },

  {
    id: 43,
    name: "Arito 3",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-3.jpg",
    sizes: ["Único"]
  },

  {
    id: 44,
    name: "Arito 4",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-4.jpg",
    sizes: ["Único"]
  },

  {
    id: 45,
    name: "Arito 5",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-5.jpg",
    sizes: ["Único"]
  },

  {
    id: 46,
    name: "Arito 6",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-6.jpg",
    sizes: ["Único"]
  },

  {
    id: 47,
    name: "Arito 7",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-7.jpg",
    sizes: ["Único"]
  },

  {
    id: 48,
    name: "Arito 8",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-8.jpg",
    sizes: ["Único"]
  },

  {
    id: 49,
    name: "Arito 9",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-9.jpg",
    sizes: ["Único"]
  },

  {
    id: 50,
    name: "Arito 10",
    cat: "Aritos",
    price: 30000,
    img: "images/arito-10.jpg",
    sizes: ["Único"]
  }
];

// ===============================
// CARRITO
// ===============================

let cart = JSON.parse(localStorage.getItem("gf_cart") || "[]");
let category = "Todos";
let current = null;

const money = n => "$" + Number(n).toLocaleString("es-AR");

function save() {
  localStorage.setItem("gf_cart", JSON.stringify(cart));
}

// ===============================
// CATEGORÍAS
// ===============================

function setCategory(cat) {
  category = cat;

  document.querySelectorAll("[data-category]").forEach(btn => {
    btn.classList.toggle("active", btn.dataset.category === cat);
  });

  render();
}

// ===============================
// RENDER PRODUCTOS
// ===============================

function render() {
  const grid = document.querySelector("#productGrid");
  if (!grid) return;

  const list = category === "Todos"
    ? products
    : products.filter(p => p.cat === category);

  grid.innerHTML = list.map(product => `
    <article class="product-card" onclick="openProduct(${product.id})">
      <div class="product-image">
        <img
          src="${product.img}"
          alt="${product.name}"
          onerror="this.style.display='none'"
        >
      </div>

      <div class="product-info">
        <span class="product-category">${product.cat}</span>
        <h3>${product.name}</h3>
        <strong>${money(product.price)}</strong>
      </div>
    </article>
  `).join("");
}

// ===============================
// MODAL PRODUCTO
// ===============================

function openProduct(id) {
  current = products.find(p => p.id === id);
  if (!current) return;

  const modal = document.querySelector("#productModal");
  if (!modal) return;

  const title = modal.querySelector(".modal-title");
  const image = modal.querySelector(".modal-image");
  const price = modal.querySelector(".modal-price");
  const sizes = modal.querySelector(".size-options");

  if (title) title.textContent = current.name;
  if (image) {
    image.src = current.img;
    image.alt = current.name;
  }

  if (price) price.textContent = money(current.price);

  if (sizes) {
    sizes.innerHTML = current.sizes.map(size => `
      <button class="size-btn" onclick="selectSize('${size}', this)">
        ${size}
      </button>
    `).join("");
  }

  modal.classList.add("active");
}

function selectSize(size, button) {
  document.querySelectorAll(".size-btn").forEach(btn => {
    btn.classList.remove("active");
  });

  button.classList.add("active");

  if (current) {
    current.selectedSize = size;
  }
}

function closeProduct() {
  const modal = document.querySelector("#productModal");
  if (modal) modal.classList.remove("active");

  current = null;
}

// ===============================
// AGREGAR AL CARRITO
// ===============================

function addToCart() {
  if (!current) return;

  const selectedButton = document.querySelector(".size-btn.active");

  if (!selectedButton) {
    alert("Seleccioná un tamaño antes de agregar el producto.");
    return;
  }

  const size = selectedButton.textContent.trim();

  const existing = cart.find(
    item => item.id === current.id && item.size === size
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
// CARRITO
// ===============================

function renderCart() {
  const container = document.querySelector("#cartItems");
  const totalElement = document.querySelector("#cartTotal");
  const countElement = document.querySelector("#cartCount");

  if (!container) return;

  if (cart.length === 0) {
    container.innerHTML = `
      <div class="empty-cart">
        <p>Tu carrito está vacío.</p>
      </div>
    `;
  } else {
    container.innerHTML = cart.map((item, index) => `
      <div class="cart-item">

        <img src="${item.img}" alt="${item.name}">

        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>Tamaño: ${item.size}</p>
          <strong>${money(item.price)}</strong>

          <div class="cart-controls">
            <button onclick="changeQty(${index}, -1)">−</button>
            <span>${item.qty}</span>
            <button onclick="changeQty(${index}, 1)">+</button>
            <button onclick="removeFromCart(${index})">Eliminar</button>
          </div>
        </div>

      </div>
    `).join("");
  }

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  const count = cart.reduce(
    (sum, item) => sum + item.qty,
    0
  );

  if (totalElement) totalElement.textContent = money(total);
  if (countElement) countElement.textContent = count;
}

function changeQty(index, amount) {
  if (!cart[index]) return;

  cart[index].qty += amount;

  if (cart[index].qty <= 0) {
    cart.splice(index, 1);
  }

  save();
  renderCart();
}

function removeFromCart(index) {
  cart.splice(index, 1);
  save();
  renderCart();
}

function emptyCart() {
  if (cart.length === 0) return;

  if (confirm("¿Querés vaciar el carrito?")) {
    cart = [];
    save();
    renderCart();
  }
}

function openCart() {
  const cartPanel = document.querySelector("#cartPanel");

  if (cartPanel) {
    cartPanel.classList.add("active");
  }

  renderCart();
}

function closeCart() {
  const cartPanel = document.querySelector("#cartPanel");

  if (cartPanel) {
    cartPanel.classList.remove("active");
  }
}

// ===============================
// PEDIDO
// ===============================

function buildOrderMessage() {
  if (cart.length === 0) {
    return "Hola GoldenFiine, quiero consultar por algunos productos.";
  }

  let message = "Hola GoldenFiine 👋\n\n";
  message += "Quiero hacer el siguiente pedido:\n\n";

  cart.forEach(item => {
    message += `• ${item.name}\n`;
    message += `  Tamaño: ${item.size}\n`;
    message += `  Cantidad: ${item.qty}\n`;
    message += `  Precio: ${money(item.price * item.qty)}\n\n`;
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.qty,
    0
  );

  message += `Total: ${money(total)}\n\n`;
  message += "¿Me pueden confirmar disponibilidad?";

  return message;
}

// ===============================
// WHATSAPP
// ===============================

function sendWhatsApp() {
  const message = encodeURIComponent(buildOrderMessage());

  window.open(
    `${CONFIG.whatsapp}?text=${message}`,
    "_blank"
  );
}

// ===============================
// INSTAGRAM
// ===============================

function sendInstagram() {
  window.open(CONFIG.instagramDM, "_blank");
}

// ===============================
// CONTACTO
// ===============================

function contactInstagram() {
  window.open(CONFIG.instagram, "_blank");
}

function createInstagramButton() {
  const buttons = document.querySelectorAll("[data-instagram]");

  buttons.forEach(button => {
    button.addEventListener("click", sendInstagram);
  });
}

// ===============================
// FILTROS
// ===============================

function setupFilters() {
  document.querySelectorAll("[data-category]").forEach(button => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.category);
    });
  });
}

// ===============================
// MENÚ MOBILE
// ===============================

function setupMobileMenu() {
  const menuButton = document.querySelector("#menuButton");
  const mobileMenu = document.querySelector("#mobileMenu");

  if (!menuButton || !mobileMenu) return;

  menuButton.addEventListener("click", () => {
    mobileMenu.classList.toggle("active");
  });
}

// ===============================
// CERRAR MODAL AL HACER CLICK AFUERA
// ===============================

function setupModal() {
  const modal = document.querySelector("#productModal");

  if (!modal) return;

  modal.addEventListener("click", event => {
    if (event.target === modal) {
      closeProduct();
    }
  });
}

// ===============================
// INICIO
// ===============================

document.addEventListener("DOMContentLoaded", () => {
  setupFilters();
  setupMobileMenu();
  setupModal();
  createInstagramButton();

  render();
  renderCart();
});
