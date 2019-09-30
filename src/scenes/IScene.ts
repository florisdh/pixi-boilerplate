import { IScene } from 'pixi-scenes';

export default interface IScene extends IScene {
    /**
     * Handles game resize events.
     */
    resize?(): void;
}
