import router from "./routes/index";
import express from "express"

const app = express();

app.use(express.json());
app.use('/api', router);

app.listen(5000, () => {
    console.log("Server running on http://localhost:5000");
});