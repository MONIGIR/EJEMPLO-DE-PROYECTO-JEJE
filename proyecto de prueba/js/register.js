
import { registerUser } from "./auth.js";

const form = document.querySelector("#reg-form");
form.addEventListener("submit", async (e)=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  const data = Object.fromEntries(new FormData(form).entries());
  try{
    await registerUser({ name: data.name, email: data.email, password: data.password });
    Toastify({text:"Registro exitoso", duration:2000}).showToast();
    setTimeout(()=> location.href="login.html", 800);
  }catch(err){
    Toastify({text:"Error: el correo ya existe", duration:2500}).showToast();
  }
});
