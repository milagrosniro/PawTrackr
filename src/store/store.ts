import { create } from 'zustand'
import { IPatientSTate } from './store.types'

export const usePatientStore = create<IPatientSTate>(() => ({
 patients: []
}))