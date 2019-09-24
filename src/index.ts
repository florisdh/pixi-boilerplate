import * as PIXI from "pixi.js";
import {SceneManager} from "pixi-scenes";
import Scale from "./utils/Scale";
import Splash from "./scenes/Splash";
import Boot from "./scenes/Boot";
import Menu from "./scenes/Menu";
import Gameplay from "./scenes/Gameplay";

let app: PIXI.Application;

function setup(): void {
    const content: HTMLDivElement = <HTMLDivElement>document.getElementById('content');
    if (!content) {
        throw new Error('Could not find div named content in document!');
    }
    if (app) {
        throw new Error('Setup has been done before!');
    }

    // Setup and configure application
    app = new PIXI.Application({
        autoDensity: true,
        resolution: window.devicePixelRatio || 1,
        backgroundColor: 0x1099bb,
    });
    content.appendChild(app.view);
    
    // Setup right app size
    resize();

    // Add all scenes
    const scenes: SceneManager = new SceneManager(app);
    scenes.add('boot', new Boot());
    scenes.add('splash', new Splash());
    scenes.add('menu', new Menu());
    scenes.add('gameplay', new Gameplay());

    // Start loading
    scenes.start('boot');
}

let timeout: NodeJS.Timeout;

function queResize(): void {
    if (!app) {
        return;
    }
    if (timeout) {
        clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
        timeout = null;
        resize();
    }, 500);
}

function resize(): void {
    if (!app) {
        return;
    }

    const hasResized: boolean = Scale.maintainAspect(app.renderer, window.innerWidth, window.innerHeight, 800 / 600);
    if (hasResized) {
        // TODO: let scene resize
    }
}

// Entry
window.addEventListener('load', setup);
window.addEventListener('resize', queResize);
