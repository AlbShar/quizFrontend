import MyRoutes from './router/router';
import { withProviders } from './providers';

const app2 = withProviders(MyRoutes);

export default app2;