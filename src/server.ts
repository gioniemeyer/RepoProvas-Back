import "./setup";
import app, {init} from "./app";

init().then(() => {
  const port = process.env.PORT || 4000;

  app.listen(port, () => {
    console.log(`Server is listening on port ${port}.`);
  });  
});