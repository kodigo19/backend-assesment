import { FavModel } from "../entity/models/fav.models";
import { IFav } from "../entity/types/fav.types";

export const getUserFavListsService = async(user_id: String):Promise<IFav[] | undefined> => {
  try {
    const userFavLists: IFav[] = await FavModel.find({user_id});
    return userFavLists;
  } catch (error: any) {
    throw new Error(`Error getting fav list: ${error.message}`);
  }
}