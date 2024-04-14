import api from './index.js';

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api/v1', api);

export default app;