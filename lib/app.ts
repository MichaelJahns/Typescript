import * as express from "express";
import * as bodyParser from "body-parser";
import { Request, Response} from "express";

class App {
    constructor(){
        this.app = express();
        this.config();
    }
    public app: express.Application;

    private config():void {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }
    private routes(): void {
        const router = express.Router();

        router.get('/test', (req:Request, res:Response) => {
            res.status(200).send({
                message: 'Hello World.'
            })
        })

        router.post('/', (req:Request, res:Response) => {
            const data = req.body;
            res.status(200).send(data);
        })

        this.app.use('/', router)
    }
}

export default new App().app;