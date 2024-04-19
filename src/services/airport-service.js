const {AirportRepository} = require('../repository/index');


class AirportService{
    constructor(){
        this.airportRepository = new AirportRepository();
    }
    async createAirport(data){
        try {
            const airport = await this.airportRepository.createAirport(data);
            return airport;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async deleteAirport(airportId){
        try {
            const airport = await this.airportRepository.deleteAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async updateAirport(airportId){
        try {
            const airport = await this.airportRepository.updateAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getAirport(airportId){
        try {
            const airport = await this.airportRepository.getAirport(airportId);
            return airport;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
    async getALLAirports(data){
        try {
            const airports = await this.airportRepository.getAllAirports(data);
            return airports;
        } catch (error) {
            console.log("something went wrong at service layer");
            throw {error};
        }
    }
}

module.exports = AirportService;