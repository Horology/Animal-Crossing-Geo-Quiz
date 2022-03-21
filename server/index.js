import 'dotenv/config';
import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import {getVillagers, getCountries} from './routes.js';

const app = express();
const router = express.Router(); 
app.use(bodyParser.json({limit: "30mb", extended: true}));
app.use(bodyParser.urlencoded({limit: "30mb", extended: true}));
app.use(cors());

router.get('/villagers', getVillagers)
router.get('/countries', getCountries)
app.use('/s', router)
app.use('/', router)

const PORT = process.env.PORT || 5000;


app.listen(PORT,() => console.log(`Server running on port: ${PORT}`))


