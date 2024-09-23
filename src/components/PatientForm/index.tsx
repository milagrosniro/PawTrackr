import { useForm } from "react-hook-form";
import ErrorMsg from "../ErrorMsg";
import { DraftPatient } from "./PatientForm.types";

const PatientForm = () => {
  
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<DraftPatient>();

  const registerPatient = (data: DraftPatient) => {console.log(data)};

  return (
    <div className="md:w-1/2 lg:w-2/5 mx-5">
      <h2 className="font-black text-3xl text-center">Patient Tracking</h2>

      <p className="text-lg mt-5 text-center mb-10">
        Add and {""}
        <span className="text-indigo-600 font-bold">Manage Patients </span>
        
      </p>

      <form
        className="bg-white shadow-md rounded-lg py-10 px-5 mb-10"
        noValidate
        onSubmit={handleSubmit(registerPatient)}
      >
        <div className="mb-5">
          <label htmlFor="name" className="text-sm uppercase font-bold">
            Patient's Name
          </label>
          <input
            id="name"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="Patient's Name"
            {...register("name", {
              required: `Patient's Name is Required`,
            })}
          />
        </div>
        {errors.name && <ErrorMsg>{errors.name?.message}</ErrorMsg>}

        <div className="mb-5">
          <label htmlFor="caretaker" className="text-sm uppercase font-bold">
            CareTaker
          </label>
          <input
            id="caretaker"
            className="w-full p-3  border border-gray-100"
            type="text"
            placeholder="CareTaker's Name"
            {...register("caretaker", {
              required: "CareTaker is Required",
            })}
          />
        </div>

        {errors.caretaker?.message && (
          <ErrorMsg>{errors.caretaker.message}</ErrorMsg>
        )}

        <div className="mb-5">
          <label htmlFor="email" className="text-sm uppercase font-bold">
            Email
          </label>
          <input
            id="email"
            className="w-full p-3  border border-gray-100"
            type="email"
            placeholder="Email"
            {...register("email", {
              required: "Email is Required",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Not Valid Email",
              },
            })}
          />
        </div>

        {errors.email?.message && (
          <ErrorMsg>{errors.email.message}</ErrorMsg>
        )}

        <div className="mb-5">
          <label htmlFor="date" className="text-sm uppercase font-bold">
            Date
          </label>
          <input
            id="date"
            className="w-full p-3  border border-gray-100"
            type="date"
            {...register("date", {
              required: "Date is Required",
            })}
          />
        </div>
        {errors.date?.message && (
          <ErrorMsg>{errors.date.message}</ErrorMsg>
        )}

        <div className="mb-5">
          <label htmlFor="symptoms" className="text-sm uppercase font-bold">
            Symptoms
          </label>
          <textarea
            id="symptoms"
            className="w-full p-3  border border-gray-100"
            placeholder=" Symptoms"
            {...register("symptoms", {
              required: "Symptoms are Required",
            })}
          />
        </div>
        {errors.symptoms?.message && (
          <ErrorMsg>{errors.symptoms.message}</ErrorMsg>
        )}

        <input
          type="submit"
          className="bg-indigo-600 w-full p-3 text-white uppercase font-bold hover:bg-indigo-700 cursor-pointer transition-colors"
          value="Save Patient"
        />
      </form>
    </div>
  );
};

export default PatientForm;
