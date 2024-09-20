import { createConnection } from "mysql";
import * as process from "process";

const hostsql = process.env.HOST_SQL;
const portsql = Number(process.env.PORT_SQL);
const usersql = process.env.USER_SQL;
const databasesql = process.env.DataBase_SQL;
const paswworldsql = process.env.Passworld_SQL;

export default async function SendSQL(sql: string) {
  const connection = createConnection({
    host: hostsql,
    port: portsql,
    user: usersql,
    database: databasesql,
    password: paswworldsql,
  });

  const response = await new Promise((resolve) => {
    connection.query(sql, (_, result) => {
      resolve(result);
    });
  });

  connection.end();

  return response;
}
