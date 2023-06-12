import { Request, Response } from "express";
import connection from "../dataBase/connections";

export const addClient = async (req: Request, res: Response): Promise<void> => {
    let errorCode = 400;
    try {
        const name = req.body.name;
        if (!name) {
            throw new Error("Digite o nome do cliente que deseja adicionar.")
        }
        await connection("Case_Clients").insert({
            name
        })
        res.status(200).send(`Cliente ${name}, foi adicionado com sucesso.`)
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};