var app = angular.module('plunker', ['ui.bootstrap', 'ui.bootstrap.tpls', 'ui.router'])
.run(['$rootScope', '$state', '$stateParams',
      function ($rootScope, $state, $stateParams) {
      // It's very handy to add references to $state and $stateParams to the $rootScope
      // so that you can access them from any scope within your applications.For example,
      // <li ng-class="{ active: $state.includes('contacts.list') }"> will set the <li>
      // to active whenever 'contacts.list' or one of its decendents is active.
        $rootScope.$state = $state;
        $rootScope.$stateParams = $stateParams;
      }]);
app.config(function($stateProvider,$locationProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise("/");
  $locationProvider.html5Mode(false).hashPrefix('!');
  $stateProvider
    .state('left', {
      url: "/",
      views: {
        "viewA": {
          template: '<h1>Left Tab, index.viewA</h1><br><div class="well col-xs-2">' +
                    '<a ui-sref=".link1">Link1</a><br>' +
                    '<a ui-sref=".link2">Link2</a></div>' +
                    '<div class="col-xs-6">' +
                    '<div ui-view="viewA.link1"></div>' +
                    '<div ui-view="viewA.link2"></div></div>'
        },
        "viewC": {
          template: 'Left Tab, viewC <div ui-view="viewC.link1"></div>' +
                    '<div ui-view="viewC.link2"></div>'
        }
      }
    })
    .state('left.link1', {
      url: 'link1',
      onExit: function() {
        console.log('I will explode your router');
      },
      views: {
        "viewA.link1": {
          template: '<h2>viewA Nest Link1</h2><ul>' +
                    '<li ng-repeat="thing in link1things">{{thing}}</li></ul>',
          controller: 'Tab1Link1Ctrl',
          data: {}
        },
        "viewC.link1": {
          template: 'Link1'
        }
      }
    })
    .state('left.link2', {
      url: 'link2',
      views: {
        "viewA.link2": {
          template: '<h2>viewA Nest Link2</h2><ul>' +
                    '<li ng-repeat="thing in link2things">{{thing}}</li></ul>',
          controller: 'Tab1Link2Ctrl',
          data: {}
        },
        "viewC.link2": {
          template: 'Link2'
        }
      }
    })
    .state('right', {
      url: "/right",
      onEnter: ['$state', function($state) {
        console.log('goodbye, router');
      }],
      views: {
        "viewA": {
          template: '<h1>Right Tab, viewA</h1>',
          controller: '2ndTabCtrl',
          data: {}
        },
        "viewC": {
          template: 'Right Tab, viewC <div ui-view="viewC.list"></div>'
        }
      }
    });
});

app.controller('Tabs', ['$scope', '$stateParams', '$state',
  function($scope, $stateParams, $state) {}
]);

app.controller('2ndTabCtrl', ['$scope', '$stateParams', '$state',
  function($scope, $stateParams, $state) {}
]);

app.controller('Tab1Link1Ctrl', ['$scope', '$stateParams', '$state',
  function($scope, $stateParams, $state) {
    $scope.link1things = ["A", "Set", "Of", "Things", "link1", "viewA"];
  }
]);

app.controller('Tab1Link2Ctrl', ['$scope', '$stateParams', '$state',
  function($scope, $stateParams, $state) {
    $scope.link2things = ["A", "Set", "Of", "Things", "link2", "viewA"];
  }
]);