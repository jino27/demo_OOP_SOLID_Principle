class MySQLDatabase {
  save(data: string): void {
    console.log(`Saving ${data} to MySQL`);
  }
}

class App {
  private db: MySQLDatabase;
  constructor() {
    this.db = new MySQLDatabase();
  }
  saveData(data: string): void {
    this.db.save(data);
  }
}
