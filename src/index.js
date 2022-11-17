const app = require('./app');

app.listen(process.env.PORT || 3500, function () {
    console.log("Expres escuchando en el puerto", this.addres().PORT, app.settings.env);
})