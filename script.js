const CONFIG = {
  instagram: "https://www.instagram.com/joyas_goldenfiine/",
  instagramDM: "https://ig.me/m/joyas_goldenfiine",
  whatsapp: "https://wa.me/5491153894764"
};

const products = [
  {
    id: 1,
    name: "Rosario enchapado brasileño 18k",
    cat: "Cadenas",
    price: 45000,
    img: "Rosario enchapado brasileño 18k.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
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
    sizes: ["45 cm", "50 cm", "60 cm"]
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
    name: "Cadena Triple Gourmet con cierre mosquetón",
    cat: "Cadenas",
    price: 45000,
    img: "cadena triple gourmet con cierre mosqueton.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 6,
    name: "Combo Cadena París plana enchapada 18k",
    cat: "Cadenas",
    price: 45000,
    img: "combo cadena paris plana enchapada 18k.jpeg",
    sizes: ["45 cm + 50 cm"]
  },
  {
    id: 7,
    name: "Juliana con cierre marinero",
    cat: "Cadenas",
    price: 45000,
    img: "juliana con cierre marinero.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 8,
    name: "Tourbillon con puntera Versace",
    cat: "Cadenas",
    price: 45000,
    img: "tourbillon con puntera versace.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
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
    img: "Cadena Rolo Gruesa 60cm - Oro 18k.jpeg",
    sizes: ["60 cm"]
  },

  {
    id: 11,
    name: "Pulsera Dorada Clásica",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera1.jpeg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },
  {
    id: 12,
    name: "Pulsera Miami",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera2.jpeg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },
  {
    id: 13,
    name: "Pulsera Eslabón",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera3.jpeg",
    sizes: ["18 cm", "20 cm"]
  },
  {
    id: 14,
    name: "Pulsera Premium",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera4.jpeg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },
  {
    id: 15,
    name: "Pulsera Doble",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera5.jpeg",
    sizes: ["18 cm", "20 cm"]
  },
  {
    id: 16,
    name: "Pulsera Cadena",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera6.jpeg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },
  {
    id: 17,
    name: "Pulsera Gold",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera7.jpeg",
    sizes: ["18 cm", "20 cm"]
  },
  {
    id: 18,
    name: "Pulsera Elegance",
    cat: "Pulseras",
    price: 38000,
    img: "images/pulsera8.jpeg",
    sizes: ["18 cm", "20 cm", "22 cm"]
  },

  {
    id: 19,
    name: "Anillo Dorado Clásico",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo1.jpeg",
    sizes: ["16", "18", "20", "22"]
  },
  {
    id: 20,
    name: "Anillo Premium",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo2.jpeg",
    sizes: ["16", "18", "20", "22"]
  },
  {
    id: 21,
    name: "Anillo Elegance",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo3.jpeg",
    sizes: ["16", "18", "20", "22"]
  },
  {
    id: 22,
    name: "Anillo Signet",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo4.jpeg",
    sizes: ["18", "20", "22", "24"]
  },
  {
    id: 23,
    name: "Anillo Luxury",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo5.jpeg",
    sizes: ["18", "20", "22"]
  },
  {
    id: 24,
    name: "Anillo Gold",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo6.jpeg",
    sizes: ["16", "18", "20", "22"]
  },
  {
    id: 25,
    name: "Anillo Royal",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo7.jpeg",
    sizes: ["18", "20", "22"]
  },
  {
    id: 26,
    name: "Anillo Classic",
    cat: "Anillos",
    price: 35000,
    img: "images/anillo8.jpeg",
    sizes: ["16", "18", "20", "22"]
  },

  {
    id: 27,
    name: "Dije Cruz Dorado",
    cat: "Dijes",
    price: 28000,
    img: "images/dije1.jpeg",
    sizes: ["Único"]
  },
  {
    id: 28,
    name: "Dije Corazón",
    cat: "Dijes",
    price: 28000,
    img: "images/dije2.jpeg",
    sizes: ["Único"]
  },
  {
    id: 29,
    name: "Dije Estrella",
    cat: "Dijes",
    price: 28000,
    img: "images/dije3.jpeg",
    sizes: ["Único"]
  },
  {
    id: 30,
    name: "Dije Infinito",
    cat: "Dijes",
    price: 28000,
    img: "images/dije4.jpeg",
    sizes: ["Único"]
  },
  {
    id: 31,
    name: "Dije Inicial",
    cat: "Dijes",
    price: 28000,
    img: "images/dije5.jpeg",
    sizes: ["Único"]
  },
  {
    id: 32,
    name: "Dije Cruz Premium",
    cat: "Dijes",
    price: 28000,
    img: "images/dije6.jpeg",
    sizes: ["Único"]
  },
  {
    id: 33,
    name: "Dije Medalla",
    cat: "Dijes",
    price: 28000,
    img: "images/dije7.jpeg",
    sizes: ["Único"]
  },
  {
    id: 34,
    name: "Dije Corona",
    cat: "Dijes",
    price: 28000,
    img: "images/dije8.jpeg",
    sizes: ["Único"]
  },

  {
    id: 35,
    name: "Aritos Dorados Clásicos",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos1.jpeg",
    sizes: ["Único"]
  },
  {
    id: 36,
    name: "Aritos Argolla",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos2.jpeg",
    sizes: ["Único"]
  },
  {
    id: 37,
    name: "Aritos Premium",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos3.jpeg",
    sizes: ["Único"]
  },
  {
    id: 38,
    name: "Aritos Corazón",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos4.jpeg",
    sizes: ["Único"]
  },
  {
    id: 39,
    name: "Aritos Estrella",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos5.jpeg",
    sizes: ["Único"]
  },
  {
    id: 40,
    name: "Aritos Elegance",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos6.jpeg",
    sizes: ["Único"]
  },
  {
    id: 41,
    name: "Aritos Gold",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos7.jpeg",
    sizes: ["Único"]
  },
  {
    id: 42,
    name: "Aritos Luxury",
    cat: "Aritos",
    price: 30000,
    img: "images/aritos8.jpeg",
    sizes: ["Único"]
  },

  {
    id: 43,
    name: "Cadena Premium Gold",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena1.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 44,
    name: "Cadena Eslabón",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena2.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 45,
    name: "Cadena Miami",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena3.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 46,
    name: "Cadena Royal",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena4.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 47,
    name: "Cadena Elegance",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena5.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 48,
    name: "Cadena Luxury",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena6.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 49,
    name: "Cadena Classic",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena7.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  },
  {
    id: 50,
    name: "Cadena Gold",
    cat: "Cadenas",
    price: 45000,
    img: "images/cadena8.jpeg",
    sizes: ["45 cm", "50 cm", "60 cm"]
  }
];

