export interface IPatient{
    name: string;
    date: Date;
    email: string;
    caretaker: string;
    symptoms: string;
    id: string

}

export type DraftPatient = Omit <IPatient,'id'>