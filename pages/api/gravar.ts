import { NextApiRequest, NextApiResponse } from "next";
import mongoDb from "../../database/connect";
import queda from "../../models/queda";

const id = process.env.ID;

export default async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Conectando ao banco de dados");
  await mongoDb();

  const { caindo } = req.body;

  if (caindo) {
    const quedas = await queda.findByIdAndUpdate(id, { caindo: true });

    console.log(quedas);
    return res.json({ message: "velho caindo" });
  } else {
    const quedas = await queda.findByIdAndUpdate(id, { caindo: false });

    console.log(quedas);
    return res.json({ message: "Velho panas" });
  }
};
