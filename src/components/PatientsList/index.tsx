import { v4 as uuidV4 } from 'uuid';
import { usePatientStore } from "../../store/store";
import PatientDetails from "../PatientDetails";

const PatientsList = () => {
  const {patients} = usePatientStore();

  return (
    <div className=" md:w-1/2 lg:3/5 md:h-screen overflow-y-scroll">
      {
        patients.length ? 
        (<>
        <h2 className=" font-black text-3xl text-center"> Patients List </h2>
        <p className=" text-xl mt-5 mb-10 text-center">Patients & Appointments</p>
        {patients.map(patient => <PatientDetails key={uuidV4()} patient={patient}/>)}
        
        </>) : (
          <>
          <h2 className=" font-black text-3xl text-center">No Patients Yet</h2>
          <p className=" text-xl mt-5 mb-10 text-center">
            Start by adding new Patients 
            <span className=" text-indigo-600 font-bold"> and they'll appear here</span>

          </p>
          </>
        )
      }


    </div>
  )
}

export default PatientsList