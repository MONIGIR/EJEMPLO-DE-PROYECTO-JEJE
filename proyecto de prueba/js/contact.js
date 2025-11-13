
const params = new URLSearchParams(location.search);
const product = params.get("product") || "";
const msg = document.querySelector("#mensaje");
if(product){
  msg.value = `Hola, me interesa el artículo: ${product}. ¿Podrían enviarme más información?`;
}

const form = document.querySelector("#contact-form");
form.addEventListener("submit",(e)=>{
  e.preventDefault();
  if(!form.reportValidity()) return;
  // Fake "send"
  setTimeout(()=>{
    document.querySelector("#sent-ok").classList.remove("hidden");
    Toastify({text:"Mensaje enviado correctamente", duration:2500}).showToast();
    form.reset();
  },400);
});
