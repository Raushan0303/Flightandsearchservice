const {Airport} = require('../models/airport');
const { Op } = require("sequelize");

class AirportRepository{
    async createAirport(
        {
            name,
            adress,
            cityId
        }){
            try {
                const airport = await Airport.create({
                    name,
                    adress,
                    cityId
                });
                return airport;
            } catch (error) {
                console.log("An error occured: at repository layer",error);
            }

        }
        async deleteAirport(airportId){
                try {
                    const airport = await Airport.destroy({
                       airportId
                    });
                    return airport;
                } catch (error) {
                    console.log("An error occured: at repository layer",error);
                }
    
            }
        async updateAirport(data,airportId){
            try {
                const airport = await Airport.create(data,{
                    where:{
                        id: airportId
                    }
            });
                return airport;
            } catch (error) {
                console.log("An error occured: at repository layer",error);
            }

        }
        async getAirport(airportId){
            try {
                const airport = await Airport.findByPk(airportId);
                return airport;
            } catch (error) {
                console.log("An error occured: at repository layer",error);
            }
    }
    async getAllAirports(){
        try {
            const airports = await Airport.findAll();
            return airports;
        } catch (error) {
            console.log("An error occured: at repository layer",error);
        }
}
      
}

module.exports= AirportRepository;