import * as three from 'three';
import {func} from "three/examples/jsm/nodes/shadernode/ShaderNodeBaseElements";

export interface WindowParameters {
    devicePixelRatio: number;
    width: number;
    height: number;

    getAspect(): number;
    update(): void;
}

class BrowserParameters implements WindowParameters {
    get height(): number {
        return this._height;
    }
    get width(): number {
        return this._width;
    }
    get devicePixelRatio(): number {
        return this._devicePixelRatio;
    }

    private window: Window;
    private _height: number = 0;
    private _width: number = 0;
    private _devicePixelRatio: number = 0;

    constructor(w: Window) {
        this.window = w;
        this.update();
    }

    public getAspect(): number {
        return this._width / this._height;
    }

    public update(): void {
        this._height = this.window.innerHeight;
        this._width = this.window.innerWidth;
        this._devicePixelRatio = this.window.devicePixelRatio;
    }

}

export function getCurrentWindowsParameters(): WindowParameters {
    return new BrowserParameters(window)
}

export function resizeEvent(windowSize: WindowParameters, camera: three.PerspectiveCamera, renderer: three.WebGLRenderer): () => void {
    return function () {
        // Update sizes
        windowSize.width = window.innerWidth;
        windowSize.height = window.innerHeight;

        // Update camera
        camera.aspect = windowSize.getAspect();
        camera.updateProjectionMatrix();

        // Update renderer
        renderer.setSize(windowSize.width, windowSize.height);
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    }
}

export function setResizeEvent(fn: () => void) {
    window.addEventListener('resize', fn)
}