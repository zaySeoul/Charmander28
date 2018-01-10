const express = require('express');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(`${__dirname}/../react-client/dist`));

app.listen(port, () => {
  console.log('listening on port 3000!');
});

