import mogoose from "mongoose";

import config from "../config/database.js";

class Database{
    constructor(){
        this.connection = mogoose.connect(
            config.url,
            {
                useNewUrlParser: true,
                useUnifiedTopology: true,
            }
        );
    }
}

export default new Database();