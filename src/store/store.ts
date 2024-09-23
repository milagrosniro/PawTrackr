import { v4 as uuidV4 } from 'uuid'
import { create } from 'zustand'
import { devtools } from 'zustand/middleware'
import { DraftPatient, IPatient } from '../components/PatientForm/PatientForm.types'
import { IPatientSTate } from './store.types'

const createPatient = (patient: DraftPatient) : IPatient =>{
    return {...patient, id: uuidV4() }
}

export const usePatientStore = create<IPatientSTate>()(
    devtools((set) => ({
 patients: [],
 activeID:'',
 addPatient: (data) => { 
    const newPatient = createPatient(data)
    set((state)=>({
        patients:[...state.patients, newPatient]
    }))
    
},
deletePatient: (id) =>{
    set((state)=>({
        patients: state.patients.filter(patient => patient.id !== id)
    }))
},

getPatientByID : (id) =>{
    set(()=>({
        activeID: id
    }))
},
editPatient: (patient) =>{
    set((state)=>({
        patients: state.patients.map(pat => pat.id === state.activeID ? {...patient, id:pat.id} : pat),
        activeID:'',
    }))
} 


})
))