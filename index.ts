import express, {json} from 'express';
import dotenv from "dotenv"

dotenv.config();

const server = express();
const port = process.env.PORT || 8989;

// server.use(express.json());
server.use(json());

// server.listen('8989', () => {
//     console.log('listening to port 8989')
// });
server.listen(port, () => {
    console.log('listening to port:', port)
});