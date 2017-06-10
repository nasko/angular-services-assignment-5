export class CounterService {
  activationsCount = 0;
  deactivationsCount = 0;

  userActivated() {
    this.activationsCount++;
    this.logCounters();
  }

  userDeactivated() {
    this.deactivationsCount++;
    this.logCounters();
  }

  logCounters() {
    console.log('Activations: ' + this.activationsCount + '; Deactivations: ' + this.deactivationsCount);
  }
}
