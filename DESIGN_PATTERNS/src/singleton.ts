class DatabaseConnection {
  private static instance: DatabaseConnection;

  // Private constructor prevents direct instantiation
  private constructor() {
    console.log("New database connection created");
  }

  // Static method to control instance creation
  public static getInstance(): DatabaseConnection {
    if (!DatabaseConnection.instance) {
      DatabaseConnection.instance = new DatabaseConnection();
    }
    return DatabaseConnection.instance;
  }

  // Example method
  public query(sql: string) {
    console.log(`Executing SQL: ${sql}`);
  }
}

// Client code
const db1 = DatabaseConnection.getInstance();
const db2 = DatabaseConnection.getInstance();

db1.query("SELECT * FROM users");

console.log(db1 === db2); // true → same instance
