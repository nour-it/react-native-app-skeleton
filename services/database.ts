import SQLite from 'react-native-sqlite-storage';

// Enable debugging in development
SQLite.DEBUG(true);
SQLite.enablePromise(true);

const DATABASE_NAME = 'myapp.db';

export class DatabaseService {
  private database: SQLite.SQLiteDatabase | null = null;

  public async initDatabase(): Promise<void> {
    try {
      this.database = await SQLite.openDatabase({
        name: DATABASE_NAME,
        location: 'default',
      });
      
      await this.createTables();
    } catch (error) {
      console.error('Error initializing database:', error);
      throw error;
    }
  }

  private async createTables(): Promise<void> {
    if (!this.database) return;

    // Add your table creation queries here
    const queries = [
      `CREATE TABLE IF NOT EXISTS example (
        id INTEGER PRIMARY KEY AUTOINCREMENT,
        name TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      );`
    ];

    for (const query of queries) {
      await this.database.executeSql(query);
    }
  }

  public async closeDatabase(): Promise<void> {
    if (this.database) {
      await this.database.close();
      this.database = null;
    }
  }

  // Méthode utilitaire pour exécuter des requêtes
  public async executeQuery(query: string, params: any[] = []): Promise<any> {
    if (!this.database) throw new Error('Database not initialized');
    return await this.database.executeSql(query, params);
  }
}

export const databaseService = new DatabaseService();
