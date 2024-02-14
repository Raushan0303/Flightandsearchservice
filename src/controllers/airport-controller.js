const {AirportService} = require('../services/index')

const airportService = new AirportService();

const create = async(req,res)=>{
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(200).json({
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

const destroy = async(req,res)=>{
    try {
        const response = await airportService.deleteAirport(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: "failed to delete the airport",
            err: {}
        })
    } catch (error) {
        return res.status(500).json({
            data: {},
            success: false,
            message: "Not able to delete a city",
            err: error
        })
    }
}
//GET -> /city/:id
const get = async(req,res)=>{
    try{
        const response = await airportService.getAirport(req.param.id);
        return res.status(201).json({
            data:response,
            success: true,
            message: 'successfully fetched a airport',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'failed to delete the airport',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await airportService.getAirport(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully update a airport',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the airport',
            err: error
        });
    }}
const getAll = async (req, res) => {
    
        try {
            const cities = await airportService.getALLAirports(req.query);
            return res.status(200).json({
                data: cities,
                success: true,
                message: 'Successfully fetched all airports',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to fetch the airports',
                err: error
            });
        }
    }
    


module.exports={
    create,
    destroy,
    get,
    update,
    getAll
};