let currentCategory = "Cadenas";
let currentSort = "default";
let cart = [];

const $ = (selector) => document.querySelector(selector);
const $$ = (selector) => document.querySelectorAll(selector);

function formatPrice(price) {
  return "$" + Number(price).toLocaleString("es-AR");
}

function getProducts() {
  let result = products.filter(product => product.cat === currentCategory);

  if (currentSort === "price-low") {
    result.sort((a, b) => a.price - b.price);
  }

  if (currentSort === "price-high") {
    result.sort((a, b) => b.price - a.price);
  }

  if (currentSort === "name") {
    result.sort((a, b) => a.name.localeCompare(b.name));
  }

  return result;
}

function render() {
  const grid = $("#productGrid");

  if (!grid) return;

  const list = getProducts();

  if (!list.length) {
    grid.innerHTML = `
      <div class="empty-products">
        <h3>No hay productos disponibles</h3>
        <p>Estamos agregando nuevos productos.</p>
      </div>
    `;
    return;
  }

  grid.innerHTML = list.map(product => `
    <article class="product-card" onclick="openProduct(${product.id})">
      <div class="product-image">
        <img
          src="${product.img}"
          alt="${product.name}"
          loading="lazy"
          onerror="this.style.display='none'; this.parentElement.classList.add('image-error');"
        >
      </div>

      <div class="product-info">
        <div class="product-category">${product.cat}</div>
        <h3>${product.name}</h3>
        <div class="product-price">${formatPrice(product.price)}</div>
        <button class="product-button" onclick="event.stopPropagation(); openProduct(${product.id})">
          VER PRODUCTO
        </button>
      </div>
    </article>
  `).join("");
}

