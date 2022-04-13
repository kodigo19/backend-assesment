import mongoose from "mongoose";
import {MongoMemoryServer} from "mongodb-memory-server";
import { mockData } from './mockData';

export const mockDatabase = async () => {
  const mongoServer = await MongoMemoryServer.create();

  return {
    connect: async() => {
      try {
        await mongoose.connect(mongoServer.getUri());
      } catch (error: any) {
      }
    },
    closeDatabase: async() => {
      try {
        await mongoose.connection.dropDatabase();
        await mongoose.connection.close();
        mongoServer.stop()
      } catch (error: any) {
      }
    },
    clearDatabase: async () => {
      const collections = mongoose.connection.collections;

      for (const key in collections) {
        const collection = collections[key];
        await collection.deleteMany({});
      }
    },
  };
};