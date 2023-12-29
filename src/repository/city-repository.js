const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){
        try{
            const city = await City.create({name});
            return city;
        }catch(error){
            console.error('An error occurred:', error); 
        }
    }
    async deleteCity(cityid){
        try{
          await City.destroy({
            where:{
                id: cityid
            }
          })
        }catch(error){
           throw {error};
        }
    }
}
module.exports = CityRepository;