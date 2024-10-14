import  { express } from "express";

export const router = express.Router();

router
    .route("v1/")
    .get((req, res)=>{
        res.send(`<h1>Olá a requisição é ${req.baseUrl}</h1>`)
    } );


  express.