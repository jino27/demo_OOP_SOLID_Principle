"use strict";
class MongoDatabase {
    save(data) {
        console.log(`Saving ${data} to MongoDB`);
    }
}
class BetterApp {
    constructor(database) {
        this.database = database;
    }
    saveData(data) {
        this.database.save(data);
    }
}
// Demo
const mongo = new MongoDatabase();
const app = new BetterApp(mongo);
app.saveData("User Data");
//# sourceMappingURL=using.js.map