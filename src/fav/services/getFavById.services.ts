import { FavModel } from "../entity/models/fav.models";

export const getFavByIdService = async(fav_id:string) => {
  try {
    if (!fav_id) throw new Error("invalid fav id");
    return await FavModel.findById(fav_id);
  } catch (error: any) {
    throw new Error(`Error retrieving fav list: ${error.message}`);
  }
}