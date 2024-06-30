import {config} from 'dotenv'
config()
import { app } from './src/app.js'
import connectDB from './src/db/index.js'

const a = 3;
connectDB()
  .then(() => {
    app.listen(process.env.PORT || 8000, () => {
      console.log(`Server is running at port: ${process.env.PORT || 8000}`);
    });
    app.on("error", (error) => {
      console.log("Error", error);
      throw error;
    });
  })
  .catch((err) => {
    console.log("MONGODB db connection failed!!", err);
  });


  export default a