$(document).ready(function () {

    // The app
    var App = function () {
        var app = this;

        app.data = {};
        app.events = $({});

        // Event listeners on the app object
        app.on = function (event, callback) {
            app.events.on(event, callback);
            return this;
        };

        var list = new List(app);
        var repo = new Repo(app);
    };

    // The data
    var Repo = function (app) {
        
        app.events.trigger('loading-data');

        // Fetch the data
        app.data = {
            api_data: ['example', 'api', 'data']
        };

        app.events.trigger('data');
    };

    // The view
    var List = function (app) {
        app.events.on('data', function () {
            console.log(app.data);
        });
    };

    // Init the app
    var app = new App();
});