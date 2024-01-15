export class CounterService {
    toInactive = 0;
    toActive = 0;

    addToInactive() {
        this.toInactive++;
        console.log(this.toInactive);
    }

    addToActive() {
        this.toActive++;
        console.log(this.toActive);
    }
}