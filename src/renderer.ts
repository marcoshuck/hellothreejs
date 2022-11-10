import * as three from 'three';
import * as windows from './windows';

type Config = three.WebGLRendererParameters;

export function setupRenderer(wp: windows.WindowParameters, cfg: Config): three.WebGLRenderer {
    const render = new three.WebGLRenderer(cfg);
    render.setSize(wp.width, wp.height);
    render.setPixelRatio(Math.min(wp.devicePixelRatio, 2))
    return render;
}