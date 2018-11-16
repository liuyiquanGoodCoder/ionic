angular.module('app.controllers', [])
  
.controller('menuCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('homeCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var events=[{
		title: "Keynote Speech",
          avatar: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/9f/Saltine-Crackers.JPG/1200px-Saltine-Crackers.JPG",
          image: "http://sosc.hkbu.edu.hk/sites/default/files/news/"
          +"AESC-keynote.jpg"
	},{
		title: "Science Faculty Admission Talk",
          avatar: "http://a5.mzstatic.com/eu/r30/Purple/v4/a2/5d/c3/"
          +"a25dc3d6-78f3-5b54-92a0-b1e3ccfd9227/icon175x175.png",
          image: "http://www.sci.hkbu.edu.hk/attachment/news/2012-11/"
          +"2012-11-01/news.jpg"
	}];
	$scope.events = events;

}])
   
.controller('mapCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	var LatLng = new google.maps.LatLng(22.341072, 114.179645);

	var mapOptions = {
		center:LatLng,
		zoom:17,
		mapTypeId:google.maps.MapTypeId.ROADMAP
	};
	$scope.map = new google.maps.Map(document.getElementById('map'),mapOptions);

	//annotation (marker)
	google.maps.event.addListenerOnce($scope.map,'idle',function() {
		latLng = new google.maps.LatLng(22.341072, 114.179645);
		var marker = new google.maps.Marker({
			map:$scope.map,
			animation:google.maps.Animation.DROP,
			position:latLng
		});
		//infowindow
		var infoWindow = new google.maps.InfoWindow({
			content:'AC Hall'
		});

		google.maps.event.addListener(marker,'click',function() {
			infoWindow.open($scope.map,marker);
		});
	});
}])
      
.controller('aboutUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('contactUsCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {


}])
   
.controller('eventDetailCtrl', ['$scope', '$stateParams', // The following is the constructor function for this page's controller. See https://docs.angularjs.org/guide/controller
// You can include any angular dependencies as parameters for this function
// TIP: Access Route Parameters for your page via $stateParams.parameterName
function ($scope, $stateParams) {
	$scope.title = $stateParams.title;
	$scope.image = $stateParams.image;
}])
 