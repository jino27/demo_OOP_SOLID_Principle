interface IDatabase {
  save(data: string): void;
}

class MongoDatabase implements IDatabase {
  save(data: string): void {
    console.log(`Saving ${data} to MongoDB`);
  }
}

class BetterApp {
  constructor(private database: IDatabase) {}

  saveData(data: string): void {
    this.database.save(data);
  }
}

// Demo
const mongo = new MongoDatabase();
const app = new BetterApp(mongo);
app.saveData("User Data");