const mongoose = require('mongoose');

// Connecting to the local database
mongoose.connect('mongodb://localhost:27017/tde-drm');

// Creating a schema of car
const Car = mongoose.model('Car', {
    name: String,
    model: String,
    year: Number
});

// Creating a new car
const car = new Car({
    name: 'BMW',
    model: 'X5',
    year: 2019
});

// Saving the car to the database
car.save().then(() => {
    console.log('Car saved!');
}).catch((error) => {
    console.log(error);
});
