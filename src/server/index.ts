import express from "express";
import bodyParser from "body-parser";
import path from "path";
import cors from "cors";

const buildDir = path.join(process.cwd() + "/build");
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: true,
  })
);
app.use(express.static(buildDir));

app.get("/", function (req, res) {
  res.sendFile(path.join(buildDir, "index.html"));
});

app.get("/some-file", (req, res) => {
  res.send("hello world")
})

app.get("/dummy-account-data", (req, res) => {
  res.send({ accounts: ["23", "42", "13026445"]})
})

const port = 3001;
console.log("checking port", port);
app.listen(port, () => {
  console.log(`Server now listening on port: ${port}`);
});