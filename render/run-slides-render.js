const slidesRender = require( 'slides-render-angular' );
let options = {
    'ANGULAR_PORT': 1002,
    'SERVER_PORT': 1000,
    'SNAPSHOTS_PORT': 1001,

}

slidesRender.run( options );