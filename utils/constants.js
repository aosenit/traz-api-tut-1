import { config } from "dotenv";

config();

const dbUri = process.env.DBURL;

const PORT = process.env.PORT;

export { dbUri, PORT };
