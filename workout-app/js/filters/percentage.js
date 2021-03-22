angular.module('app').filter("percentage", () => {
    return function (input, total = 1) {
        const percentage = Math.floor( 100 * ( input * 100 ) / total ) / 100
        return percentage + "%"
    }
});
