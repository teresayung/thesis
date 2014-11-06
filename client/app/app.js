'use strict';
// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.services' is found in services.js
// 'starter.controllers' is found in controllers.js

//TODO List all the factory and controllers
angular.module('App', [
  'ionic', 
  'config', 
  // 'Appeteyes.controllers', 
  // 'Appeteyes.services'
  ])

.run(function($ionicPlatform,$rootScope, $state, Auth) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if(window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if(window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }


  });

  //TODO! Change the state for unauthenticated users
  $rootScope.$on("$stateChangeSuccess", function(event, toState, toParams, fromState, fromParams){
      if (toState.authenticate && !Auth.isAuth()){
        // User isn’t authenticated
        $state.transitionTo('tab.account');
        event.preventDefault(); 
      }
    });
})

.config(function($stateProvider, $urlRouterProvider) {


  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in their respective Controller file in their view directory
  $stateProvider

    //TODO Do we need this block?

    // setup an abstract state for the tabs directive
    // .state('tab', {
    //   url: '/tab',
    //   abstract: true,
    //   templateUrl: 'templates/tabs.html',
    // })

    // Each tab has its own nav history stack:
    .state('home.app', {
      url: '/',
      views: {
        'view-home': {
          templateUrl: 'views/homeTemplate.html',
          controller: 'HomeController'
        }
      },
      authenticate:true
    })

    .state('loading.app', {
      url: '/loading',
      views: {
        'view-loading': {
          templateUrl: 'views/loadingTemplate.html',
          controller: 'LoadingController'
        }
      },
      authenticate:true
    })

    .state('login.app', {
      url: '/login',
      views: {
        'view-login': {
          templateUrl: 'views/loginTemplate.html',
          controller: 'LoginController'
        }
      },
      authenticate:true
    })

    .state('pending.app', {
      url: '/pending',
      views: {
        'view-pending': {
          templateUrl: 'views/pendingTemplate.html',
          controller: 'PendingController'
        }
      },
      authenticate:true
    })

    .state('receivers.app', {
      url: '/receivers',
      views: {
        'view-receivers': {
          templateUrl: 'views/receiversTemplate.html',
          controller: 'ReceiversController'
        }
      },
      authenticate:true
    })
    
    .state('results.app', {
      url: '/results',
      views: {
        'view-results': {
          templateUrl: 'views/resultsTemplate.html',
          controller: 'ResultsController'
        }
      },
      authenticate:true
    })

    .state('settings.app', {
      url: '/settings',
      views: {
        'view-settings': {
          templateUrl: 'views/settingsTemplate.html',
          controller: 'SettingsController'
        }
      },
      authenticate:true
    })

    .state('signup.app', {
      url: '/signup',
      views: {
        'view-signup': {
          templateUrl: 'views/signupTemplate.html',
          controller: 'SignupController'
        }
      },
      authenticate:true
    })


  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/');
});


