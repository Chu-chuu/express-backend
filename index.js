const express=require("express")
const app = express();
const port = 4000;

app.get ("/", (req, res)=>{
    res.send("<h1>Hello World</h1>")}
);

app.post ("/details", (req, res)=>{
    res.send({
        name: "Dora",
        city: "Venice",
    })
});

app.put ("/details/123", (req, res)=>{
    res.send({
        name: "Doreen",
        city: "Paris",
    })}
);

app.delete ("/delete", (req, res)=>{
    res.sendStatus(200);
});

app.listen(port, () => {
    console.log(`Listening on port ${port}`);
  });