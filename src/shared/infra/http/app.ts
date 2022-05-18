import 'reflect-metadata';
import cors from 'cors';
import express from 'express';

import '@shared/container';
import { routes } from '@shared/infra/http/routes';

const app = express();

app.use(cors());
app.use(express.json());

app.use(routes);

export { app };
