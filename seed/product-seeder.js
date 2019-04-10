var Product = require('../models/product');

var mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/shopping', {useNewUrlParser: true } );

var products = [
    new Product({
        imagePath: 'https://gpstatic.com/acache/36/46/1/uk/packshot-ca1a69ddcf47d3cd5d06383626e06d3b.jpg',
        title: 'Dark Souls Remastered',
        description: 'Awesome Game',
        price: 39.99
    }),
    new Product({
        imagePath: 'https://pisces.bbystatic.com/image2/BestBuy_US/images/products/6202/6202311_sd.jpg',
        title: 'World of Warcraft:Battle For Azeroth',
        description: 'I missed old days of vanilla...',
        price: 13.99
    }),
    new Product({
        imagePath: 'https://media.ign.com/games/image/object/002/002778/DRAGNORCpcPFTfront.jpg',
        title: 'Dragon Age:Origins',
        description: 'My first rpg experience. Old days man.',
        price: 5
    })
];

var done = 0;

for (var i = 0; i < products.length; i++) {
    products[i].save(function (err, result) {
        if (done == products.length) {
            exit();
        }
    });
}

function exit() {
    mongoose.disconnect();
}