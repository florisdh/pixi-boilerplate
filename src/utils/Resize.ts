import * as PIXI from "pixi.js";

export default class Resize {

    /**
     * Scales the renderer to maintain it's aspect ratio at all time and fits withint the given size.
     * @param {PIXI.Renderer} renderer 
     * @param {number} width 
     * @param {number} height 
     * @param {number} aspect 
     * @returns {boolean} Whether the size actually changed or not.
     */
    public static maintainAspect(renderer: PIXI.Renderer, width: number, height: number, aspect: number = 16/9): boolean {
        // Enforce aspect
        if (width / height > aspect) {
            width = height * aspect;
        } else {
            height = width / aspect;
        }

        // Pixel perfect?
        //width |= 0;
        //height |= 0;

        if (width !== renderer.width || height !== renderer.height) {
            renderer.resize(width, height);
            return true;
        }

        return false;
    }

}
