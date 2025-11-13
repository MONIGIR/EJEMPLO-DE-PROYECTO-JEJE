
import { openDB, tx } from "./db.js";

const tbody = document.querySelector("#cart-body");
const totalEl = document.querySelector("#total");

async function loadCart(){
  const email = localStorage.getItem("sessionEmail") || "anon";
  const db = await openDB();
  const store = tx(db,"cart");
  const idx = store.index("byUser");
  const items = await new Promise((resolve,reject)=>{
    const res = [];
    const req = idx.openCursor(IDBKeyRange.only(email));
    req.onsuccess = (e)=> {
      const cur = e.target.result;
      if(cur){ res.push({ id: cur.primaryKey, ...cur.value }); cur.continue(); }
      else resolve(res);
    };
    req.onerror = ()=> reject(req.error);
  });
  render(items);
}

function render(items){
  tbody.innerHTML = items.map(it => `
   <tr data-id="${it.id}">
     <td>${it.name}</td>
     <td><input type="number" min="1" value="${it.qty}" class="input qty"></td>
     <td>$${it.price}</td>
     <td>$${(it.price*it.qty).toFixed(2)}</td>
     <td><button class="btn" data-del="${it.id}">Quitar</button></td>
   </tr>
  `).join("");
  const total = items.reduce((acc,i)=> acc + i.price*i.qty, 0);
  totalEl.textContent = "$"+total.toFixed(2);
}

document.addEventListener("change", async (e)=>{
  const row = e.target.closest("tr[data-id]");
  if(!row) return;
  if(!e.target.classList.contains("qty")) return;
  const id = Number(row.dataset.id);
  const qty = Math.max(1, Number(e.target.value||1));
  const db = await openDB();
  const store = tx(db,"cart","readwrite");
  const getReq = store.get(id);
  getReq.onsuccess = ()=>{
    const item = getReq.result;
    item.qty = qty;
    store.put(item).onsuccess = ()=>{
      Toastify({text:"Carrito actualizado", duration:1500}).showToast();
      loadCart();
    };
  };
});

document.addEventListener("click", async (e)=>{
  const id = e.target?.dataset?.del;
  if(!id) return;
  const db = await openDB();
  const store = tx(db,"cart","readwrite");
  store.delete(Number(id)).onsuccess = ()=>{
    Toastify({text:"Producto eliminado", duration:1500}).showToast();
    loadCart();
  };
});

loadCart();
