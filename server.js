import app from "./app.js";

app.listen(process.env.PORT, () => {
  console.log(`Server us running on http://127.0.0.1:${process.env.PORT}`);
});
