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

        // Check stock before register order
        await products.forEach(async product => {
            const getStock = await connection.select("qty_stock").from("Case_Products").where({ id: product.id });
            const stock = Number(getStock[0].qty_stock);
            if (stock < product.qty) {
                throw new Error("Desulpas, mas não temos no estoque a quantidade solicitada.");
            }
        });

        products.forEach(async product => {
            await connection("Case_Orders").insert(
                {
                    order_date: new Date().toISOString().slice(0, 10),
                    delivery_date,
                    qty: product.qty,
                    fk_client,
                    fk_product: product.id
                }
            );

            const getStock = await connection.select("qty_stock").from("Case_products").where({ id: product.id });
            const stock = Number(getStock[0].qty_stock);

            await connection("Case_Products").where({ id: product.id }).update({ qty_stock: stock - product.qty });
        });
        res.status(200).send("Seu pedido foi realizado.")
    } catch (error: any) {
        res.status(errorCode).send({ message: error.message })
    }
};