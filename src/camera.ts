import * as three from 'three';

interface Config {
    fov: number;
    aspect: number;
    near: number;
    far: number;
}

export function setupCamera(cfg: Config): three.PerspectiveCamera {
    return new three.PerspectiveCamera(cfg.fov, cfg.aspect, cfg.near, cfg.far)
}