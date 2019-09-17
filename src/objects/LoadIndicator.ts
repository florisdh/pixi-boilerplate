import * as PIXI from "pixi.js";

export default class LoadIndicator extends PIXI.Text {

    /**
     * Speed of loading change in percent per second.
     */
    private static LOAD_SPEED: number = 100;

    private target: number;
    private current: number;

    constructor() {
        super('', {
            fontSize: 20
        });
        this.reset();
    }

    public reset(): void {
        this.target = this.current = 0;
        this.updateIndicator();
    }

    public update(delta: number): void {
        if (this.current < this.target) {
            this.current = Math.min(this.target, this.current + delta / 1000 * LoadIndicator.LOAD_SPEED);
            this.updateIndicator();
            if (this.completed) {
                this.emit("finished");
            }
        }
    }

    private updateIndicator(): void {
        this.text = `Loading game assets: ${this.current|0}%`;
    }

    public eventNames(): (string|symbol)[] {
        return super.eventNames().concat([
            'finished'
        ]);
    }

    public get progress(): number {
        return this.target;
    }

    public set progress(target: number) {
        const completed = this.completed;
        this.target = target;
        if (!completed && this.completed) {
            this.emit("finished");
        }
    }

    public get completed(): boolean {
        return this.current === this.target;
    }
}
