export class Booking {
    constructor(public id: number, public datum: string, public tid: string, public kund: string, public nivå: string, public städare: string, public status: boolean) {
        this.id = id;
        this.datum = datum;
        this.tid = tid;
        this.kund = kund;
        this.nivå = nivå;
        this.städare = städare;
        this.status = status;
    }
}