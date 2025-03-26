const express = require('express');
const axios = require('axios'); 

const app = express();
const PORT = 3000;

app.use(express.json()); // Reemplazo de bodyParser.json()

app.get('/contactos', async (req, res) => {
    try {
        const response = await axios.get('http://www.raydelto.org/agenda.php');
        res.json(response.data);
    } catch (error) {
        res.status(500).json({ error: 'Error al obtener los contactos' });
    }
});

app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});
