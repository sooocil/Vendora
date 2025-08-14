import React, { Children } from "react";
import { Alert, AlertDescription } from "./alert";


interface SuccessAlertProps {
  successMessage: string;
}




const SuccessAlert: React.FC<SuccessAlertProps> = ({ successMessage }) => {
  return (
    <div>
      <Alert
        variant="destructive"
        className="flex justify-center border-indigo-200 bg-indigo-50 shadow-md"
      >
        <AlertDescription className=" text-indigo-600">{successMessage}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SuccessAlert;
