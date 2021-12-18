const db = require("./index.js");

module.exports.getBikeTypes = async function () {
  try {
    const bike_Types = await db.query("SELECT id, name FROM bike_type");
    return bike_Types.rows;
  } catch (e) {
    throw e;
  }
};
