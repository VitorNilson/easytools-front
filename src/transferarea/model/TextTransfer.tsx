export default class TextTransfer {
    locked: boolean = false;
    text: string;
    userIp: string;
    createdAt: Date | null;
    updatedAt: Date | null;
    lockedAt: Date | null;

    constructor(locked: boolean,text: string, userIp: string, createdAt: Date | null, updatedAt: Date | null, lockedAt: Date | null){
        this.locked = locked;
        this.text = text;
        this.userIp = userIp;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
        this.lockedAt = lockedAt;
    }
}