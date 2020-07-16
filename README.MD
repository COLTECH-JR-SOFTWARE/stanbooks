<h1 align="center">
    STANDBOOK
    <br>
</h1>

<h1 align="center">
   Aplication coltech
</h1>

<h4 align="center">
  BACKENED STANDBOOK
</h4>

<p align="center">
<img alt="Last commit on GitHub" src="https://img.shields.io/github/last-commit/joaomenna1/COLTECH?color=7159C1">
<img alt="Made by Joao nogueira" src="https://img.shields.io/badge/made%20by-joaomenna1-%20?color=7159C1">
<img alt="Project top programing language" src="https://img.shields.io/github/languages/top/joaomenna1/COLTECH?color=7159C1">
<img alt="GitHub license" src="https://img.shields.io/github/license/joaomenna1/COLTECH?color=7159C1">
</p>
<br><br>

## :rocket: Tecnologias e Ferramentas

-   [Node.js](https://nodejs.org/)
-   [Express](https://expressjs.com/)
-   [JWT](https://jwt.io/)
-   [Yup](https://www.npmjs.com/package/yup)
-   [Multer](https://github.com/expressjs/multer)
-   [Docker](https://www.docker.com/)
-   [Sequelize](https://sequelize.org/)
-   [Postgresql](https://www.postgresql.org/)
-   [Postbird](https://www.electronjs.org/apps/postbird)
-   [ESLint](https://eslint.org/)
-   [Prettier](https://prettier.io/)
-   [VS Code](https://code.visualstudio.com/)

## :information_source: Iniciando a aplicação

### Requisitos

Para rodar a aplicação é necessário:
* [Git](https://git-scm.com)
* [Node](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)

<br>
Para usar/rodar o docker na aplicação, os seguintes passos irão fazer a criação da imagem:

```bash
# install Postgres image (if you don't specify an username it will be postgres by default)
docker run --name stanbookDB -e POSTGRES_PASSWORD=docker -p 5436:5432 -d postgres:11

# start Postgres
docker start stanbookDB

```
### Backend
Com o clone Orepositorio e as instale as dependencias:
```bash
# to clone the repository
git clone https://github.com/COLTECH-JR-SOFTWARE/stanbooks.git

# go into the backend folder
cd stanbooks/standbooks_backend

#install the backend dependencies
yarn

<<<<<<< HEAD

=======
>>>>>>> 642bc52e393648733f6eb65a25b2d30bd2946a9d
```
Para rodar as migrations,execute:
```bash
# run migrations
yarn sequelize db:migrate

# run api
yarn dev
```

Use this credentials to access the web application
<blockquote><strong>email:</strong>usertest@email.com</blockquote>
<blockquote> <strong>senha:</strong> 123456</blockquote>


**Há um log do Insomnia para acessar as rotas mais facilmente**

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

