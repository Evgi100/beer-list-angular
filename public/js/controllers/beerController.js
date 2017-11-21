app.controller('beerController', function ($scope, $stateParams, beerFactory) {
    
    if ($stateParams.beerParam) {
        $scope.beer = $stateParams.beerParam
        $scope.reviews = $scope.beer.reviews
    } else {
        beerFactory.getBeer($stateParams.id)
            .then(function (beer) {
                $scope.beer = beer
                $scope.reviews = $scope.beer.reviews
            })
            .catch(function (error) {
                console.log(error)
            });
    }

    $scope.addReview = function () {
        var newReview = {
            name: $scope.user,
            text: $scope.review
        }
        var id = $stateParams.id
        beerFactory.addReview(newReview, id)
            .then(function (review) {

                console.log(review)
                $scope.reviews.push(review) //pushing the whole beer
            });

    }
});

