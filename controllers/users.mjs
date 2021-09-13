// db is an argument to this function so
// that we can make db queries inside
export default function initUsersController(db) {
  const index = (request, response) => {
    db.User.findAll()
      .then((items) => {
        // response.render('/', { items });
        response.send(items);
      })
      .catch((error) => console.log(error));
  };
  const show = (req, res) => {
    const { id } = req.params;
    db.User.findOne({
      where: {
        id,
      },
    })
      .then((items) => {
        console.log('items in show', items);
        res.send(items);
        // res.render(`/drummer/${id}`, { items });
      }).catch((e) => console.log('fail to get drummer', e));
  };
  // return all methods we define in an object
  // refer to the routes file above to see this used
  return {
    index,
    show,
  };
}
