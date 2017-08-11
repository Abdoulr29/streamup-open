import { Sync } from "./sync/Sync";
export class SynchronizationManager {
    
    constructor(sync:Sync) {}
    syncRemote():any{
        return this.sync.syncRemote();
    }

}