import * as three from 'three';
import {OrbitControls} from 'three/examples/jsm/controls/OrbitControls.js';
import * as dat from 'dat.gui';
import * as windows from './windows';
import * as camera from './camera';
import * as renderer from './renderer';
import {createTicker} from "./ticker";

function main() {
    const winParams: windows.WindowParameters = windows.getCurrentWindowsParameters();
    const cam: three.PerspectiveCamera = camera.setupCamera({aspect: winParams.getAspect(), far: 100, fov: 75, near: 0.1})
    const canvas = document.querySelector('canvas.webgl') as HTMLElement;
    const render: three.WebGLRenderer = renderer.setupRenderer(winParams, {
        canvas: canvas,
    });

    windows.setResizeEvent(windows.resizeEvent(winParams, cam, render));

    const gui: dat.GUI = new dat.GUI({closed: true, width: 400});

    const tick = createTicker();
}
main();
