const express = require('express');
const graphqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

app.use(cors());


// 连接到 mlab 数据库
// 替换自己的用户名和密码
mongoose.connect("mongodb://test:test123@ds261450.mlab.com:61450/graphql", { useNewUrlParser: true });
mongoose.connection.once('open', () => {
  console.log('connected to database');
})

app.use('/graphql', graphqlHTTP({
  schema,
  graphiql: true
}))

app.listen(5920, () => {
  console.log('now listening for requests on port 4000');
})