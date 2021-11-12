import log from './console';
import _ from 'lodash'

function component() {
    const element = document.createElement("div");

    element.innerHTML = _.join(["Hello", "webpack"], " ");
    return element;
}

log();

document.body.appendChild(component());