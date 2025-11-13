
// Simple IndexedDB helper
const DB_NAME = "CoolCenterDB";
const DB_VERSION = 1;

export function openDB() {
  return new Promise((resolve, reject) => {
    const req = indexedDB.open(DB_NAME, DB_VERSION);
    req.onupgradeneeded = () => {
      const db = req.result;
      if (!db.objectStoreNames.contains("users")) {
        const store = db.createObjectStore("users", { keyPath: "email" });
        store.createIndex("email", "email", { unique: true });
      }
      if (!db.objectStoreNames.contains("cart")) {
        const cart = db.createObjectStore("cart", { keyPath: "id", autoIncrement: true });
        cart.createIndex("byUser", "userEmail", { unique: false });
      }
    };
    req.onsuccess = () => resolve(req.result);
    req.onerror = () => reject(req.error);
  });
}

export function tx(db, storeName, mode="readonly"){
  return db.transaction(storeName, mode).objectStore(storeName);
}
