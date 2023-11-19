import { NextApiRequest, NextApiResponse } from "next";
import mongoDb from "../../database/connect";
import queda from "../../models/queda";

const id = process.env.ID;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Conectando ao banco de dados");
  await mongoDb();
  const valor = await queda.findById(id);
  return res.json(valor);
};
