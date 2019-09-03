import * as PIXI from "pixi.js";
import {SceneManager} from "pixi-scenes";
import Menu from "./states/Menu";
import Gameplay from "./states/Gameplay";

window.onload = () => {
    const content: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
    if (!content) {
        throw new Error('Could not find div named content in document!');
    }

    const app = new PIXI.Application({
        width: 800,
        height: 600,
        backgroundColor: 0x1099bb,
        resolution: window.devicePixelRatio || 1,
    });
    content.appendChild(app.view);
    
    const scenes: SceneManager = new SceneManager(app);
    scenes.add('menu', new Menu());
    scenes.add('gameplay', new Gameplay());
    scenes.start('menu');
};
