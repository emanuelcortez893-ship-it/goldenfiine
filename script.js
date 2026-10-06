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
  }

];

// ===============================
// VARIABLES
// ===============================

let cart =
  JSON.parse(
    localStorage.getItem("gf_cart") || "[]"
  );

let category = "Todos";
let current = null;

const money = n =>
  "$" + Number(n).toLocaleString("es-AR");

function save() {
  localStorage.setItem(
    "gf_cart",
    JSON.stringify(cart)
  );
}

// ===============================
// CATEGORÍAS
// ===============================

function setCategory(cat) {

  category = cat;

  document
    .querySelectorAll(".filter")
    .forEach(button => {

      button.classList.toggle(
        "active",
        button.dataset.cat === cat
      );

    });

  render();

  document
    .getElementById("catalogo")
    ?.scrollIntoView({
      behavior: "smooth"
    });
}

// ===============================
// MOSTRAR PRODUCTOS
// ===============================

function render() {

  const grid =
    document.getElementById("grid");

  if (!grid) return;

  let list =
    category === "Todos"
      ? [...products]
      : products.filter(
          product =>
            product.cat === category
        );

  const sort =
    document.getElementById("sort")
      ?.value || "default";

  if (sort === "low") {

    list.sort(
      (a, b) =>
        a.price - b.price
    );

  }

  if (sort === "high") {

    list.sort(
      (a, b) =>
        b.price - a.price
    );

  }

  const title =
    document.getElementById(
      "catTitle"
    );

  if (title) {

    title.textContent =
      category === "Todos"
        ? "Todos los productos"
        : category;

  }

  grid.innerHTML =
    list.map(product => `

      <article
        class="card"
        onclick="openProduct(${product.id})"
      >

        <div class="card-img">

          ${
            product.badge
              ? `<span class="badge">${product.badge}</span>`
              : ""
          }

          <button
            class="heart"
            onclick="event.stopPropagation()"
            aria-label="Favorito"
          >
            ♡
          </button>

          <img
            src="${product.img}"
            alt="${product.name}"
            loading="lazy"
          >

        </div>

        <div class="card-info">

          <small>
            ${product.cat}
          </small>

          <h3>
            ${product.name}
          </h3>

          <div class="price">
            ${money(product.price)}
          </div>

        </div>

      </article>

    `).join("");
}

// ===============================
// FILTROS
// ===============================

document
  .querySelectorAll(".filter")
  .forEach(button => {

    button.onclick = () => {

      document
        .querySelectorAll(".filter")
        .forEach(x =>
          x.classList.remove("active")
        );

      button.classList.add("active");

      category =
        button.dataset.cat;

      render();

      document
        .querySelector(".filters")
        ?.classList.remove("show");

    };

  });

document
  .getElementById("sort")
  ?.addEventListener(
    "change",
    render
  );

// ===============================
// PRODUCTO
// ===============================

function openProduct(id) {

  current =
    products.find(
      product =>
        product.id === id
    );

  if (!current) return;

  document.getElementById("mImg").src =
    current.img;

  document.getElementById("mImg").alt =
    current.name;

  document.getElementById("mCat").textContent =
    current.cat;

  document.getElementById("mName").textContent =
    current.name;

  document.getElementById("mPrice").textContent =
    money(current.price);

  document.getElementById("sizes").innerHTML =
    current.sizes
      .map(
        (size, index) => `

          <button
            class="size ${
              index === 0
                ? "selected"
                : ""
            }"
            onclick="selectSize(this)"
          >
            ${size}
          </button>

        `
      )
      .join("");

  document
    .getElementById("modal")
    .classList.add("show");
}

function selectSize(element) {

  document
    .querySelectorAll(
      "#sizes .size"
    )
    .forEach(button =>
      button.classList.remove(
        "selected"
      )
    );

  element.classList.add(
    "selected"
  );
}

// ===============================
// CERRAR MODAL
// ===============================

document
  .getElementById("modalClose")
  ?.addEventListener(
    "click",
    () => {

      document
        .getElementById("modal")
        .classList.remove(
          "show"
        );

    }
  );

document
  .getElementById("modal")
  ?.addEventListener(
    "click",
    event => {

      if (
        event.target.id ===
        "modal"
      ) {

        event.currentTarget
          .classList.remove(
            "show"
          );

      }

    }
  );

// ===============================
// AGREGAR AL CARRITO
// ===============================

