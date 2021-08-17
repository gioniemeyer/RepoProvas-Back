# repoprovas-backend 🖊️

Imagine a world where you could take a look at old exams from that professor or subject? That's an API that supports repoprovas APP, which does just that!

## About

This is an web application with which lots of people can manage their own expenses and revenues. Below are the implemented features:

- Upload a School Test sending a PDF link and connecting it with required informations
- Visualize a School Test filtered by professor
- Visualize a School Test filtered by subject

By using this app any user can learn how they've been using their money and always keep track of your balance.

## Technologies
The following tools and frameworks were used in the construction of the project:<br>
<p>
  <img style='margin: 5px;' src='https://img.shields.io/badge/Node.js-339933?style=for-the-badge&logo=nodedotjs&logoColor=white'>
  <img style='margin: 5px;' src='https://img.shields.io/badge/PostgreSQL-316192?style=for-the-badge&logo=postgresql&logoColor=white'>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Express.js-000000?style=for-the-badge&logo=express&logoColor=white"/>
  <img style='margin: 5px;' src="https://img.shields.io/badge/Jest-C21325?style=for-the-badge&logo=jest&logoColor=white"/>
</p>

## How to run

1. First of all, have you already visited the front-end repository? If not, please, start there (https://github.com/gioniemeyer/repoprovas). I'll wait.
2. Clone this repository
3. Install dependencies
```bash
npm i
```
4. Create an .env file based on env.example
5. The files needed to create development and test database used by the application are in the folder "utils", you can use dump.sql
6. Run the back-end with
```bash
npm run dev
```
7. Now that your server is working, you may return to front-end instructions!

Bonus: If you wanna test it you can ! Run tests with
```bash
npm run test
```
