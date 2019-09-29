/**
 * Resizes the renderer to the given resolution.
 * @param {PIXI.Renderer} renderer 
 * @param {number} width 
 * @param {number} height 
 * @returns {boolean} Whether the size actually changed or not.
 */
export default function Resize(renderer: PIXI.Renderer, width: number, height: number): boolean {
    
    // Pixel perfect?
    //width |= 0;
    //height |= 0;

    if (width !== renderer.width || height !== renderer.height) {
        renderer.resize(width, height);
        return true;
    }

    return false;
}