document
  .getElementById("mAdd")
  ?.addEventListener(
    "click",
    () => {

      if (!current) return;

      const selected =
        document.querySelector(
          "#sizes .size.selected"
        );

      const size =
        selected
          ? selected.textContent.trim()
          : "Único";

      add(
        current.id,
        size
      );

      document
        .getElementById("modal")
        .classList.remove(
          "show"
        );

      openCart();

    }
  );

// ===============================
// AGREGAR PRODUCTO
// ===============================

function add(
  id,
  size = "Único"
) {

  const existing =
    cart.find(
      item =>
        item.id === id &&
        item.size === size
    );

  if (existing) {

    existing.qty++;

  } else {

    cart.push({
      id: id,
      size: size,
      qty: 1
    });

  }

  save();
  renderCart();
}

// ===============================
// CANTIDAD
// ===============================

function qty(
  id,
  size,
  amount
) {

  const item =
    cart.find(
      x =>
        x.id === id &&
        x.size === size
    );

  if (!item) return;

  item.qty += amount;

  if (item.qty < 1) {

    cart =
      cart.filter(
        x =>
          !(
            x.id === id &&
            x.size === size
          )
      );

  }

  save();
  renderCart();
}

// ===============================
// ELIMINAR
// ===============================

function remove(
  id,
  size
) {

  cart =
    cart.filter(
      item =>
        !(
          item.id === id &&
          item.size === size
        )
    );

  save();
  renderCart();
}

// ===============================
// CARRITO
// ===============================

function renderCart() {

  const count =
    document.getElementById(
      "cartCount"
    );

  if (count) {

    count.textContent =
      cart.reduce(
        (total, item) =>
          total + item.qty,
        0
      );

  }

  const box =
    document.getElementById(
      "cartItems"
    );

  if (!box) return;

  if (!cart.length) {

    box.innerHTML = `

      <div
        style="
          text-align:center;
          color:#999;
          padding:70px 10px;
          font-size:12px;
        "
      >
        Tu carrito está vacío.
      </div>

    `;

  } else {

    box.innerHTML =
      cart.map(item => {

        const product =
          products.find(
            p =>
              p.id === item.id
          );

        if (!product) return "";

        return `

          <div class="cart-row">

            <img
              src="${product.img}"
              alt="${product.name}"
            >

            <div>

              <h4>
                ${product.name}
              </h4>

              <small>

                ${money(product.price)}

                <br>

                Medida:
                ${item.size || "Único"}

              </small>

              <div class="qty">

                <button
                  onclick='qty(
                    ${product.id},
                    ${JSON.stringify(
                      item.size
                    )},
                    -1
                  )'
                >
                  −
                </button>

                <span>
                  ${item.qty}
                </span>

                <button
                  onclick='qty(
                    ${product.id},
                    ${JSON.stringify(
                      item.size
                    )},
                    1
                  )'
                >
                  +
                </button>

              </div>

            </div>

            <button
              class="remove"
              onclick='remove(
                ${product.id},
                ${JSON.stringify(
                  item.size
                )}
              )'
            >
              ×
            </button>

          </div>

        `;

      }).join("");

  }

  const total =
    cart.reduce(
      (sum, item) => {

        const product =
          products.find(
            p =>
              p.id === item.id
          );

        return sum +
          (
            product
              ? product.price *
                item.qty
              : 0
          );

      },
      0
    );

  const totalElement =
    document.getElementById(
      "total"
    );

  if (totalElement) {

    totalElement.textContent =
      money(total);

  }

}

// ===============================
// ABRIR / CERRAR CARRITO
// ===============================

function openCart() {

  document
    .getElementById("drawer")
    ?.classList.add(
      "open"
    );

  document
    .getElementById("shade")
    ?.classList.add(
      "show"
    );
}

function closeCart() {

  document
    .getElementById("drawer")
    ?.classList.remove(
      "open"
    );

  document
    .getElementById("shade")
    ?.classList.remove(
      "show"
    );
}

document
  .getElementById("openCart")
  ?.addEventListener(
    "click",
    openCart
  );

document
  .getElementById("closeCart")
  ?.addEventListener(
    "click",
    closeCart
  );

document
  .getElementById("shade")
  ?.addEventListener(
    "click",
    closeCart
  );

// ===============================
// VACIAR CARRITO
// ===============================

document
  .getElementById("empty")
  ?.addEventListener(
    "click",
    () => {

      cart = [];

      save();

      renderCart();

    }
  );

// ===============================
// PEDIDO
// ===============================

