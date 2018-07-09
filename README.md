#### Реализовать конструктор пицц

#### Работающий бекенд на
[https://test-2b-backend.herokuapp.com/](https://test-2b-backend.herokuapp.com)

Для красивого json в консоли установить можно jq.
На ubuntu: ```apt-get install jq```
На archlinux: ```pacman -S jq```

#### Пользователи(пароль):
```admin(admin)```
```user1(user1)```
```user2(user2)```

##### Login:

```curl -s -X POST -H "Content-type: application/x-www-form-urlencoded" -H "Accept: application/json" -d "username=admin&password=admin&grant_type=password&client_id=react&client_secret=null" https://test-2b-backend.herokuapp.com/login | jq .```

##### Logout:

```curl -s -X POST -H "Authorization: Bearer <token>" -H "Content-type: application/json" -d '{ "token": "<token>"}' -H "Accept: application/json" https://test-2b-backend.herokuapp.com/logout | jq .```

##### Pizzas list:

Token брать из ответа на логин.

```curl -s -X GET -H "Authorization: Bearer <token>" -H "Content-type: application/json" -H "Accept: application/json" https://test-2b-backend.herokuapp.com/pizzas\?offset\=10 | jq .```

##### Add pizza:

```curl -s -X POST -H "Authorization: Bearer <token>" -H "Content-type: application/json" -H "Accept: application/json" -d '{"name":"curl_99999", "ids": [2, 8, 17]} 'https://easypay-test-backend.herokuapp.com/phones | jq .```

### Установка на свой компьютер (линукс, мак):

```nvm install 8.9.1``` или можно свежую 9.2.0

```git clone https://github.com/vatic/test-2b-bnd.git```

```cd test-2b-backend```

Поправить юзера и пароль в development и test для своего mysql юзера в knexfile.

Создать базу:
```CREATE DATABASE pizza_dev```

Запусить миграции:
```npm run migrate:latest```

Заполнить таблицы:
```npm run seed:run```

Стартануть сервер:
```npm start```

#### Тесты

Создать базу:
```CREATE DATABASE pizza_test```

Запусить миграции:
```NODE_ENV=test npm run migrate:latest```

Заполнить таблицы:
```NODE_ENV=test npm run seed:run```

Остановить dev сервер.

Запусть сервер для e2e тестов:
```NODE_ENV=test npm start```

Запустить тесты:
```npm test```





