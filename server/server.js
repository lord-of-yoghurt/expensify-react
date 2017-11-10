const express = require('express'),
      path = require('path'),
      app = express(),
      publicPath = path.join(__dirname, '..', 'public');

app.use(express.static(publicPath));

app.get('*', (req, res) => {
  res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(3000, () => {
  console.log('\n>>>>> http://localhost:3000');
});
