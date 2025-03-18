const express = require('express');
const app = express();

app.get('/', (req, res) => {
    const response = {
      message: "My name is Austin",
      timestamp: Date.now()
    };
    res.json(response);
});

app.listen(PORT = 80, () => {
    console.log(`Server is running on port ${PORT}`);
});