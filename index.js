import express from 'express';
import routes from './src/routes/taskRoutes'
import mongoose from 'mongoose'
import bodyParser from 'body-parser';


// -- Using babel and stage 0 for json 
// -- Use expres to start server on port 4000
const app = express();
const PORT = 4000;


// -- mongoose js connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost/tasksdb',{
    useNewUrlParser : true,
    useUnifiedTopology :true
});


// -- bodyparser set up
app.use(bodyParser.urlencoded({ extended:true }));
app.use(bodyParser.json());



routes(app); // Settin the routes to app

// -- Serving static files
app.use(express.static('public'));


app.get('/',(req,res) =>
    res.send(`Node and express server running on port ${PORT}`)
);

app.listen(PORT,() => 
    console.log(`Your server is running on port ${PORT}`)
);

