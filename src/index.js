const express = require('express');
const apiRoutes = require('./routes');
const app = express();

const { ServerConfig } = require('./config');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/api', apiRoutes);
app.use('/flightsService/api', apiRoutes);

app.listen(ServerConfig.PORT, () => {
  console.log(`listening on port:${ServerConfig.PORT}...`);
});
