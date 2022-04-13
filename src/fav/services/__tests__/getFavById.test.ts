import { IFav } from "fav/entity/types/fav.types";
import { FavModel } from "../../entity/models/fav.models";
import { getFavByIdService } from "../getFavById.services";


const FavModelMock = FavModel as jest.MockedClass<typeof FavModel>;

const mockFav = {
  _id: '62508783efb8cf673e0100ec',
  user_id: '624fbbdfea80babf8a455932',
  name: "Canciones Favoritas",
  fav_items: [
    {
      title: "Bypass",
      description: "Bachata",
      link: "https://google.com/?bypass"
    },
    {
      title: "Aguanile",
      description: "Salsa",
      link: "https://google.com/?aguanile"
    }
  ]
}

describe('getFavByIdService', () => {
  
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return an error when id is not provided', async() => {
    try {
      await getFavByIdService('');
    } catch (error: any) {
      expect(error.message).toEqual('Error retrieving fav list: invalid fav id');
    }
  });

  it('should return an error when id is not valid', async() => {
    try {
      await getFavByIdService('asdasd')
    } catch (error:any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('should call FavModel.findById when the fav_id is valid', async() => {
    FavModelMock.findById = jest.fn();
    const fav_id = '62508783efb8cf673e0100ec';
    await getFavByIdService(fav_id);
    expect(FavModelMock.findById).toHaveBeenCalledTimes(1);
    expect(FavModelMock.findById).toHaveBeenCalledWith(fav_id);
  });

  it('should return an Fav List when the fav_id is valid', async() => {
    const fav_id = '62508783efb8cf673e0100ec';
    FavModelMock.findById = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockFav));
    const result: IFav | null = await getFavByIdService(fav_id);
    expect(result).toEqual(mockFav);
  });
})