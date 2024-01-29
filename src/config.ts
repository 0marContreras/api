import dotenv from 'dotenv';
dotenv.config();

export default{
    DB_URI: process.env.DB_URI,
    SERVER_PORT: process.env.PORT
}