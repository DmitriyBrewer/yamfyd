// import express from "express";
// import exphbs from "express-handlebars";
// import path from "path";

// const app = express();
// const port = 3000;

// // Устанавливаем Handlebars как движок представлений
// app.engine("handlebars", exphbs());
// app.set("view engine", "handlebars");

// // Указываем путь к папке с шаблонами Handlebars
// app.set("views", path.join(__dirname, "views"));

// // Middleware для обслуживания статических файлов
// app.use(express.static(path.join(__dirname, "public")));

// // Роут для отображения страницы с Handlebars-шаблоном
// app.get("/", (req, res) => {
//     res.render("auth");
// });

// app.listen(port, () => {
//     console.log(`Server running at http://localhost:${port}`);
// });
