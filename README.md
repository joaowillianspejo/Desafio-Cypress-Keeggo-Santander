# QA-Commerce

### Loja virtual Geek para simulação de testes 

## Clonando e executando em sua máquina

### Pré-requisito:

- Node.js - Você encontra em: https://nodejs.org/en/
- Visual Studio Code ( ou editor de sua prefrência) - você encontra em: https://code.visualstudio.com/download
- Git: você encontra em: https://git-scm.com/downloads

---

Via terminal, rode os seguintes comandos:
```  
git clone https://github.com/fabioaraujoqa/qa-commerce.git
```
```
cd qa-commerce
```

#### 📦 Para instalar as dependencias:
```
npm install 
```

#### ▶️ Para subir o servidor e o banco:
```
npm start
```

No console vai aparecer os endereços do site e do banco. 
O site você acessaem: http://localhost:3000/

A documentação funciona em: http://localhost:3000/api-docs/

---

### Testes:

Em um novo terminal, na pasta do projeto, rode os seguintes comandos:

#### 🧪 Para rodar os testes via inteface do Cypress
```
npx cy:open
```

#### 🧪 Para rodar todos os testes
```
npx test
```

#### 🧪 Para rodar apenas os testes de UI
```
npx test:ui
```

#### 🧪 Para rodar apenas os testes de API
```
npx test:api
```

*Parceria: Fábio Araújo, Bruna Emerich e Tamara Fontanella






