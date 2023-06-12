import { Request, Response } from "express";
import connection from "../dataBase/connections";

export const listAllProducts = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const allProducts = await connection.select("*").from("Case_Products");
        res.status(200).send(allProducts)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};