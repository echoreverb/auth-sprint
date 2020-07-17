# Проектная работа #14

> В этой работе роуты проекта Mesto защищаются авторизацией с помощью [jwt](https://www.npmjs.com/package/jsonwebtoken), [bcrypt](https://www.npmjs.com/package/bcrypt), [helmet](https://helmetjs.github.io).

## Ссылка на скачивание

> [v0.0.2](https://github.com/echoreverb/auth-sprint)

## Установка

> установка модулей npm

```shell
$ npm install
```

> запуск сервера на `localhost:3000`

```shell
$ npm run start
```

> запуск сервера на `localhost:3000` c хот-релоудом

```shell
$ npm run dev
```

## Запросы

- POST /signin - авторизирует пользователя { email, password }
- POST /signup - создаёт профиль пользователя { name, about, avatar, email, password }

- GET /users — возвращает всех пользователей 
- GET /users/:userId - возвращает пользователя по _id

- PATCH /users/me — обновляет профиль { name, about }
- PATCH /users/me/avatar — обновляет аватар { avatar }
- PUT /cards/:cardId/likes — поставить лайк карточке
- DELETE /cards/:cardId/likes — убрать лайк с карточки

- GET /cards — возвращает все карточки
- POST /cards — создаёт карточку { name, link }
- DELETE /cards/:cardId — удаляет карточку по идентификатору
