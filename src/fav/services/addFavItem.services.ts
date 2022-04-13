import { FavModel } from "../entity/models/fav.models";
import { FavItemIdType, IFavItem } from "../entity/types/fav.types";

export const addFavItemService = async( fav_id: string , FavItemRequest: IFavItem ) => {
  try {
    const fav = await FavModel.findById(fav_id);
    if (!fav) throw new Error('Fav List not found'); 
    return await FavModel.findOneAndUpdate(
      {id: fav_id},
      {$push:{fav_items:FavItemRequest}}
    );
  } catch (error:any) {
    throw new Error(`Error adding fav item: ${error.message}`); 
  }
}