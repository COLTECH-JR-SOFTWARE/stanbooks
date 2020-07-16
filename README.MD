<h1 align="center">
    Aplication standbook
    <br>
</h1>

<h1 align="center">
   Aplication coltech
</h1>

<h4 align="center">
  backend standbook
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/joaomenna1/COLTECH?color=7159C1">
<img alt="Made by Joao nogueira" src="https://img.shields.io/badge/made%20by-joaomenna1-%20?color=7159C1">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/joaomenna1/COLTECH?color=7159C1">
<img alt="GitHub license" src="https://img.shields.io/github/license/joaomenna1/COLTECH?color=7159C1">
</p>

<p align="center">
  <a href="#rocket-built-with">Built with</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#information_source-how-to-run">How to run</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#page_facing_up-license">Licence</a>&nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
  <a href="#mailbox_with_mail-get-in-touch">Get in touch</a>
  <a href="#commit">Padrão de commit</a>

</p>
<br><br>

## :rocket: Built with

This project was developed with the following technologies:

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [JWT](https://jwt.io/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Date-fns](https://date-fns.org/)
-   [Multer](https://github.com/expressjs/multer)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

## :information_source: Getting Started

### Requirements

To run the application you will need:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

I strongly recommend using [Docker](https://www.docker.com/) to run the databases.
<br>
If you decide to use docker, follow this steps to install and run the docker images.

```bash
# install Postgres image (if you don't specify an username it will be postgres by default)
docker run --name stanbookDB -e POSTGRES_PASSWORD=docker -p 5436:5432 -d postgres:11

# start Postgres
docker start stanbookDB

```
### Backend
Now clone the repository and install the dependencies.
```bash
# to clone the repository
git clone https://github.com/COLTECH-JR-SOFTWARE/stanbooks.git

# go into the backend folder
cd stanbooks/standbooks_backend

#install the backend dependencies
yarn


```
In order to connect to the database, you will need to enter the access informations into a .env file, based on a .env.example file that is provided in the backend folder, change the variables according to your environment.
```bash
# run migrations
yarn sequelize db:migrate

# run seeds
yarn sequelize db:seed:all

# run api
yarn dev
```

Use this credentials to access the web application
<blockquote><strong>email:</strong>usertest@email.com</blockquote>
<blockquote> <strong>senha:</strong> 123456</blockquote>



# Padrões de commit

## commit

- Usar modo imperativo ("Adiciona feature" Não "Adicionando feature" ou "Adicionada feature")
- Primeira linha deve ter no maximo 72 caracteres
- Considere descrever com detalhes no corpo do commit
- Considere usar um emoji no iní­cio da mensagem de commit

Emoji | Code | Commit Type
------------ | ------------- | -------------
:tada: | `:tada:` | initial commit
:art: | `:art:` | quando melhorar a estrutura/formato do codigo
:racehorse: | `:racehorse:` | quando melhorar a performance
:memo: | `:memo:` | quando escrever alguma documentação
:bug: | `:bug:` | quando corrigir um bug
:fire: | `:fire:` | quando remover códigos ou arquivos
:green_heart: | `:green_heart:` | quando corrigir uma build no CI
:white_check_mark: | `:white_check_mark:` | quando adicionar testes
:lock: | `:lock:` | quando melhorar a segurança
:arrow_up: | `:arrow_up:` | quando der upgrade em dependencias
:arrow_down: | `:arrow_down:` | quando der downgrade em dependencias
:poop: | `:poop:` | deprecated
:construction: | `:construction:` | em construção
:rocket: | `:rocket:` | nova feature
:see_no_evil: | `:see_no_evil:` | gambiarra
:gift: | `:gift:` | nova versão

### Exemplo de commit
```bash
git commit -m ":memo: Adiciona instruções"
>
> Foi criado o arquivo CONTRIBUTING.md com as instruÃ§Ãµes de
> como fazer um bom commit"
```


## :mailbox_with_mail: Get in touch!

[LinkedIn](https://linkedin.com/in/nogueira-menna-barreto)

---

Made with :coffee: and ♥ by Jamelão.
