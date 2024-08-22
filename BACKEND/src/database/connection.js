const dotenv = require("dotenv");
dotenv.config();

const { Sequelize } = require("sequelize");


const connection = new Sequelize("postgresql://postgres.qtlhosgdwkincihjxobk:Banco-Maravilha@aws-0-us-west-1.pooler.supabase.com:6543/postgres");

module.exports = connection;