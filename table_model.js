const Pool = require("pg").Pool;
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "test_db",
  password: "you_password",
  port: 5432,
});

const getData = () => {
  // делаем запрос на все элементы из таблицы test
  return new Promise(function (resolve, reject) {
    pool.query("SELECT * FROM test", (error, results) => {
      if (error) {
        reject(error);
      }
      resolve(results.rows);
    });
  });
};

module.exports = {
  getData,
};
