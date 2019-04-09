// EXPREES DAN SOCKET IO
const express = require('express'); // import package express
const app = express(); 
const server = require('http').createServer(app);
const path = require('path'); // import package path (sudah default ada)

app.use(express.static(path.join(__dirname,'static'))); // untuk nempation file web kita di folder static
app.get('/', (req, res) => {
	res.sendFile(path.resolve(__dirname, 'static/index.html'));
})

const portListen = process.env.PORT || 8080;
server.listen(portListen, () => {
	console.log("Listening on port ", portListen);
});
