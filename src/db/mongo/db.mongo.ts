import mongoose from "mongoose";


export class MongoDb {

  constructor(
    private readonly mongoUri: string,
  ){};


  public async connect(){
    try {
      await mongoose.connect(this.mongoUri);
    } catch (error) {
      console.log(`MongoDB Error: ${error}`);
    }
  }

}