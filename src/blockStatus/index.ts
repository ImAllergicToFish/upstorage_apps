class AppBlockStatus {

    private BLOCK_STATUS: boolean

    constructor() {
        this.BLOCK_STATUS = false;
    }

    get(): boolean {
        return this.BLOCK_STATUS;
    }

    set(status: boolean): void {
        this.BLOCK_STATUS = status;
    }
}

const BlockStatus = new AppBlockStatus();

export default BlockStatus;
