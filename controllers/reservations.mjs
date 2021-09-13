// db is an argument to this function so

// that we can make db queries inside
export default function initReservationsController(db) {
  const index = (request, response) => {
    const drummerId = request.params.drummer_id;

    db.Reservation.findAll({
      where: {
        userId: drummerId,
      },
    })
      .then((items) => {
        // response.render('reservations', { items });
        response.send({ items });
      })
      .catch((error) => console.log(error));
  };
  // render ejs
  const createForm = (req, res) => {
    const drummerId = req.params.drummer_id;
    const obj = {};
    res.render('create-reservation', { drummerId });
  };
  const create = async (req, res) => {
    const drummerId = req.params.drummer_id;
    const { date } = req.body;

    const reservation = await QueryInterface.bulkInsert(
      'reservations',
      [{
        reservation_date: date,
        drummer_id: drummerId,
        created_at: new Date(),
        updated_at: new Date(),
      }],
      { returning: true },
    );

    res.redirect(`/reservations/${drummerId}`);
    //     const users = await queryInterface.bulkInsert(
    //   'users',
    //   userList,
    //   { returning: true },
    // );
  };
  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    createForm,
    create,
  };
}
