const {City} = require('../models/index');

class CityRepository {
    async createCity({name}){ // {name: "New Delhi"}
        try{
            const city = await City.create({
                name
             });
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
          });
          return true;
        }catch(error){
           throw {error};
        }
    }

    async updateCity (cityid,data) {
        try{
            const city = await City.update(data,{
                where:{
                    id:cityid
                }
            });
            return city;
        }catch(error){
            console.error("Something went wrong in repository layer");
            throw {error};
    }
    }
    async getCity (cityid) {
        try{
            const city = await City.findByPk(cityid);
            return city;
        }catch(error){
            console.error("Something went wrong in repository layer");
            throw {error};
        }
    }
}
module.exports = CityRepository;