
import { openDB, tx } from "./db.js";

const listEl = document.querySelector("#product-list");
const searchEl = document.querySelector("#search");
const countEl = document.querySelector("#count");

let PRODUCTS = [];

async function loadProducts(){
  const res = await fetch("./products.json");
  PRODUCTS = await res.json();
  render(PRODUCTS);
}

function productCard(p){
  return `
    <div class="card">
      <img src="${p.image}" alt="${p.name}"/>
      <div class="content">
        <div><strong>${p.name}</strong></div>
        <div class="badge">${p.category}</div>
        <div class="price">$${p.price}</div>
        <div class="text-sm">Stock: ${p.stock} • ★ ${p.rating}</div>
        <div style="display:flex;gap:8px;flex-wrap:wrap">
          <button class="btn primary" data-add="${p.id}">Añadir</button>
          <a class="btn" href="contact.html?product=${encodeURIComponent(p.name)}&id=${p.id}">Ver detalles</a>
        </div>
      </div>
    </div>
  `;
}

function render(items){
  listEl.innerHTML = items.map(productCard).join("");
  countEl.textContent = items.length;
}

function debounce(fn, ms=200){
  let t; return (...args)=>{ clearTimeout(t); t=setTimeout(()=>fn(...args), ms); };
}

searchEl.addEventListener("input", debounce((e)=>{
  const q = e.target.value.toLowerCase();
  const filt = PRODUCTS.filter(p => (p.name+p.category+p.brand).toLowerCase().includes(q));
  render(filt);
}, 200));

document.addEventListener("click", async (e)=>{
  const id = e.target?.dataset?.add;
  if(!id) return;
  const p = PRODUCTS.find(x => String(x.id) === String(id));
  if(!p) return;
  const email = localStorage.getItem("sessionEmail") || "anon";
  const db = await openDB();
  const store = tx(db,"cart","readwrite");
  const item = { userEmail: email, productId: p.id, name: p.name, price: p.price, qty: 1, addedAt: Date.now() };
  store.add(item).onsuccess = ()=> {
    Toastify({text:"Agregado al carrito", duration:2000, gravity:"bottom"}).showToast();
  };
});

loadProducts();
