
import { openDB, tx } from "./db.js";

export async function hashPassword(pw) {
  const enc = new TextEncoder();
  const buf = await crypto.subtle.digest("SHA-256", enc.encode(pw));
  return [...new Uint8Array(buf)].map(b => b.toString(16).padStart(2,"0")).join("");
}

export async function registerUser({name,email,password}){
  const db = await openDB();
  const store = tx(db,"users","readwrite");
  const passHash = await hashPassword(password);
  const user = { name, email, passHash, createdAt: new Date().toISOString() };
  return new Promise((resolve,reject)=>{
    const req = store.add(user);
    req.onsuccess = ()=> resolve(user);
    req.onerror = ()=> reject(req.error);
  });
}

export async function getUserByEmail(email){
  const db = await openDB();
  const store = tx(db,"users");
  return new Promise((resolve,reject)=>{
    const req = store.get(email);
    req.onsuccess = ()=> resolve(req.result || null);
    req.onerror = ()=> reject(req.error);
  });
}
