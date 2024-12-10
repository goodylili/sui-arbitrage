import { RestClientV5 } from "bybit-api";
import * as dotenv from "dotenv";

dotenv.config();

const client = new RestClientV5({
  testnet: process.env.ENVIRONMENT || true,
  key: process.env.API_KEY,
  secret: process.env.API_SECRET,
});

export default client;
