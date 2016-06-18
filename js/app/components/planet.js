'use strict';

define('components/planet', [], function () {

    function Planet (data, $el) {

        const EARTH_DAY = 365.3;
        var year = 0;

        this.model = data;

        this.$el = $el;

        this.tpl = {

            name : this.$el.find('[data-name]'),

            distance : this.$el.find('[data-distance-from-sun]'),

            timesAround : this.$el.find('[data-times-around-sun]')

        };

        this.gonePlanetYear = function (planet) {
            year += 1;
            var planetaryElapsedTime = ((year * EARTH_DAY) / planet.model.earthDate).toFixed(2);
            planet.tpl.timesAround.text(planetaryElapsedTime);
        };

        this.renderStatic();


    }

    Planet.prototype = {

        renderStatic : function () {

            var objectPlanet = this;
            this.tpl.name.text(this.model.name);
            this.tpl.distance.text(this.model.distance);
            setInterval(function () { objectPlanet.gonePlanetYear(objectPlanet) }, 300);

        }

    };

    return Planet;

});