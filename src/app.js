import api from './api.index.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', api);