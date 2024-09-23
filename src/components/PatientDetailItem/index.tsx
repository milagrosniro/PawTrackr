import { IPatientDetailItemProps } from "./PatientDetailItem.types"

const PatientDetailItem = ({info,label}: IPatientDetailItemProps) => {
    
  return (
    <p className=" font-bold mb-3 text-gray-700 uppercase"> {`${label}: `}
    <span className=" font-normal normal-case">{info}</span>
</p>
  )
}

export default PatientDetailItem