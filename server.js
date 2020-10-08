// --------------------- Configuration
const express = require('express');
const app = express();

// DOTENV
require('dotenv').config();
const PORT = process.env.PORT || 4000;



//-------------------------MIDDLEWARE





// ---------------------------ROUTES


app.get('/', (req, res) => {
    res.send('Welcome to Bookmarks');
});


// ----------------------------Listener
app.listen(PORT, () => console.log(`Server started successfully on port ${PORT}`));


