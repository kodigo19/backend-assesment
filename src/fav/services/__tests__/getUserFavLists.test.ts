import { FavModel } from "../../entity/models/fav.models";
import { IFav } from "../../entity/types/fav.types";
import { getUserFavListsService } from "../getUserFavLists.services";

const FavModelMock = FavModel as jest.MockedClass<typeof FavModel>;

const mockFavList = [
  {
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
  },
  {
    _id: '62508783efb8cf674e0100ec',
    user_id: '624fbbdfea80babf8a455932',
    name: "Canciones Favoritas",
    fav_items: [
      {
        title: "Bypass 2",
        description: "Bachata",
        link: "https://google.com/?bypass"
      },
      {
        title: "Aguanile 2",
        description: "Salsa",
        link: "https://google.com/?aguanile"
      }
    ]
  }
]

describe('getUserFavLists', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Should return an error when user_id is not provided', async() => {
    try {
      await getUserFavListsService('');
    } catch (error: any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  })

  it('Should return an error when user_id is not valid', async() => {
    try {
      await getUserFavListsService('asdasdasdad');
    } catch (error: any) {
      expect(error.message).toBeDefined();
      expect(error).toBeInstanceOf(Error);
    }
  });

  it('Should call FavModel.findById when the user_id is valid',async () => {
    const user_id = '624fbbdfea80babf8a455932';
    try {
      FavModelMock.find = jest.fn();
      await getUserFavListsService(user_id);
    } catch (error: any) {
      expect(FavModelMock.find).toHaveBeenCalledTimes(1);
      expect(FavModelMock.find).toHaveBeenCalledWith(user_id);
    }
  });

  it('Should an array of all Fav List from the user_id', async() => {
    const user_id = '624fbbdfea80babf8a455932';
    FavModelMock.find = jest
      .fn()
      .mockImplementation(() => Promise.resolve(mockFavList));
    const result: IFav[] | undefined = await getUserFavListsService(user_id);
    expect(result).toEqual(mockFavList)
  });

});