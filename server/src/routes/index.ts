import usersRoute from './users.route';
import linksRoute from './links.route';
import authRoute from './auth.route';
import customersRoute from './customers.route';
import pickupRoute from './pickup.route';
import levelsRoute from './levels.route';
import questionsRoute from './questions.route';

const routes = (app) => {
    app.use('/users', usersRoute);
    app.use('/links', linksRoute);
    app.use('/auth', authRoute);
    app.use('/customers', customersRoute);
    app.use('/pickup', pickupRoute);
    app.use('/levels', levelsRoute);
    app.use('/questions', questionsRoute);
};

export default routes;
