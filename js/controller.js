'use strict;'

var BunkinProfile = angular.module('BunkinProfile', []);
var BunkinSearchResults = angular.module('BunkinSearchResults', []);

BunkinProfile.controller('bunkCardList', function($scope){
	$scope.users = [

        {"name":"Robert Downey Jr." , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"LOL!!",
        "mapImage":"http://www.dumpaday.com/wp-content/uploads/2013/02/funny-pictures-robert-downey-jr1.jpg"
		},

		{"name":"Robert Downey Jr." , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"Wow",	
        "mapImage":"http://cdn1.sciencefiction.com/wp-content/uploads/2014/07/guardians_poster_via_marvel.jpg"	
		},

		{"name":"Robert Downey Jr." , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"Avengers Assemble!",		
        "mapImage":"http://images6.fanpop.com/image/photos/37300000/Avengers-2-Age-of-Ultron-the-avengers-37328228-900-1185.jpg"
		},

		{"name":"Robert Downey Jr." , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"Hulk at his best",		
        "mapImage":"http://static.comicvine.com/uploads/original/12/120919/3209312-9660445429-hulk_.jpg"
		},

		{"name":"Robert Downey Jr." , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"Had a great time! :)",
 		"mapImage":"http://i.ytimg.com/vi/EYiZeszLosE/maxresdefault.jpg"
		},

		{"name":"Harsha" , 
        "profilePic":"http://www.scifinow.co.uk/wp-content/uploads/2013/05/Iron-Man-4.jpg", 
        "status":"Packaging :(",
 		"mapImage":"http://i.ytimg.com/vi/EYiZeszLosE/maxresdefault.jpg"
		},

		{"name":"Naresh" , 
        "profilePic":"https://scontent-a-sin.xx.fbcdn.net/hphotos-xfa1/t1.0-9/10402570_703501233042597_8324242862378920325_n.jpg", 
        "status":"Wow Nature!",
 		"mapImage":"http://webneel.com/wallpaper/sites/default/files/images/04-2013/clean-sky-wallpaper.jpg"
		}
    ];
});

BunkinSearchResults.controller('searchRsltCtrl', function($http,$scope){
    
    $scope.loading = false;

    $scope.hitEnter = function(keyEvent) {
    if (keyEvent.which === 13){
        $scope.results = '';
        var url = 'https://api.foursquare.com/v2/venues/search?client_id=H42U1L011OO5XBB4ROHSOBMCOBBPAOUYR55QBFANBGHCBR3P&client_secret=RQGJR3OGLWR0QNTOBU3RLM5TW0JCPWIGKNLS2RHL1XPUVRVV&v=20130815&ll=17.445824,78.377395&query='+$scope.searchQuery;
        $scope.loading = true;
        $http.get(url)
        .success(function(data){
            $scope.results = data;
              $scope.fp = function(){
                return 68;
                }
            $scope.loading = false;
            console.log($scope.results.venues);
        });

    }

    $scope.fp = '';

    $scope.getID = function (id){
        alert(id);
        console.log(id);
    };
}



});


var BunkinSearch = angular.module('BunkinSearch', []);
BunkinSearch.controller('searchCtrl', function ($scope) {

});

angular.module('BunkinSearchResults').filter('humanize', function(){
    return function(text) {
        if(text) { 
            text = text.split(" ");

            // go through each word in the text and capitalize the first letter
            for (var i in text) {
                var word = text[i];
                word = word.toLowerCase();
                word = word.charAt(0).toUpperCase() + word.slice(1);
                text[i] = word;
            }

            return text.join(" "); 
        }
    };
});
