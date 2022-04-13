import { FavModel } from "../entity/models/fav.models"
import { IFav } from "../entity/types/fav.types"

export const getAllFavsService =async():Promise<IFav[] | undefined> => {
  try {
    const favList: IFav[] = await FavModel.find({});
    return favList;
  } catch (error:any) {
    throw new Error(`Error getting favs: ${error.message}`);
  }
}