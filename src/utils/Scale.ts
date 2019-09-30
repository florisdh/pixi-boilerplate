import * as PIXI from "pixi.js";

export default class Scale {

    /**
     * Fits the width and height into the aspect ratio.
     * @param {number} width 
     * @param {number} height 
     * @param {number} aspect 
     * @returns {tuple} Final width and height
     */
    public static fitAspect(width: number, height: number, aspect: number = 16/9): [number, number] {
        // Enforce aspect
        if (width / height > aspect) {
            width = height * aspect;
        } else {
            height = width / aspect;
        }
        return [width, height];
    }

}
