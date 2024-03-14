const { AirplaneRepository } = require('../repositories');
const { StatusCodes } = require('http-status-codes');

const airplaneRespository = new AirplaneRepository();
const AppError = require('../utils/errors/app-error');

async function createAirplane(data) {
  try {
    const airplane = await airplaneRespository.create(data);
    return airplane;
  } catch (error) {
    if (error.name === 'SequelizeValidationError') {
      let explanation = [];
      error.errors.forEach((err) => {
        explanation.push(err.message);
      });
      console.log(explanation);
      throw new AppError(
        explanation,
        StatusCodes.INTERNAL_SERVER_ERROR
      );
    }

    throw new AppError(
      'Cannot create a new Airplane object',
      StatusCodes.INTERNAL_SERVER_ERROR
    );
  }
}

module.exports = {
  createAirplane
};
