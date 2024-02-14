const {AirportService} = require('../services/index')

const airportService = new AirportService();

const create = async(req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(201).json({
            data: airport,
            success: true,
            message: "successfully created a airport",
            err: {}
        });
    } catch (error) {
        console.log("failed to create a airport");
        return res.status(500).json({
            data:{},
            success: false,
            message: 'failed to create a airport',
            err: error
        });
    }
}

