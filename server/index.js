//imports
import express from "express";
import open from "open";
import "dotenv/config";
import ejsMate from "ejs-mate";
import { fileURLToPath } from "node:url";
import path from "node:path";

//var
const app = express();
const port = process.env.PORT || 8080;
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

//config
app.listen(port, () => {
  console.log(`App is listening on port ${port}`);
  open(`http://localhost:${port}`);
});
app.set("view engine", "ejs");
app.engine("ejs", ejsMate);
app.set("views", path.join(__dirname, "../web"));

//middleware
app.use(express.static(path.join(__dirname, "/public")));
app.use(express.static("/node_modules/bootstrap/dist"));

app.get("/", (req, res) => {
  const page = {
    name: "Home",
  };
  res.render("index", { page });
});
