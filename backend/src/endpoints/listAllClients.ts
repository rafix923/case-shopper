import { Request, Response } from "express";
import connection from "../dataBase/connections";

export const listAllClients = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const allClients = await connection.select("*").from("Case_Clients");
        res.status(200).send(allClients)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};