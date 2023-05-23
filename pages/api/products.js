import { Producto } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    res.json(await Producto.find());
  }

  if (method === "POST") {
    const { title, description, price } = req.body;
    const productDoc = await Producto.create({
      title,
      description,
      price,
    });
    res.json(productDoc);
  }
}
