import { FavModel } from "../entity/models/fav.models"

export const deleteFavByIdService =async(
  fav_id: string
) => {
  const query = {_id : fav_id}
  try {
    return await FavModel.findOneAndDelete(query)
  } catch (error:any) {
    throw new Error(`Error deleting fav list: ${error.message}`);
  }
}