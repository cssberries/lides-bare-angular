const render = require( './render/node_modules/slides-render-angular' );
const finder = require( './finder/node_modules/slides-finder' );

let optionsRender = {
    'BASE_HREF_RENDER': '/slides-render-angular/',
    'GH_REPOSITORY_RENDER': `git@github.com:cssberries/slides-render-angular.git`,
}

let optionsFinder = {
    'GH_FINDER_REPOSITORY_NAME': 'slides-finder',
    'BASE_HREF_FINDER': '/slides-finder/',
    'DOMAIN_NAME': 'https://cssberries.github.io/slides-render-angular', // Iframe domain name!
    'GH_REPOSITORY_FINDER': `git@github.com:cssberries/slides-finder.git`
}
finder.deploy( optionsFinder );
render.deploy( optionsRender );