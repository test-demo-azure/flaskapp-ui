const express = require('express');
const path = require('path');

const app = express();

app.use((req, res, next) => {
  res.setHeader('Host', 'flaskapp-ui-new-test.apps.ocp4.ocp1.local');
  next();
});

app.use(express.static(path.join(__dirname, 'build')));

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});