function setCategory(category) {
  currentCategory = category;
  currentSort = "default";

  $$(".filter").forEach(button => {
    button.classList.toggle(
      "active",
      button.dataset.cat === category
    );
  });

  const select = $("#sortSelect");
  if (select) {
    select.value = "default";
  }

  render();

  const productsSection = $("#productos");
  if (productsSection) {
    productsSection.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  }

  closeMobileMenu();
}

function openProduct(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const modal = $("#productModal");

  if (!modal) return;

  const image = $("#modalImage");
  const title = $("#modalTitle");
  const category = $("#modalCategory");
  const price = $("#modalPrice");
  const sizes = $("#modalSizes");

  if (image) {
    image.src = product.img;
    image.alt = product.name;
    image.onerror = function () {
      this.style.display = "none";
    };
  }

  if (title) {
    title.textContent = product.name;
  }

  if (category) {
    category.textContent = product.cat;
  }

  if (price) {
    price.textContent = formatPrice(product.price);
  }

  if (sizes) {
    sizes.innerHTML = product.sizes
      .map(size => `<button class="size-option">${size}</button>`)
      .join("");
  }

  modal.classList.add("show");
  document.body.classList.add("modal-open");

  createInstagramButton(product);
}

function closeProduct() {
  const modal = $("#productModal");

  if (modal) {
    modal.classList.remove("show");
  }

  document.body.classList.remove("modal-open");
}

function createInstagramButton(product) {
  const container = $("#instagramButtonContainer");

  if (!container) return;

  const message = encodeURIComponent(
    `Hola GOLDENFIINE, quiero consultar por ${product.name} - ${formatPrice(product.price)}`
  );

  container.innerHTML = `
    <a
      href="${CONFIG.instagramDM}"
      target="_blank"
      class="instagram-order-button"
    >
      CONSULTAR POR INSTAGRAM
    </a>
  `;
}

function addToCart(id) {
  const product = products.find(item => item.id === id);

  if (!product) return;

  const existing = cart.find(item => item.id === id);

  if (existing) {
    existing.quantity++;
  } else {
    cart.push({
      ...product,
      quantity: 1
    });
  }

  updateCart();
}

function removeFromCart(id) {
  cart = cart.filter(item => item.id !== id);
  updateCart();
}

function changeQuantity(id, amount) {
  const item = cart.find(product => product.id === id);

  if (!item) return;

  item.quantity += amount;

  if (item.quantity <= 0) {
    removeFromCart(id);
    return;
  }

  updateCart();
}

function updateCart() {
  const cartCount = $("#cartCount");
  const cartItems = $("#cartItems");
  const cartTotal = $("#cartTotal");

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  if (cartCount) {
    cartCount.textContent = totalItems;
  }

  if (cartTotal) {
    cartTotal.textContent = formatPrice(totalPrice);
  }

  if (cartItems) {
    if (!cart.length) {
      cartItems.innerHTML = `
        <div class="empty-cart">
          <p>Tu carrito está vacío.</p>
        </div>
      `;
      return;
    }

    cartItems.innerHTML = cart.map(item => `
      <div class="cart-item">
        <img src="${item.img}" alt="${item.name}">

        <div class="cart-item-info">
          <h4>${item.name}</h4>
          <p>${formatPrice(item.price)}</p>

          <div class="quantity-controls">
            <button onclick="changeQuantity(${item.id}, -1)">−</button>
            <span>${item.quantity}</span>
            <button onclick="changeQuantity(${item.id}, 1)">+</button>
          </div>
        </div>

        <button
          class="remove-cart-item"
          onclick="removeFromCart(${item.id})"
        >
          ×
        </button>
      </div>
    `).join("");
  }
}

