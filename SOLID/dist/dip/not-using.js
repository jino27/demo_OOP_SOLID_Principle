"use strict";
class MySQLDatabase {
    save(data) {
        console.log(`Saving ${data} to MySQL`);
    }
}
class App {
    constructor() {
        this.db = new MySQLDatabase();
    }
    saveData(data) {
        this.db.save(data);
    }
}
//# sourceMappingURL=not-using.js.map