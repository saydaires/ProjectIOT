import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  
  const firebaseConfig = {
    apiKey: "AIzaSyCMOLltUbE2ji2Y9mddGf87L9fclkAD5Lg",
    authDomain: "iotdatabase-6d965.firebaseapp.com",
    databaseURL: "https://iotdatabase-6d965-default-rtdb.firebaseio.com/",
    projectId: "iotdatabase-6d965",
    storageBucket: "iotdatabase-6d965.firebasestorage.app",
    messagingSenderId: "58423914373",
    appId: "1:58423914373:web:037417f5fabfd4ee861eec"
  };

  
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  
  function enviarJSON(dados) {
    set(ref(db, 'dados/usuario'), dados)
      .then(() => {
        alert("Dados enviados com sucesso!")
        button.innerText= botao.innerText === "Desligado" ? "Ligado" : "Desligado";
      })
      .catch(error => alert("Erro ao enviar dados:", error));
  }
const button = document.getElementById("butaum");
button.onclick= function(){
    enviarJSON(1);
   console.log("debug 1");
}
button.addEventListener("click",function() {
  console.log("debug 2");
  this.innerText = this.innerText === "Desligado" ? "Ligado" : "Desligado";
})