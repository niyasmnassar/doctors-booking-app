const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist/doctors-booking-app"));
app.listen(process.env.PORT || 8080);
app.get('/*', function(req, res){
    res.sendFile(path.join(__dirname + "/dist/doctors-booking-app/index.html"));
})
console.log('Console Listening!');