function openCart() {
  const cartPanel = $("#cartPanel");

  if (cartPanel) {
    cartPanel.classList.add("show");
  }

  document.body.classList.add("cart-open");
}

function closeCart() {
  const cartPanel = $("#cartPanel");

  if (cartPanel) {
    cartPanel.classList.remove("show");
  }

  document.body.classList.remove("cart-open");
}

function sendWhatsAppOrder() {
  if (!cart.length) {
    alert("Tu carrito está vacío.");
    return;
  }

  let message = "Hola GOLDENFIINE 👋%0A%0A";
  message += "Quiero consultar por estos productos:%0A%0A";

  cart.forEach(item => {
    message += `• ${item.name} x${item.quantity} - ${formatPrice(item.price * item.quantity)}%0A`;
  });

  const total = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  message += `%0ATotal: ${formatPrice(total)}`;

  window.open(
    `${CONFIG.whatsapp}?text=${message}`,
    "_blank"
  );
}

function openInstagram() {
  window.open(CONFIG.instagram, "_blank");
}

function openInstagramDM() {
  window.open(CONFIG.instagramDM, "_blank");
}

function openWhatsApp() {
  window.open(CONFIG.whatsapp, "_blank");
}

function toggleMobileMenu() {
  const menu = $("#mobileMenu");

  if (menu) {
    menu.classList.toggle("show");
  }
}

function closeMobileMenu() {
  const menu = $("#mobileMenu");

  if (menu) {
    menu.classList.remove("show");
  }
}

function setupEvents() {
  $$(".filter").forEach(button => {
    button.addEventListener("click", () => {
      setCategory(button.dataset.cat);
    });
  });

  const sortSelect = $("#sortSelect");

  if (sortSelect) {
    sortSelect.addEventListener("change", event => {
      currentSort = event.target.value;
      render();
    });
  }

  const cartButton = $("#cartButton");

  if (cartButton) {
    cartButton.addEventListener("click", openCart);
  }

  const closeCartButton = $("#closeCart");

  if (closeCartButton) {
    closeCartButton.addEventListener("click", closeCart);
  }

  const closeModalButton = $("#closeModal");

  if (closeModalButton) {
    closeModalButton.addEventListener("click", closeProduct);
  }

  const modal = $("#productModal");

  if (modal) {
    modal.addEventListener("click", event => {
      if (event.target === modal) {
        closeProduct();
      }
    });
  }

  const cartPanel = $("#cartPanel");

  if (cartPanel) {
    cartPanel.addEventListener("click", event => {
      if (event.target === cartPanel) {
        closeCart();
      }
    });
  }

  const mobileButton = $("#mobileMenuButton");

  if (mobileButton) {
    mobileButton.addEventListener("click", toggleMobileMenu);
  }

  const sideInstagram = $("#sideInstagram");

  if (sideInstagram) {
    sideInstagram.href = CONFIG.whatsapp;
    sideInstagram.target = "_blank";
  }

  const sideWhatsApp = $("#sideWhatsApp");

  if (sideWhatsApp) {
    sideWhatsApp.href = CONFIG.whatsapp;
    sideWhatsApp.target = "_blank";
  }

  const instagramLinks = $$(".instagram-link");

  instagramLinks.forEach(link => {
    link.href = CONFIG.instagram;
    link.target = "_blank";
  });

  const whatsappLinks = $$(".whatsapp-link");

  whatsappLinks.forEach(link => {
    link.href = CONFIG.whatsapp;
    link.target = "_blank";
  });

  document.addEventListener("keydown", event => {
    if (event.key === "Escape") {
      closeProduct();
      closeCart();
      closeMobileMenu();
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  setupEvents();
  render();
  updateCart();
});
