const {City} = require('../models/index');
const { Op } = require("sequelize");

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
    async bulkCreateCities(cityDataArray) {
        try {
            const cities = await City.bulkCreate(cityDataArray);
            return cities;
        } catch (error) {
            console.error('An error occurred while bulk creating cities:', error);
            throw error; // Re-throw the error to propagate it to the caller
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
            // the below approach also work but did not return updated object
            // if we are using postrage then returning: true can be used, else not
            const city = await City.update(data,{
                where:{
                    id:cityid
                }
            });
            // const city = await City.findByPk(cityId);
            // city.name = data.name;
            
            // await city.save();
            
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

    async getAllCities(filter) {
        try {
            if (filter && filter.name) { // Check if filter and filter.name are defined
                const cities = await City.findAll({
                    where: {
                        name: {
                            [Op.startsWith]: filter.name
                        }
                    }
                });
                return cities;
            }
            const cities = await City.findAll();
            return cities;
        } catch (error) {
            console.error("Something went wrong in repository layer");
            throw { error };
        }
    }
}    
module.exports = CityRepository;