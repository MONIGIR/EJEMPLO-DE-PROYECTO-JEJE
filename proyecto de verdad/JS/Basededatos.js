export const STORES = {
  USUARIOS: 'usuarios'
};

/**
 * Abre (o crea) la base de datos IndexedDB y devuelve la instancia de DB
 */
export function openDatabase() {
  return new Promise((resolve, reject) => {
    const request = indexedDB.open('miBaseUsuarios', 1);

    request.onupgradeneeded = (event) => {
      const db = event.target.result;
      if (!db.objectStoreNames.contains(STORES.USUARIOS)) {
        const store = db.createObjectStore(STORES.USUARIOS, { keyPath: 'correo' });
        store.createIndex('nombre', 'nombre', { unique: false });
      }
    };

    request.onsuccess = (event) => resolve(event.target.result);
    request.onerror = (event) => reject(event.target.error);
  });
}
