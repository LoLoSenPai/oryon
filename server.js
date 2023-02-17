const mongoose = require('mongoose');
const cors = require('cors');
// const helmet = require('helmet');
// const morgan = require('morgan');
const express = require('express');
const path = require('path');
require('dotenv').config();


// Configurations --------------------------------

const app = express();
app.use(express.json());
app.use(express.static('client/build'));
// app.use(helmet());
// app.use(helmet.crossOriginResourcePolicy({ policy: 'cross-origin' }));
// app.use(morgan('common'));
// app.use(bodyParser.json({ limit: "30mb", extended: true }));
// app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());


// Mongoose setup --------------------------------

const PORT = process.env.PORT || 7000

mongoose.set('strictQuery', false);
mongoose.connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
}).then(() => {
    app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
}).catch((error) => console.log(`${error} did not connect`));



// app.get('/api/youtube', (_, res) => {
//     res.send({
//         msg: 'Hello tout le monde'
//     })
// })

app.get('/*', (_, res) => {
    res.sendFile(path.join(__dirname, './client/build/index.html'));
})
