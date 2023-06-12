import { Request, Response } from "express";
import connection from "../dataBase/connections";
import { TProduct } from "../models/Product";

export const addNewOrder = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const delivery_date = req.body.delivery_date;
        const fk_client = req.body.fk_client;
        const products: TProduct[] = req.body.products;

        if (!delivery_date) {
            throw new Error("Necessário adicionar uma data válida.");
        };

        if (!products) {
            throw new Error("Falta adicionar produtos desejados.");
        };

        if (!fk_client) {
            throw new Error("Falta adicionar o id do cliente.");
        };


        await connection("Case_Orders").insert(
            {
                order_date: new Date().toISOString().slice(0, 10),
                delivery_date,
                fk_client
            }
        );
        res.status(200).send("Seu pedido foi realizado.")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};