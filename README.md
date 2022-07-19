# Camp In

Aplicação que simula um site de uma empresa de acampamento e viagens em ambientes rústicos, no qual permite que o usuário realize um CRUD, ou seja, o seu cadastro, login e recuperação de senha.

![Preview](https://github.com/mateussantanasilva/CampIn/blob/main/github/front-cover.png)

## 🚀 Tecnologias

Esse projeto foi desenvolvido com as seguintes tecnologias:

- HTML
- CSS
- [TypeScript](https://www.typescriptlang.org/)
- [NodeJS](https://nodejs.org/en/)
- [EJS](https://ejs.co)
- [Express](https://www.npmjs.com/package/express)
- [Prisma](https://www.prisma.io/)

## 💻 Acesse o projeto online

- https://camp-in-register.herokuapp.com/

## 💻 Acesse o projeto local

### :white_check_mark: Requisitos ###

Antes de começar :checkered_flag:, você precisa ter o [Git](https://git-scm.com) e o [Node](https://nodejs.org/en/) instalados.

### :checkered_flag: Começo ###

```bash
# Clone o projeto
$ git clone https://github.com/mateussantanasilva/CampIn.git

# Acesse
$ cd CampIn/

# Instale as dependências
$ npm install

# Inicialize o prisma client
$ npx prisma generate

# Execute o projeto
$ npm run dev

# O servidor será inicializado e poderá ser acessado por: <http://localhost:3000>
# Caso a porta esteja ocupada, vá até src/server.ts e altere a porta para uma livre.
```