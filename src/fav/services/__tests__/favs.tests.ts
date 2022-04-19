import supertest from 'supertest';
import app from '../../../app';
import { mockData } from '../../../shared/testUtils/mockData';
import { mockDatabase } from '../../../shared/testUtils/mockDb';
import { tokenService } from "../../../auth/utils/token.utils";
import { createTokenService } from '../../../auth/services/createToken.services';
import { UserModel } from '../../../user/entity/models/user.models';
import { FavModel } from '../../../fav/entity/models/fav.models';

const db = mockDatabase();
const {createToken} = tokenService;

describe('Favs', () => {
  beforeAll(async () => {
    (await db).connect();
  });

  afterAll(async () => {
    (await db).clearDatabase;
    (await db).closeDatabase;
  })

  describe('POST', () => {
    it('should return status 401 when token is not provided', async() => {
      const {body}=await supertest(app)
        .post('/favs')
        .set('Authorization', '')
        .expect(401);
        expect(body).toEqual({message: 'No token provided'});
    });

    it('should return status 400 when token is invalid', async() => {
      const fakeToken = '1111'
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeFav)
        .set('Authorization', fakeToken)
        .expect(400);
      expect(body).toEqual({message: 'Error: Invalid token', type: 'validation'});
    });

    it('should return status 403 when user_id is invalid', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeWrongFavUserId)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(403);
      expect(body).toEqual({message: "Error: Invalid user Id", type: 'validation'});
    });

    it('should return status 403 when name is invalid', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const mockUser = mockData.fakeUserData
      const validUser = new UserModel(mockUser);
      const savedUser = await validUser.save();
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeWrongFavName)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(403);
      expect(body).toEqual({message: "ValidationError: name is required", type: 'validation'});
    });

    
    it('should return status 403 when Item title is invalid', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeWrongFavItemTitle)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(403);
      expect(body).toEqual({message: "ValidationError: title is required", type: 'validation'});
    });

    it('should return status 403 when Item Description is invalid', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeWrongFavItemDescription)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(403);
      expect(body).toEqual({message: "ValidationError: description is required", type: 'validation'});
    });

    it('should return status 403 when Item title is invalid', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeWrongFavItemLink)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(403);
      expect(body).toEqual({message: "ValidationError: link is required", type: 'validation'});
    });

    it('should return status 201 when fav is created', async() => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const {body} = await supertest(app)
        .post('/favs')
        .send(mockData.fakeFav)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(201);
      expect(body).toEqual({data: mockData.fakeFavResponse, success: true});
    });
  });
  describe('GET', () => {
    it('should return status 200', async () => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const { body } = await supertest(app)
        .get(`/favs?user_id=${mockData.fakeUserId}`)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(200);

      expect(body).toEqual({data:[mockData.fakeFavResponse], success: true});
    })
  });
  describe('DELETE', () => {
    it('should return status 200 when Fav is deleted', async () => {
      const fakeToken = await createTokenService(mockData.fakeUserId,mockData.fakeUserData);
      const mockFav = mockData.fakeFavToCreate
      const validFav = new FavModel(mockFav);
      const savedFav = await validFav.save();
      const { body } = await supertest(app)
        .delete(`/favs/${savedFav._id}`)
        .set('Authorization', `Bearer ${fakeToken.authToken}`)
        .expect(200);
    })
  });
})