import * as PIXI from "pixi.js";

export default class Loader {

    private static batches: { [name: string]: PIXI.Loader } = {};

    public static loadBatch(name: string, assets: { [name: string]: string }): PIXI.Loader|null {
        if (Loader.hasBatch(name)) {
            return null;
        }
        const loader: PIXI.Loader = new PIXI.Loader();
        for (let assetName in assets) {
            loader.add(assetName, assets[assetName]);
        }
        Loader.batches[name] = loader;
        loader.load();
        return loader;
    }

    public static getBatch(name: string): PIXI.Loader|null {
        return Loader.batches[name];
    }

    public static getAsset(batch: string, name: string): any|null {
        if (!Loader.hasBatch(batch)) {
            return null;
        }
        return Loader.batches[batch].resources[name];
    }

    public static hasBatch(name: string): boolean {
        return name in Loader.batches;
    }
}
