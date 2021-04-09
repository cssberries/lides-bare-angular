const slidesFinder = require('slides-finder');
let options = {
    'SERVER_PORT': 2010,
    'SNAPSHOTS_PORT': 2020,
    'ANGULAR_PORT': 2030,
    'DEV_RENDER_PORT': 2002,
    'slidesListModulePathRender': 'render/slides-list.module.ts',
    'slidesRenderComponentPath': '../render/node_modules/slides-render-angular/src/app/slides/slides-render/slides-render.component',
    'slidesListingComponentRenderPath': './node_modules/slides-render-angular/src/app/slides/slides-listing/slides-listing.component',
}

slidesFinder.run(options);