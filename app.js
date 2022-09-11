const { express } = require("./modules/module");
const { sequelize } = require("./models/index");
const app = express();

app.listen(80, () => {
    console.log(`http://localhost on`);
});

sequelize
    .sync({ force: true })
    .then(() => {
        console.log("db connected");
    })
    .catch((error) => {
        console.log(error);
    });
