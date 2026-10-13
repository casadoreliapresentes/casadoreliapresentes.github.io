const products = [
    {
    id: 1,
    name: "Café Pausa",
    description: "Para um momento de pausa, carinho e sabor.",
    price: 49.90
    },
    {
    id: 2,
    name: "Café Aconchego",
    description: "Aquele gostinho de casa, em forma de presente.",
    price: 49.90
    },
    {
    id: 3,
    name: "Café Encanto",
    description: "Doce, leve e cheio de boas energias.",
    price: 54.90
    },
    {
    id: 4,
    name: "Afeto Semente",
    description: "Pequenos gestos, grandes recomeços.",
    price: 59.90
    },
    {
    id: 5,
    name: "Afeto Florescer",
    description: "Para quem faz a vida mais bonita.",
    price: 59.90
    }
];

let cart = [];

const money = value =>
    value.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });

const productsGrid = document.getElementById("productsGrid");
const cartItems = document.getElementById("cartItems");
const subtotalEl = document.getElementById("subtotal");
const cartCountEl = document.getElementById("cartCount");
const cartDrawer = document.getElementById("cartDrawer");
const menuToggle = document.getElementById("menuToggle");
const primaryNavigation = document.getElementById("primaryNavigation");

menuToggle.addEventListener("click", () => {
    const isOpen = menuToggle.getAttribute("aria-expanded") === "true";
    menuToggle.setAttribute("aria-expanded", String(!isOpen));
    menuToggle.setAttribute("aria-label", isOpen ? "Abrir menu" : "Fechar menu");
    primaryNavigation.classList.toggle("is-open", !isOpen);
});

primaryNavigation.querySelectorAll("a").forEach(link => {
    link.addEventListener("click", () => {
        menuToggle.setAttribute("aria-expanded", "false");
        menuToggle.setAttribute("aria-label", "Abrir menu");
        primaryNavigation.classList.remove("is-open");
    });
});

function renderProducts() {
    productsGrid.innerHTML = products.map(product => `
    <article class="product-card">
        <div class="product-image">
        <!-- IMAGEM: ${product.name} -->
        </div>
        <h3>${product.name}</h3>
        <p class="product-description">${product.description}</p>
        <p class="price">${money(product.price)}</p>
        <button class="add-btn" onclick="addToCart(${product.id})">
        <span>🛒</span> Adicionar ao carrinho
        </button>
    </article>
    `).join("");
}

function addToCart(productId) {
    const item = cart.find(item => item.productId === productId);

    if (item) {
    item.quantity += 1;
    } else {
    cart.push({ productId, quantity: 1 });
    }

    renderCart();
    cartDrawer.classList.remove("closed");
}

function changeQuantity(productId, delta) {
    const item = cart.find(item => item.productId === productId);
    if (!item) return;

    item.quantity += delta;

    if (item.quantity <= 0) {
    cart = cart.filter(item => item.productId !== productId);
    }

    renderCart();
}

function removeItem(productId) {
    cart = cart.filter(item => item.productId !== productId);
    renderCart();
}

function renderCart() {
    if (!cart.length) {
    cartItems.innerHTML = `
        <div style="padding: 25px 0; text-align:center; color:#777; font-size:11px;">
        Seu carrinho está vazio.
        </div>
    `;
    } else {
    cartItems.innerHTML = cart.map(item => {
        const product = products.find(p => p.id === item.productId);
        return `
        <div class="cart-item">
            <div class="cart-thumb">
            <!-- IMAGEM: ${product.name} no carrinho -->
            </div>

            <div>
            <div class="cart-item-name">${product.name}</div>
            <div class="cart-item-price">${money(product.price)}</div>

            <div class="qty">
                <button onclick="changeQuantity(${product.id}, -1)">−</button>
                <span>${item.quantity}</span>
                <button onclick="changeQuantity(${product.id}, 1)">+</button>
            </div>
            </div>

            <button class="remove-item" onclick="removeItem(${product.id})" aria-label="Remover">
            ♡
            </button>
        </div>
        `;
    }).join("");
    }

    const totalQuantity = cart.reduce((sum, item) => sum + item.quantity, 0);
    const subtotal = cart.reduce((sum, item) => {
    const product = products.find(p => p.id === item.productId);
    return sum + product.price * item.quantity;
    }, 0);

    cartCountEl.textContent = totalQuantity;
    subtotalEl.textContent = money(subtotal);
}

document.getElementById("cartToggle").addEventListener("click", () => {
    cartDrawer.classList.toggle("closed");
});

document.getElementById("closeCart").addEventListener("click", () => {
    cartDrawer.classList.add("closed");
});

document.querySelector(".continue").addEventListener("click", () => {
    cartDrawer.classList.add("closed");
});

renderProducts();
renderCart();
