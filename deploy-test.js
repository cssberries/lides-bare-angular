const render = require( 'slides-render-angular' );
const finder = require( 'slides-finder' );

let optionsRender = {
    'BASE_HREF_RENDER': `/yevgeniy-belov/slides-render-angular-test/`,
    'GH_REPOSITORY_RENDER': `git@github.houston.softwaregrp.net:yevgeniy-belov/slides-render-angular-test.git`,
}

let optionsFinder = {
    'GH_FINDER_REPOSITORY_NAME': 'slides-finder-test',
    'BASE_HREF_FINDER': '/yevgeniy-belov/slides-finder-test/',
    'DOMAIN_NAME': 'https://pages.github.houston.softwaregrp.net/yevgeniy-belov/slides-render-angular-test', // Iframe domain name!
    'GH_REPOSITORY_FINDER': `git@github.houston.softwaregrp.net:yevgeniy-belov/slides-finder-test.git`
}

finder.deploy( optionsFinder );
render.deploy( optionsRender );