import { SyncParams } from "./SyncParams";

export interface Sync {
    syncRemote(_params:SyncParams): any;
}
