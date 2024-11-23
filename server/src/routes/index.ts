import usersRoute from './users.route';
import linksRoute from './links.route';
import authRoute from './auth.route';
import customersRoute from './customers.route';

const routes = (app) => {
    app.use('/users', usersRoute);
    app.use('/links', linksRoute);
    app.use('/auth', authRoute);
    app.use('/customers', customersRoute);
};

export default routes;
