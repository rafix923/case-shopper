import { Request, Response } from "express";
import connection from "../dataBase/connections";

export const invetory = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const showInvetory = await connection.select("name", "qty_stock").from("Case_Products");
        res.status(200).send(showInvetory)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};