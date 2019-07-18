export default class Animator {
    constructor(props) {
        this.duration = props.duration;
        this.update = props.update;
        this.easing = props.easing;
    }

    animate = () => {
        let startTime = 0,
            duration = this.duration,
            update = this.update,
            easing = this.easing;
        return new Promise((resolve, reject) => {
            let qId = 0;
            const step = (timeNow) => {
                startTime = startTime || timeNow;
                const p = Math.min(1, (timeNow - startTime) / duration);
                update.call(this, easing ? easing(p) : p, p);
                if (p < 1) {
                    qId = requestAnimationFrame(step);
                } else {
                    resolve(this);
                }
            };

            this.cancel = () => {
                cancelAnimationFrame(qId);
                update.call(self, 0, 0);
                reject('you canceld');
            };

            qId = requestAnimationFrame(step);
        });
    }

    ease() {
        return new Animator(this.duration, this.update, this.easing);
    }
};
