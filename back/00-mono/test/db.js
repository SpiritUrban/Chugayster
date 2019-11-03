console.log('TEST!!!! ');

const User = require(`../models/user.js`);

User.find({},
    `
        first_name
        username
    `
).then((d) => {

    console.log(d)
})