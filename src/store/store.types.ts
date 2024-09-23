import { DraftPatient, IPatient } from "../components/PatientForm/PatientForm.types";

export interface IPatientSTate{
    patients: IPatient[];
    addPatient: (data: DraftPatient) => void;
    deletePatient: (id: IPatient['id']) => void;
    activeID: IPatient['id'];
    getPatientByID: (id: IPatient['id']) => void;
    editPatient: (patient: DraftPatient) => void;
}