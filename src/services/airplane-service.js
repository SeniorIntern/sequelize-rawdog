const { AirplaneRepository } = require('../repositories');

const airplaneRespository = new AirplaneRepository();

async function createAirplane(data) {
  try {
    const airplane = await airplaneRespository.create(data);
    return airplane;
  } catch (error) {
    throw error;
  }
}

module.exports = {
  createAirplane
};
