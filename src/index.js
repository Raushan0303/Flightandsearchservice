const express = require("express");
const bodyParser = require("body-parser");

const {PORT} = require('./config/serverConfig');
const ApiRoutes = require('./routes/index');

const db = require('./models/index')

// const {Airport, City} = require('./models/index');
// const CityRepository = require('./repository/city-repository')


const setupAndStartServer = () =>{

    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}))

    app.use('/api',ApiRoutes);

    app.listen(PORT, async()=>{
        console.log(`server started at ${PORT}`);
        if(process.env.SYNC_DB){
            db.sequelize.sync({alter: true});
        }
    //     // const repo = new CityRepository();
    //     // repo.createCity({name: "New Delhi"});
    //    const city = await City.findOne({
    //     where: {
    //         id : 14
    //     }
    //    });
    //    console.log(city);
    //    const airports = await city.getAirports();
    //    const newAirports = await Airport.findOne({
    //    where :{
    //     id: 5
    //    }
    //    });
    //    await city.addAirport(newAirports);
    // //    await city.addAirport({
    // //      name: 'jindal vijayanagar airport',
    // //    })
       
    //    console.log(city, airports);
        
    });
}


setupAndStartServer();