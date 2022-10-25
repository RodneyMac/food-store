console.clear();
import * as dotenv from 'dotenv' 
import connectDB from './backend/config/db.js';
import httpServer from './backend/config/http.js';

dotenv.config();

const bootstrap = async () => {
    await connectDB(process.env.URI);

    httpServer.listen(process.env.PORT, () => {
        console.log(`Estoy flama en el puerto: ${process.env.PORT}`);
    });
};

bootstrap();