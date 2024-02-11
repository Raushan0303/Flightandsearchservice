const {CityService} = require('../services/index');

const cityService = new CityService();

const create = async(req,res)=>{
    try{
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data:city,
            success: true,
            message: 'successfully created a city',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'failed to create the city',
            err: error
        });

    }
}

//DELETE. -> /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully deleted a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to delete the city',
            err: error
        });
    }
}

//GET -> /city/:id
const get = async(req,res)=>{
    try{
        const response = await cityService.getCity(req.param.id);
        return res.status(201).json({
            data:response,
            success: true,
            message: 'successfully fetched a city',
            err: {}
        });
    }catch(error){
        console.log(error);
        return res.status(500).json({
            data:{},
            success:false,
            message:'failed to delete the city',
            err: error
        });
    }
}

const update = async (req, res) => {
    try {
        const response = await cityService.getCity(req.params.id,req.body);
        return res.status(200).json({
            data: response,
            success: true,
            message: 'Successfully fetched a city',
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: 'Not able to update the city',
            err: error
        });
    }}
const getAll = async (req, res) => {
    
        try {
            const cities = await cityService.getAllCities(req.query);
            return res.status(200).json({
                data: cities,
                success: true,
                message: 'Successfully fetched all cities',
                err: {}
            });
        } catch (error) {
            console.log(error);
            return res.status(500).json({
                data: {},
                success: false,
                message: 'Not able to fetch the cities',
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

