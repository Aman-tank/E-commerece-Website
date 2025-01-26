const mongoose = require("mongoose");

const {Schema, model}= mongoose;

const querySchema = new Schema({
    Email : String,
    Query : String,
    Status : {type: String, default: "Unread"}
});

const QueryTable = model("query",querySchema);

module.exports = QueryTable;