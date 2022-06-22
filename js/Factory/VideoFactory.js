'use strict';


export default class VideoFactory {

    createHTML(element) {
        let eltVideo = document.createElement('video');
        eltVideo.setAttribute('src', element.video);
        eltVideo.setAttribute('role', 'button');
        eltVideo.setAttribute('button',true);
        eltVideo.className = 'ph-media';

        return eltVideo;
    }
}
