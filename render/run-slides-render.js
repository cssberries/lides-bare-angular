const slidesRender = require('slides-render-angular');
let options = {
    'ANGULAR_PORT': 2002,
    'SERVER_PORT': 2000,
    'SNAPSHOTS_PORT': 2001,

}

slidesRender.run(options);