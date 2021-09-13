import db from './models/index.mjs';

// import your controllers here
// import user controller
import initReservationsController from './controllers/reservations.mjs';
import initUsersController from './controllers/users.mjs';
// import reservation controller
export default function bindRoutes(app) {
  // initialize the controller functions here
  // make const to hold functions
  const reservationController = initReservationsController(db);
  const userController = initUsersController(db);
  // pass in the db for all callbacks
  console.log('in routesmjs');
  // define your route matchers here using app
  app.get('/drummer/:id', userController.show);
  app.post('/reservation/:drummer_id/create', reservationController.create);
  app.get('/reservations/:drummer_id/create', reservationController.createForm);
  app.get('/reservations/:drummer_id', reservationController.index);
  app.get('/', userController.index);
}
