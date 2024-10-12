import express from 'express';
import dotenv from 'dotenv';
import { sequelize } from './config/database';
import { testConnection } from './utils/connection';


dotenv.config();
const app = express();
app.use(express.json())
app.use(router)
const PORT = 8000;

app.get('/', (req, res) => {
    res.send('¡Welcomeeeee');
  });


  const startServer = async () => {
    try {
      await testConnection();
      console.log('Database connected');

      await sequelize.sync();
      console.log('Database synchronized successfully!');

      app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
      });
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
};
  
startServer();