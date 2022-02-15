import app from "./app";

function startServer() {
	app.listen(app.get('port'), () => {
		console.log(`app listening on port: ${app.get('port')}`)
	});
}

startServer();