# 🎧 Projeto Spotify Hashtag - Aplicação Full Stack

## 📢 Sobre o Projeto
Este é um projeto Full Stack inspirado no **Spotify**, desenvolvido para permitir que usuários possam curtir suas músicas e artistas preferidos. Ele combina um **Front-End** moderno em **React.js** com um **Back-End robusto em Node.js e MongoDB**.

---

## 🛠️ Tecnologias Utilizadas
### **🔗 Back-End:**
- Node.js + Express.js
- MongoDB (Mongoose ORM)
- Autenticação JWT (JSON Web Token)

### **🎨 Front-End:**
- React.js (Vite)
- Tailwind CSS para estilização
- Axios para comunicação com a API

---

## 🚀 Como Executar o Projeto

### **1️⃣ Clonar o Repositório**
```sh
git clone https://github.com/seu-usuario/seu-repositorio.git
cd seu-repositorio
```

### **2️⃣ Instalar Dependências**
```sh
npm install
```

### **3️⃣ Criar o Arquivo de Configuração**
Na pasta `back-end/`, crie um arquivo `config.js` e adicione as credenciais do banco de dados:
```javascript
export const MONGO_URI = 'mongodb+srv://guilherme:agwWMHupN9j1AnWU@cluster0.nym2r.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
export const PORT = 3000;
```

### **4️⃣ Executar o Projeto**
```sh
npm run dev
```
Acesse a aplicação em **`http://localhost:5173`**.

---

## 📂 Estrutura do Projeto
```
/seu-repositorio
│── back-end/
│   ├── src/
│   │   ├── api/
│   │   ├── models/
│   │   ├── controllers/
│   ├── server.js
│   ├── package.json
│   ├── config.js (criado manualmente)
│── front-end/
│   ├── src/
│   │   ├── components/
│   │   ├── pages/
│   ├── vite.config.js
│   ├── package.json
│── .gitignore
│── README.md
```
