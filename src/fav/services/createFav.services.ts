import { FavModel } from "../entity/models/fav.models";
import { createAny } from "../../shared/factory/createAny";
import { ICreateFav, IFav } from "../entity/types/fav.types";

export const createFavService = async (favRequest: ICreateFav): Promise<IFav> => {
  try {
    const fav = await createAny(FavModel)(favRequest);
    return fav as IFav;
  } catch (error: any) {
    throw new Error(`Error create fav: ${error.message}`); 
  }
}