import { Sync } from './sync/Sync';
export class SynchronizationManager {
    constructor(private sync: Sync) { }
    syncRemote() {
        this.sync.syncRemote();
    }

}