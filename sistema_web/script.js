import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getDatabase, ref, set } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-database.js";

  
  const firebaseConfig = {
    apiKey: "SUA_API_KEY",
    authDomain: "SEU_PROJETO.firebaseapp.com",
    databaseURL: "https://SEU_PROJETO-default-rtdb.firebaseio.com",
    projectId: "SEU_PROJETO",
    storageBucket: "SEU_PROJETO.appspot.com",
    messagingSenderId: "SEU_ID",
    appId: "SUA_APP_ID"
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
    //enviarJSON(1);
   console.log("debug 1");
}
button.addEventListener("click",function() {
  console.log("debug 2");
  this.innerText = this.innerText === "Desligado" ? "Ligado" : "Desligado";
})