angular.module( "app", [ "workout" ] ).config( function ( $sceDelegateProvider ) {
    $sceDelegateProvider.resourceUrlWhitelist( [
        'self',
        'http://*.youtube.com/**'
    ] )
} )

angular.module( "workout", [] )
