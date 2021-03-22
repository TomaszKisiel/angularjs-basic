angular.module('app').filter("secondsToTime", () => {
    return function (input) {
        const time = parseInt(input, 10);

        if (isNaN(time)) return "00:00:00";

        const hours = Math.floor(time / 3600);
        const minutes = Math.floor((time - (hours * 3600)) / 60);
        const seconds = time - (hours * 3600) - (minutes * 60);

        let patch = ""

        if ( hours ) patch += ("0" + hours).substr(-2) + ":"

        return patch
            + ("0" + minutes).substr(-2) + ":"
            + ("0" + seconds).substr(-2);
    }
});
