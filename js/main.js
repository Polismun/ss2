'use strict';



import ApiFishEye from './provider/ApiFishEye.js';


import HomePageBuilder from './home/HomePageBuilder.js';


import PhotographerProfil from './photographers/PhotographerProfil.js';
import DropDownMenu from './photographers/DropDownSort.js';
import MediaBuilder from './photographers/MediaBuilder.js';

(function appDispatch() {
    new ApiFishEye().getDataFishEye().then((data) => {
        if (window.location.pathname.includes("/photographers.html")) {

            new PhotographerProfil().displayPhotographerProfil(data);


            new DropDownMenu().dropDown(data);


            new MediaBuilder().photographersMedias(data);
            return
        }

        new HomePageBuilder().displayPhotographers(data);
    }).catch(() => {
        console.error('Failed to load ApiFishEye');
    })
})();
