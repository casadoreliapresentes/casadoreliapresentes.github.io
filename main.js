const products = [
    // Linha Café
    {
    id: 1,
    name: "Café Pausa",
    description: "Uma pausa gostosa para presentear, acolher e deixar o dia mais especial.",
    price: 79.90,
    photos: ["img/cafe-pausa1.webp", "img/cafe-pausa2.webp"],
    extendedDescription: {
        heading: "A caixa acompanha:",
        items: [
            "1 caneca",
            "1 Drip Coffee ou 1 cappuccino — você escolhe",
            "2 mini Trentos, dispostos em um saquinho de juta",
            "1 pacotinho de biscoitos artesanais da Casa Dorelia ou bolo caseiro individual",
            "1 Ouro Branco",
            "1 cartão personalizado com o seu recado"
        ],
        closing: "Tudo é cuidadosamente acomodado em uma caixa de MDF, finalizada com um laço e pronta para presentear.",
        note: "Sabores sob consulta."
    }
    },
    {
    id: 2,
    name: "Café Aconchego",
    description: "Um presente pensado para criar um momento especial.",
    price: 99.90,
    photos: ["img/cafe-aconchego.webp"],
    extendedDescription: {
        heading: "A caixa acompanha:",
        items: [
            "1 bolo caseiro — consulte os sabores disponíveis",
            "1 caneca",
            "1 Drip Coffee ou 1 cappuccino — você escolhe",
            "1 pacotinho de biscoitos artesanais da Casa Dorelia",
            "2 Ouro Branco",
            "1 cartão personalizado com o seu recado"
        ],
        closing: "Tudo é cuidadosamente preparado em uma caixa especial, finalizada com um laço e pronta para presentear."
    }
    },
    {
    id: 3,
    name: "Café Celebração",
    description: "Uma experiência pensada para celebrar momentos que merecem ser lembrados.",
    price: 159.90,
    photos: ["img/cafe-celebracao.webp"],
    extendedDescription: {
        heading: "Nossa composição reúne:",
        items: [
            "Croissant",
            "Pães de queijo",
            "Ferrero Rocher",
            "Bolo artesanal servido em uma caneca especial — consultar sabores",
            "Cappuccino em saquinho de juta",
            "Suco — consultar sabores",
            "Cartão personalizado em envelope"
        ],
        closing: "Tudo cuidadosamente acomodado em uma caixa de madeira, preparada para transformar o café em um presente especial.",
        note: "Sabores do bolo e do suco sob consulta."
    }
    },
    {
    id: 9,
    name: "Café Aurora",
    description: "Uma experiência pensada para tornar o início do dia ainda mais especial.",
    price: 109.90,
    photos: ["img/cafe-aurora.webp"],
    extendedDescription: {
        heading: "Nossa composição reúne:",
        items: [
            "Biscoito caseiro Casa Dorelia ou bolo individual Casa Dorelia",
            "Caneca personalizada",
            "Croissant",
            "Ferrero Rocher",
            "Cappuccino em saquinho de juta"
        ],
        closing: "Tudo cuidadosamente acomodado em uma caixa de MDF, preparada para transformar um café em um presente especial.",
        note: "Personalização da caneca sob consulta."
    }
    },
    // Linha Afeto
    {
    id: 4,
    name: "Caixa Serena",
    description: "Um presente delicado para lembrar alguém especial de reservar um tempinho para si.",
    price: 99.90,
    photos: ["img/caixa-serena1.webp", "img/caixa-serena2.webp"],
    extendedDescription: {
        heading: "A caixa acompanha:",
        items: [
            "1 sabonete líquido Natura",
            "2 esmaltes",
            "2 sachês de chá",
            "1 Trento",
            "1 cartão personalizado com o seu recado"
        ],
        closing: "Tudo é preparado com carinho e apresentado em uma embalagem especial, pronta para presentear."
    }
    },
    {
    id: 5,
    name: "Caixa Dengo",
    description: "Um presente para transformar o autocuidado em um momento de carinho e aconchego.",
    price: 149.90,
    photos: ["img/caixa-dengo.webp"],
    badge: "Edição limitada",
    extendedDescription: {
        heading: "A caixa acompanha:",
        items: [
            "1 mousse de banho",
            "1 creme hidratante",
            "2 Ouro Branco, acomodados em um saquinho de juta",
            "1 cartão personalizado com o seu recado"
        ],
        closing: "Tudo preparado com carinho e apresentado em uma embalagem especial, pronta para presentear."
    }
    },
    // Linha Mimos
    {
    id: 6,
    name: "Caneca Charme",
    description: "Um mimo cuidadosamente montado e pronto para presentear.",
    price: 40.00,
    photos: ["img/caneca-charme1.webp", "img/caneca-charme2.webp"],
    extendedDescription: {
        heading: "A Caneca Charme acompanha:",
        items: [
            "1 caneca",
            "1 Kinder Bueno",
            "1 cappuccino",
            "1 recadinho personalizado, escrito especialmente para quem você deseja presentear"
        ],
        closing: "Tudo é cuidadosamente montado e fechado em uma embalagem bonita, finalizada com laço — pronta para presentear."
    }
    },
    {
    id: 7,
    name: "Bolo Querido",
    description: "Um carinho em forma de bolo.",
    price: 49.99,
    photos: ["img/bolo-querido.webp"],
    extendedDescription: {
        heading: "",
        items: [
            "Bolo artesanal, preparado pela Casa Dorelia e servido em uma caneca especial — um mimo delicioso para adoçar o dia e deixar uma lembrança."
        ],
        closing: "Sabores sob consulta."
    }
    },
    {
    id: 8,
    name: "Tim-tim",
    description: "Um mimo delicado para celebrar, brindar e tornar a ocasião ainda mais especial.",
    price: 94.90,
    photos: ["img/tim-tim1.webp", "img/tim-tim2.webp"],
    extendedDescription: {
        heading: "Nossa composição reúne:",
        items: [
            "Taça de champanhe personalizada",
            "Espumante 187 ml",
            "Cartão personalizável"
        ],
        closing: "Acomodada em uma delicada caixa de acetato, finalizada com laço de cetim."
    }
    },
    {
    id: 10,
    name: "Caixa Homenagem",
    description: "Uma composição pensada para celebrar, homenagear e proporcionar uma pausa especial — um presente que reúne sabores, cuidado e carinho em cada detalhe.",
    price: 144.90,
    photos: ["img/homenagem1.webp", "img/homenagem2.webp"],
    extendedDescription: {
        heading: "Nossa composição reúne:",
        items: [
            "Garrafa fina para celebração",
            "Taça personalizada",
            "3 Ferrero Rocher",
            "Cartão personalizável"
        ],
        closing: "Acomodada em uma elegante caixa de MDF, cuidadosamente preparada para presentear."
    }
    },
    // Adicionais
    {
    id: 11,
    name: "Balão Personalizado",
    description: "Um detalhe cheio de amor para transformar o presente em uma verdadeira surpresa! Nosso balão de coração metalizado vem personalizado com o nome ou uma frase curta da sua escolha.",
    price: 11.90,
    photos: ["img/balao.webp"],
    extendedDescription: {
        heading: "",
        items: [
            "Balão de coração metalizado personalizado com nome ou frase curta."
        ],
        closing: "",
        note: "Cores sob consulta."
    }
    }
];

