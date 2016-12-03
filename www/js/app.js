// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js
angular.module('starter', ['ionic', 'starter.controllers', 'starter.services'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
      if (cordova.platformId === "ios" && window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
    $stateProvider

    // setup an abstract state for the tabs directive
      .state('tab', {
          url: '/tab',
          abstract: true,
          templateUrl: 'templates/tabs.html'
      })

    // Each tab has its own nav history stack:

    .state('tab.acts', {
        url: '/acts',
        views: {
            'tab-acts': {
                templateUrl: 'templates/tab-acts.html',
                controller: 'ActsCtrl'
            }
        }
    })
    .state('tab.act-detail', {
        url: '/acts/:actId',
        views: {
            'tab-acts': {
                templateUrl: 'templates/act-detail.html',
                controller: 'ActDetailCtrl'
            }
        }
    })
          .state('tab.conf', {
              url: '/acts/:confId',
              views: {
                  'tab-confs': {
                      templateUrl: 'templates/conf.html',
                      controller: 'ConfCtrl'
                  }
              }
          })

    .state('tab.docs', {
        url: '/docs',
        views: {
            'tab-docs': {
                templateUrl: 'templates/tab-docs.html',
                controller: 'DocsCtrl'
            }
        }
    })
      .state('tab.doc-detail', {
          url: '/docs/:docId',
          views: {
              'tab-docs': {
                  templateUrl: 'templates/doc-detail.html',
                  controller: 'DocDetailCtrl'
              }
          }
      })

    .state('tab.standarts', {
        url: '/standarts',
        views: {
            'tab-standarts': {
                templateUrl: 'templates/tab-standarts.html',
                controller: 'StandartsCtrl'
            }
        }
    })
      .state('tab.standart-detail', {
          url: '/standarts/:standartId',
          views: {
              'tab-standarts': {
                  templateUrl: 'templates/standart-detail.html',
                  controller: 'StandartDetailCtrl'
              }
          }
      })
      .state('tab.gost-detail', {
          url: '/gosts/:gostId',
          views: {
              'tab-gosts': {
                  templateUrl: 'templates/gost-detail.html',
                  controller: 'GostDetailCtrl'
              }
          }
      })

  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/tab/acts');

});
