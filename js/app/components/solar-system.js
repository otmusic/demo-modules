define('components/solar-system', [
    'jquery',
    'components/planet'
], function (

    $,
    Planet

) {

    function SolarSystem () {
        this.$el = $('main');

        this.model = {
            planets : [
                {
                    name : 'Mercury',
                    distance : 58,
                    earthDate: 87.97
                    // year : 87.97 / 365.3
                },
                {
                    name : 'Venus',
                    distance : 108.2,
                    earthDate: 224.7
                    // year : 224.7 / 365.3
                },
                {
                    name : 'Earth',
                    distance : 149.6,
                    earthDate: 365.3
                    // year : 365.3 / 365.3
                },
                {
                    name : 'Mars',
                    distance : 227.9,
                    earthDate: 686.76
                    // year : 686.76 / 365.3
                },
                {
                    name : 'Jupiter',
                    distance : 778,
                    earthDate: 4332.45,
                    year : 4332.45 / 11.9
                },
                {
                    name : 'Saturn',
                    distance : 1427,
                    earthDate: 10761.73
                    // year : 10761.73 / 29.46
                },
                {
                    name : 'Uranus',
                    distance : 2871,
                    earthDate: 30692.5
                    // year : 30692.5 / 84
                },
                {
                    name : 'Neptune',
                    distance : 4497,
                    earthDate: 60194.13
                    // year : 60194.13 / 164.8
                }
            ]
        };

        this.init();

    }

    SolarSystem.prototype = {

        init : function () {

            this.$el = $('[data-planets]');

            this.planetTpl = this.$el.find('li').get(0).outerHTML;

            this.$el.empty();

            this.createPlanets();

            this.render();
        },

        createPlanets : function () {

            this.planetsInstances = [];

            this.model.planets.forEach(function (planetData) {

                var newPlanet = new Planet(planetData, $(this.planetTpl));

                this.planetsInstances.push(newPlanet);

            }.bind(this));

        },

        render : function () {

            this.planetsInstances.forEach(function (planet) {

                this.$el.append(planet.$el);

            }.bind(this));

        }


    };

    return SolarSystem;
});