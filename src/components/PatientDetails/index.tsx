import { toast } from 'react-toastify';
import { v4 as uuidV4 } from 'uuid';
import { usePatientStore } from "../../store/store";
import PatientDetailItem from "../PatientDetailItem";
import { IPatient } from '../PatientForm/PatientForm.types';
import { IPatientDetailsProps } from "./patientDetails.types";

const PatientDetails = ({ patient }: IPatientDetailsProps) => {

    const {deletePatient, getPatientByID} = usePatientStore();

    const handleDeletePatient = (id: IPatient['id']) =>{
      deletePatient(id);
      toast.error('Patient deleted');

    }

  return (
    <div className=" mx-5 my-10 px-5 py-10 bg-white shadow-md rounded-xl">
      {Object.entries(patient).map(([label, info]) => (
        <PatientDetailItem key={uuidV4()} label={label} info={info} />
      ))}
      <div className=" flex flex-col lg:flex-row gap-3 justify-between  mt-10">
        <button className=" py-2 px-10 bg-indigo-600 hover:bg-indigo-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> getPatientByID(patient.id)}>Edit</button>
        <button className=" py-2 px-10 bg-red-600 hover:bg-red-700 text-white font-bold uppercase rounded-lg"
        onClick={()=> handleDeletePatient(patient.id)}>Delete</button>


      </div>
    </div>
  );
};

export default PatientDetails;
