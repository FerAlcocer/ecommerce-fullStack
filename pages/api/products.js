import { Producto } from "@/models/Product";
import { mongooseConnect } from "@/lib/mongoose";

export default async function handle(req, res) {
  const { method } = req;
  await mongooseConnect();

  if (method === "GET") {
    if (req.query?.id) {
      res.json(await Producto.findOne({ _id: req.query.id }));
    } else {
      res.json(await Producto.find());
    }
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

  if (method === "PUT") {
    const { title, description, price, _id } = req.body;
    await Producto.updateOne({ _id }, { title, description, price });
    res.json(true);
  }

  if (method === "DELETE") {
    if (req.query?.id) {
      await Producto.deleteOne({ _id: req.query?.id });
      res.json(true);
    }
  }
}
