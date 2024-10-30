// Importa Firebase e Firestore
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-app.js";
import { getFirestore, collection, getDocs } from "https://www.gstatic.com/firebasejs/9.1.3/firebase-firestore.js";

// Configuração do Firebase
const firebaseConfig = {
    apiKey: "sua_apiKey",
    authDomain: "seu_authDomain",
    projectId: "seu_projectId",
    storageBucket: "seu_storageBucket",
    messagingSenderId: "seu_messagingSenderId",
    appId: "seu_appId"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
