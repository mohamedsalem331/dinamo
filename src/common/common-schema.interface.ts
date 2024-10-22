import { Document, Schema as MongooseSchema } from 'mongoose';

export interface ICommon {
  createdAt?: Date;
  updatedAt?: Date;
}