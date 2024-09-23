import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import PatientForm from "./components/PatientForm";
import PatientsList from "./components/PatientsList";

const App = () => {

  return (
    <>
     <div className=" container mx-auto mt-20 ">
      <h1 className=" font-black text-5xl text-center md:w-2/3 md:mx-auto">
      {`Pet Health Monitoring ` }
      <span className=" text-indigo-700"> Vet </span>
      </h1>

      <div className=" mt-12 md:flex">
        <PatientForm/>
        <PatientsList/>
      </div>
      <ToastContainer/>

     </div>
    </>
  )
}

export default App
