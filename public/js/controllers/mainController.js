app.controller('mainController', function ($scope, beerFactory) {

    $scope.beers = [];

    $scope.addBeer = function () {
        var newBeer = {
            name: $scope.name,
            style: $scope.style,
            abv: $scope.abv,
            image_url: $scope.image
        }
        beerFactory.addBeer(newBeer)
        .then(function(newBeer){
            $scope.beers.push(newBeer)
        })
            .catch(function (error) {
                console.log(error)
        });
    };

    $scope.removeBeer = function (index) {
        var id =  $scope.beers[index]._id;
        beerFactory.removeBeer(id)
        .then(function(beer){
            $scope.beers.splice(index,1)
        });
    };


    beerFactory.getBeers()
    .then(function (beers) {
        $scope.beers = beers
    })
        .catch(function (error) {
            console.log(error)
        });
});


