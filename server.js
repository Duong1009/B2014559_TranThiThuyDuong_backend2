const app = require("./app");
const config = require("./app/config");
const MongoDB = require("./app/utils/mongodb.util");
const {log} = require("console");
async function startServer() {
    try {
        await MongoDB.connect(config.db.uri);
        log("Connected to the database!");
        const PORT = config.app.port;
        app.listen(PORT, () => {
            log(`Server is running on port ${PORT}`);
        });
    } catch (error) {
        log("Cannot connect to the database!", error);
        process.exit();
    }
}
//const port = config.app.port;
//log(config.db.uri);

startServer();