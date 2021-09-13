import db from './models/index.mjs';

db.Item.create({
  name: process.argv[2],
})
  .then((item) => {
    console.log('success!');
    console.log(item);
  })
  .catch((error) => console.log(error));
