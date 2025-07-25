import * as Model from "../models/product.model.js";

export const getAllProducts = async () => {
    return await Model.getAllProducts();
};