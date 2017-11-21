app.factory('beerFactory', function ($http) {

    var beerFactory = {};

    beerFactory.getBeers = function () {
        return $http.get('/beers')
            .then(function (response) {
                return angular.copy(response.data);

            });
    };

    beerFactory.getBeer = function (id) {
        return $http.get('/beers/' + id)
            .then(function (response) {
                return angular.copy(response.data);

            });
    };


    beerFactory.addBeer = function (newBeer) {
        return $http.post('/beers', newBeer)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };

    beerFactory.removeBeer = function (id) {
        return $http.delete('/beers/' + id)
            .then(function (response) {
                return angular.copy(response.data);
            });
    };

    beerFactory.addReview = function (newReview,id) {
        return $http.post('/beers/'+id+'/reviews', newReview)
            .then(function (response) {
                return angular.copy(response.data);
            });
    }


    return beerFactory

});

// image_url: "https://www.heineken.com/~/resources/Images/Assets/2-Navigation-tile-484x967-jpg.jpg?v=20160720_112116&jq=80&process=crop&w=260&h=610&la=en&hash=D7B3F0DF9D6ACF6614BE7F39DD057099C3ED2F4C",
// "https://s7d9.scene7.com/is/image/SAQ/10505854_is?$saq%2Dprod%2Dtra$"
//"http://www.adweek.com/files/imagecache/node-detail/2016_Feb/chang-beer-us-hed-2016_0.png"