const express = require('express');
const grapqlHTTP = require('express-graphql');
const schema = require('./schema/schema');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();

//allow cross-origin requests
app.use(cors());

mongoose.connect('mongodb+srv://AdminJet:123123123@jet-cluster-1ngot.mongodb.net/graphql?retryWrites=true&w=majority')
mongoose.connection.once('open', () => {
    console.log('connected to database')
});

app.use('/graphql', grapqlHTTP({
    schema,
    graphiql: true
}));

app.listen(4000, () => {
    console.log('now listening for request on port 4000');
});