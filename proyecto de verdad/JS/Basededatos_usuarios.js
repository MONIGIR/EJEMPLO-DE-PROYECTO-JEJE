import { openDatabase, STORES } from "./Basededatos.js";

/**
 * Agrega un nuevo usuario a IndexedDB
 */
export async function addRegistro(userData) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORES.USUARIOS], "readwrite");
    const store = transaction.objectStore(STORES.USUARIOS);

    const request = store.add(userData);

    request.onsuccess = () => {
      resolve();
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}

/**
 * Obtiene un usuario por su nombre de usuario
 */
export async function getUsuario(usuario) {
  const db = await openDatabase();

  return new Promise((resolve, reject) => {
    const transaction = db.transaction([STORES.USUARIOS], "readonly");
    const store = transaction.objectStore(STORES.USUARIOS);

    const request = store.get(usuario);

    request.onsuccess = (event) => {
      resolve(event.target.result);
    };

    request.onerror = (event) => {
      reject(event.target.error);
    };
  });
}
