import * as Model from "../models/product.model.js";

export const getAllProducts = (req, res) => {
    return Model.getAllProducts();
};