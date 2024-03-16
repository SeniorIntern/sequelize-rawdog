const express = require('express');
const apiRoutes = require('./routes');
const app = express();

const { ServerConfig } = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);

app.listen(ServerConfig.PORT, async () => {
  console.log(`listening on port:${ServerConfig.PORT}...`);

  const { City } = require('./models');

  /*
  const varanasi = await City.findByPk(2);
  const varanasiAirpot = await varanasi.createAirpot({
    name: 'Varansi Airpot',
    code: 'VA'
  });
  console.log(varanasiAirpot);
  */

  await City.destroy({
    where: {
      id: 2
    }
  })
});
