const app = require("./app");

// âšī¸ Sets the PORT for our app to have access to it. If no env has been set, we hard code it to 3000
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server đ on port http://localhost:${PORT}`)
});
