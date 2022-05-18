import { config } from 'dotenv-flow';

import api from '../../../../src/config/api';
import { app } from '@shared/infra/http/app';

config({ silent: true });

const apiConfig = api();

app.listen(apiConfig.PORT, async () => {
  console.log(`SERVER STARTED ON PORT: ${apiConfig.PORT}`);
});
