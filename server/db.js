const Pool = require("pg").Pool;

const pool = new Pool({
    user: "integrumadm",
    password: "Magnesium4-Suffering-Chemist",
    host: "212.83.142.108",
    port : 5432,
    database: "perntodo"
});

module.exports = pool;