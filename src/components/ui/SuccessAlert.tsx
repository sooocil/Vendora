import React from "react";
import { Alert, AlertDescription } from "./alert";


interface SuccessAlertProps {
  successMessage: string;
}

const SuccessAlert: React.FC<SuccessAlertProps> = ({ successMessage }) => {
  return (
    <div>
      <Alert
        variant="destructive"
        className="flex justify-center border-red-200 bg-red-50 shadow-md"
      >
        <AlertDescription className=" text-red-800">{successMessage}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SuccessAlert;
