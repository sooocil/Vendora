import React, { Children } from "react";
import { Alert, AlertDescription } from "./alert";


interface SuccessAlertProps {
  successMessage: string;
  children: React.ReactNode;
}




const SuccessAlert: React.FC<SuccessAlertProps> = ({ successMessage, children }) => {
  return (
    <div>
      <Alert
        variant="destructive"
        className="flex justify-center border-red-200 bg-red-50 shadow-md"
      >
        <AlertDescription className=" text-red-800">{children}</AlertDescription>
      </Alert>
    </div>
  );
};

export default SuccessAlert;
