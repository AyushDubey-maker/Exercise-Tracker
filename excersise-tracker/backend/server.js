const express=require('express')
const cors=require('cors');
const mongoose = require('mongoose');

require('dotenv').config();

const app=express();
const port=process.env.PORT||80;

mongoose.connect('mongodb://localhost/tracker', {
  useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true
})
const connection = mongoose.connection;
connection.once('open', () => {
  console.log("MongoDB database connection established successfully");
})


app.use(cors())
app.use(express.json());

const excerciseRouter=require('./routes/excercise')
const userRouter=require('./routes/user')

app.use('/exercises',excerciseRouter);
app.use('/users',userRouter);
app.listen(port,()=>{
    console.log(`Server Started On Port: ${port}` )
});