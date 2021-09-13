import db from './models/index.mjs';

db.User.create({
  name: process.argv[2],
  price: process.argv[3],
})
  .then((item) => {
    console.log('success!');
    console.log(item);
  })
  .catch((error) => console.log(error));