const CART_STORAGE_KEY = "casadorelia-cart";
let cart = [];

try {
    const storedCart = JSON.parse(sessionStorage.getItem(CART_STORAGE_KEY) || "[]");
    if (Array.isArray(storedCart)) {
        cart = storedCart.filter(item =>
            item && products.some(product => product.id === item.productId) &&
            Number.isInteger(item.quantity) && item.quantity > 0
        );
    }
} catch {
    sessionStorage.removeItem(CART_STORAGE_KEY);
}

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
    <article class="product-card" data-product-id="${product.id}" ${product.extendedDescription ? 'tabindex="0"' : ""}>
        ${renderProductCarousel(product)}
        <h3>${product.name}</h3>
        ${product.badge ? `<p class="product-badge">${product.badge}</p>` : ""}
        <p class="product-description">${product.description}</p>
        <p class="price">${money(product.price)}</p>
        <button class="add-btn" onclick="addToCart(${product.id})">
        <span>🛒</span> Adicionar ao carrinho
        </button>
    </article>
    `).join("");
}

function renderProductCarousel(product) {
    const photos = product.photos || [];
    const controls = photos.length > 1 ? `
        <button class="carousel-arrow carousel-previous" type="button" data-direction="-1" aria-label="Foto anterior de ${product.name}">‹</button>
        <button class="carousel-arrow carousel-next" type="button" data-direction="1" aria-label="Próxima foto de ${product.name}">›</button>
        <div class="carousel-dots" aria-label="Fotos do produto">
            ${photos.map((_, index) => `<button type="button" class="carousel-dot${index === 0 ? " is-active" : ""}" data-index="${index}" aria-label="Mostrar foto ${index + 1} de ${product.name}" aria-current="${index === 0 ? "true" : "false"}"></button>`).join("")}
        </div>
    ` : "";

    return `<div class="product-image${photos.length ? " has-photos" : ""}" data-product-id="${product.id}" data-photo-index="0">
        ${photos.length ? `<img src="${photos[0]}" alt="${product.name}" loading="lazy">` : ""}
        ${controls}
    </div>`;
}

const productModal = document.getElementById("productModal");
const productModalContent = document.getElementById("productModalContent");

function openProductModal(product) {
    const details = product.extendedDescription;
    if (!details) return;

    productModalContent.innerHTML = `
        <div class="product-modal-gallery">${renderProductCarousel(product)}</div>
        <div class="product-modal-copy">
            <h2 id="productModalTitle">${product.name}</h2>
            <p class="product-modal-intro">${product.description}</p>
            ${details.heading ? `<p><strong>${details.heading}</strong></p>` : ""}
            <ul>${details.items.map(item => `<li>${item}</li>`).join("")}</ul>
            <p>${details.closing}</p>
            ${details.note ? `<p><strong>${details.note}</strong></p>` : ""}
        </div>
    `;
    productModal.showModal();
}

productsGrid.addEventListener("click", event => {
    if (event.target.closest("button")) return;
    const card = event.target.closest(".product-card");
    if (!card) return;
    const product = products.find(item => item.id === Number(card.dataset.productId));
    if (product?.extendedDescription) openProductModal(product);
});

productsGrid.addEventListener("keydown", event => {
    if ((event.key !== "Enter" && event.key !== " ") || event.target.closest("button")) return;
    const card = event.target.closest(".product-card");
    if (!card) return;
    event.preventDefault();
    const product = products.find(item => item.id === Number(card.dataset.productId));
    if (product?.extendedDescription) openProductModal(product);
});

document.getElementById("closeProductModal").addEventListener("click", () => productModal.close());
productModal.addEventListener("click", event => {
    if (event.target === productModal) productModal.close();
});

function handleCarouselClick(event) {
    const control = event.target.closest(".carousel-arrow, .carousel-dot");
    if (!control) return;

    const carousel = control.closest(".product-image");
    const product = products.find(item => item.id === Number(carousel.dataset.productId));
    if (!product || product.photos.length < 2) return;

    const currentIndex = Number(carousel.dataset.photoIndex);
    const requestedIndex = control.dataset.index === undefined
        ? currentIndex + Number(control.dataset.direction)
        : Number(control.dataset.index);
    const nextIndex = (requestedIndex + product.photos.length) % product.photos.length;

    carousel.dataset.photoIndex = String(nextIndex);
    carousel.querySelector("img").src = product.photos[nextIndex];
    carousel.querySelector("img").alt = `${product.name}, foto ${nextIndex + 1}`;
    carousel.querySelectorAll(".carousel-dot").forEach((dot, index) => {
        dot.classList.toggle("is-active", index === nextIndex);
        dot.setAttribute("aria-current", String(index === nextIndex));
    });
}

productsGrid.addEventListener("click", handleCarouselClick);
productModalContent.addEventListener("click", handleCarouselClick);

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

function sendToWhatsapp() {
    if (!cart.length) return;

    const orderLines = cart.map(item => {
        const product = products.find(product => product.id === item.productId);
        return `${item.quantity}x ${product.name} — ${money(product.price * item.quantity)}`;
    });
    const message = `Olá! Gostaria de fazer este pedido:\n${orderLines.join("\n")}`;
    const phone = "554888602312";

    window.open(`https://wa.me/${phone}?text=${encodeURIComponent(message)}`, "_blank", "noopener");
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
            ${product.photos?.[0] ? `<img src="${product.photos[0]}" alt="${product.name}" loading="lazy">` : ""}
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
    sessionStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cart));
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
