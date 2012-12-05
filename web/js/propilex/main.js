require({
    deps: [
        'bootstrap',
        'less'
    ],

    paths: {
        'text': '/components/requirejs-text/text',
        'backbone': '/components/backbone/backbone-min',
        'backbone-forms-core': '/components/backbone-forms/distribution/backbone-forms.min',
        'backbone-forms': '/components/backbone-forms/distribution/templates/bootstrap',
        'jquery': '/components/jquery/jquery',
        'underscore': '/components/lodash/lodash.min',
        'garlicjs': '/components/garlicjs/garlic',
        'bootstrap': '/components/bootstrap.css/js/bootstrap.min',
        'moment-core': '/components/moment/moment',
        'moment': '/components/moment/lang/fr',
        'less': '/components/less.js/dist/less-1.3.1.min',
        'i18n': '/components/requirejs-i18n/i18n',
        'key': '/components/keymaster/keymaster.min'
    },

    shim: {
        'jquery': {
            'exports': 'jQuery'
        },
        'bootstrap': {
            'deps': [ 'jquery' ],
            'exports': '$'
        },
        'underscore': {
            'exports': '_'
        },
        'backbone': {
            'deps': [ 'underscore', 'jquery' ],
            'exports': 'Backbone'
        },
        'backbone-forms-core': {
            'deps': [ 'jquery', 'backbone' ],
            'exports': 'Backbone'
        },
        'backbone-forms': {
            'deps': [ 'backbone-forms-core' ],
            'exports': 'Backbone'
        },
        'less': {
            'exports': 'less'
        },
        'garlic': {
            'deps': [ 'jquery' ],
            'exports': '$'
        },
        'moment-core': {
            'deps': [ 'jquery' ]
        },
        'moment': {
            'deps': [ 'moment-core' ]
        },
        'key': {
            'exports': 'key'
        }
    },

    config: {
        i18n: {
            locale: localStorage.getItem('locale') || 'en-us'
        }
    }
});

require(
    [
        'router',
        'views/canvas',
        'jquery',
        'backbone',
        't',
        'moment'
    ],
    function (router, canvasView, $, Backbone, t, moment) {
        "use strict";

        $.t = t;

        moment.lang(requirejs.s.contexts._.config.config.i18n.locale.substr(0, 2));

        canvasView.render();
        $('body').prepend(canvasView.el);

        Backbone.history.start();
    }
);
