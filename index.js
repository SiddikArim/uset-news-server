const express = require("express");
const app = express();
const cors = require("cors");
const port = process.env.PORT || 5000;

const categories = require("./data/categories.json");
const news = require("./data/news.json");

app.use(cors());
app.get("/", (req, res) => {
  res.send("news is running");
});

app.get("/categories", (req, res) => {
  res.send(categories);
});
app.get("/news", (req, res) => {
  res.send(news);
});
app.get("/categories/:id", (req, res) => {
  const id = parseInt(req.params.id);
  if (id === 0) {
    res.send(news);
  } else {
    const categoryNews = news.filter((c) => parseInt(c.category_id) === id);
    res.send(categoryNews);
  }
});
app.get("/news/:id", (req, res) => {
  const id = req.params.id;
  console.log(id);
  const seletedNews = news.find((n) => n._id === id);
  res.send(seletedNews);
});
app.listen(port, () => {
  console.log(`news is running ${port}`);
});
