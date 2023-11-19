import { Schema, model, models } from "mongoose";

const quedaSchema = new Schema({
  caindo: Boolean,
});

const Queda = models.Queda || model("Queda", quedaSchema);

export default Queda;
