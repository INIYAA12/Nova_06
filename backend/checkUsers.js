require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./src/models/User');

mongoose.connect(process.env.MONGO_URI)
    .then(async () => {
        const user = await User.findOne({ email: 'student@skillsync.com' }).select('+password');
        if (!user) {
            console.log('User not found!');
        } else {
            const match = await user.comparePassword('Student@123');
            console.log('Login match test for Student@123:', match);
        }
        process.exit(0);
    })
    .catch(err => {
        console.error(err);
        process.exit(1);
    });
