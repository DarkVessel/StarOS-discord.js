# StarOS-discord.js
Бот который вам будет помогать вставлять нужные реакции на сообщения и будет выдавать приветствие на нужный канал.
У этого бота мало функций, но для новичков может помощь! Пользуйтесь ;)
- Язык программирования: Node.JS
- База: MySQL, JSON.
- Модули: "discord.js", "dotenv", "mysql2"
- Команды: "console", "eval", "rank".
- Стандартный префикс: `/`
- Специально для хостинга "glitch.com"
- Есть статистика сервера и бота в одном сообщении. (обновляется каждую минуту)
# Указание токена и настроек для подключения к базе.
 Создайте файл ".env" и впишите туда: (Обязательно, без пробелов!)
```
TOKEN=ТокенБота
host=ХостБазы
user=ПользовательБазы
password=ПарольОтБазы
database=НазваниеБазы.
```
# Настройка бота.
В файл "botconfig.json" пишем:
```JSON
{
  "prefix": "Префикс для команд",
  "serverID": "ID вашего сервера.",
  "botOwnerID": "Ваш ID, то есть ID создателя бота.",
  "ChannelWelcomeID": "ID канала куда будут отправляться приветствия.",
  "ChannelReactionID": "ID канала куда бот будет ставить реакции.",
  "react1": "ID первой реакции который бот будет ставить.",
  "react2": "ID второй реакции кооторый бот будет ставить.",
  "RoleRuID": "ID роли для Русов",
  "RoleEnID": "ID роли для Англичан",
  "RoleLevel5ID": "ID роли который выдаётся за получение 5 уровня.",
  "RoleLevel10ID": "ID роли который выдаётся за получение 10 уровня.",
  "RoleLevel15ID": "ID роли который выдаётся за получение 15 уровня.",
  "RoleLevel20ID": "ID роли который выдаётся за получение 20 уровня.",
  "RoleLevel25ID": "ID роли который выдаётся за получение 25 уровня.",
  "RoleLevel30ID": "ID роли который выдаётся за получение 30 уровня.",
  "RoleLevel35ID": "ID роли который выдаётся за получение 35 уровня.",
  "RoleLevel40ID": "ID роли который выдаётся за получение 40 уровня.",
  "RoleLevel50ID": "ID роли который выдаётся за получение 50 уровня.",
  "RoleLevel65ID": "ID роли который выдаётся за получение 65 уровня.",
  "MaxLevel": "Максимальный левел который можно получить.",
  "ChannelLevelID": "ID канала куда будут отправляться сообщения о получении уровня.",
  "colors": "Цвет для имбедов.",
  "ChannelStatusID": "ID канала в котором будет статистика сервера.",
  "MessageStatusID": "ID сообщения бота который будет обновлять статистику."
}
```
В файл "time.json" пишем `{}`
# Настройка базы
Откройте PhpMyAdmin и следуйте следующим шагом:
- Создайте таблицу "Levels"
- Создайте столбцы: "ID", "Level", "Xp", "Maxs"
- Для ID присвойте тип BIGINT и длину 18.
- Для Level присвойте тип INT и длину 3.
- Для Maxs присвойте тип INT и длину 5.
- Для Xp присвойте тип INT и длину 10.
# Команда "console"
Позволяет писать в консоль напрямую из Дискорда.
- Доступна только создателю бота.
# Команда "eval"
Позволяет выполнить JS код напрямую из канала. Доступна только создателю бота.
# Команда "rank"
Позволяет просмотреть ранг у себя или у участника.
# Статистика сервера и бота в одном сообщении.
- Обновляется каждую минуту.
- Показывает количество участников которые не в сети, в сети, ботов и так далее.
- Показывает количество ролей.
- Показывает количество эмоджи на сервере.
- Показывает защиту сервера.
- Показывает статус каналов, количество сообщений и голосовой онлайн.
- Показывает монитор бота: Систему, пользователя, задержка api, озу, аптайм.
<img src='https://cdn.discordapp.com/attachments/605395679019532288/625611797935947776/unknown.png'>
