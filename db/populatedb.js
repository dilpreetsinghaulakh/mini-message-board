#! /usr/bin/env node

require("dotenv").config();

const { Client } = require("pg");

const env = process.env;

const SQL = `
CREATE TABLE messages (
  id INTEGER PRIMARY KEY GENERATED ALWAYS AS IDENTITY,
  username VARCHAR(255),
  message TEXT,
  created_at TIMESTAMPTZ DEFAULT CURRENT_TIMESTAMP
);
`;

async function main() {
  console.log("seeding...");
  const client = new Client({
    connectionString: env.DATABASE_URL,
  });
  await client.connect();
  await client.query(SQL);
  await client.end();
  console.log("done");
}

main();
