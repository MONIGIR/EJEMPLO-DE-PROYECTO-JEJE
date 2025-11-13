
import { getUserByEmail, hashPassword } from "./auth.js";

const form = document.querySelector("#login-form");
form.addEventListener("submit", async (e)=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  const user = await getUserByEmail(data.email);
  const hash = await hashPassword(data.password);
  if(user && user.passHash === hash){
    localStorage.setItem("sessionEmail", user.email);
    Toastify({text:"Login exitoso", duration:2000}).showToast();
    setTimeout(()=> location.href="index.html", 600);
  }else{
    Toastify({text:"Credenciales inválidas", duration:2500}).showToast();
  }
});