function buildOrderMessage() {

  if (!cart.length) {
    return null;
  }

  let total = 0;

  let message =
`✨ GOLDENFIINE — NUEVO PEDIDO ✨

Hola! Quiero realizar el siguiente pedido:

`;

  cart.forEach(
    (item, index) => {

      const product =
        products.find(
          p =>
            p.id === item.id
        );

      if (!product) return;

      const subtotal =
        product.price *
        item.qty;

      total += subtotal;

      message +=
`${index + 1}. ${product.name}
   Categoría: ${product.cat}
   Medida: ${item.size || "Único"}
   Cantidad: ${item.qty}
   Precio: ${money(product.price)}
   Subtotal: ${money(subtotal)}

`;

    }
  );

  message +=
`━━━━━━━━━━━━━━━━━━
TOTAL: ${money(total)}

Quedo a la espera de confirmación. ¡Gracias! 💎`;

  return message;
}

// ===============================
// WHATSAPP
// ===============================

document
  .getElementById("buy")
  ?.addEventListener(
    "click",
    () => {

      const message =
        buildOrderMessage();

      if (!message) {

        alert(
          "Tu carrito está vacío."
        );

        return;
      }

      const url =
        CONFIG.whatsapp +
        "?text=" +
        encodeURIComponent(
          message
        );

      window.open(
        url,
        "_blank"
      );

    }
  );

// ===============================
// INSTAGRAM
// ===============================

function sendInstagramOrder() {

  const message =
    buildOrderMessage();

  if (!message) {

    alert(
      "Tu carrito está vacío."
    );

    return;
  }

  const openDM = () => {

    window.open(
      CONFIG.instagramDM,
      "_blank"
    );

  };

  if (
    navigator.clipboard &&
    navigator.clipboard.writeText
  ) {

    navigator.clipboard
      .writeText(message)
      .then(openDM)
      .catch(openDM);

  } else {

    openDM();

  }

}

// ===============================
// BOTÓN INSTAGRAM
// ===============================

function createInstagramButton() {

  const buyButton =
    document.getElementById(
      "buy"
    );

  if (!buyButton) return;

  if (
    document.getElementById(
      "instagramOrder"
    )
  ) {
    return;
  }

  const button =
    document.createElement(
      "button"
    );

  button.id =
    "instagramOrder";

  button.className =
    "btn full";

  button.type =
    "button";

  button.textContent =
    "PEDIR POR INSTAGRAM";

  button.style.marginTop =
    "10px";

  button.onclick =
    sendInstagramOrder;

  buyButton.parentNode.insertBefore(
    button,
    buyButton.nextSibling
  );

}

// ===============================
// CONTACTO
// ===============================

const contactBtn =
  document.getElementById(
    "contactBtn"
  );

if (contactBtn) {

  contactBtn.href =
    CONFIG.whatsapp;

}

const sideInstagram =
  document.getElementById(
    "sideInstagram"
  );

if (sideInstagram) {

  sideInstagram.href =
    CONFIG.whatsapp;

}

// ===============================
// MENÚ CELULAR
// ===============================

const mobileMenu =
  document.getElementById(
    "mobileMenu"
  );

if (mobileMenu) {

  mobileMenu.onclick = () => {

    const nav =
      document.getElementById(
        "nav"
      );

    if (!nav) return;

    nav.style.display =
      nav.style.display === "flex"
        ? "none"
        : "flex";

  };

}

// ===============================
// FILTRO CELULAR
// ===============================

const filterMobile =
  document.getElementById(
    "filterMobile"
  );

if (filterMobile) {

  filterMobile.onclick = () => {

    document
      .querySelector(".filters")
      ?.classList.add(
        "show"
      );

  };

}

const closeFilters =
  document.getElementById(
    "closeFilters"
  );

if (closeFilters) {

  closeFilters.onclick = () => {

    document
      .querySelector(".filters")
      ?.classList.remove(
        "show"
      );

  };

}

// ===============================
// COMPATIBILIDAD CARRITO
// ===============================

cart =
  cart
    .map(item => {

      const product =
        products.find(
          p =>
            p.id === item.id
        );

      return {

        id: item.id,

        qty:
          item.qty || 1,

        size:
          item.size ||
          (
            product?.sizes?.[0] ||
            "Único"
          )

      };

    })
    .filter(item =>
      products.some(
        product =>
          product.id === item.id
      )
    );

save();

// ===============================
// INICIAR
// ===============================

render();

renderCart();

createInstagramButton();
