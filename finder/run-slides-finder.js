const slidesFinder = require( 'slides-finder' );
let options = {
    'SERVER_PORT': 1010,
    'SNAPSHOTS_PORT': 1020,
    'ANGULAR_PORT': 1030,
    'DEV_RENDER_PORT': 1002,
    'slidesListModulePathRender': 'render/slides-list.module.ts',
    'slidesRenderComponentPath': '../render/node_modules/slides-render-angular/src/app/slides/slides-render/slides-render.component',
    'slidesListingComponentRenderPath': './node_modules/slides-render-angular/src/app/slides/slides-listing/slides-listing.component',
}

slidesFinder.run( options );