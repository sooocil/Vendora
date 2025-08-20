import React from "react";
import { Alert, AlertDescription } from "./alert";

interface ErrorProps {
  error: string;
}
 
const ErrorAlert: React.FC<ErrorProps> = ({ error }) => {
  return (
    <div>
      {" "}
      <Alert
        variant="destructive"
        className="flex justify-center border-red-200 bg-red-50 shadow-lg"
      >
        <AlertDescription className="  text-red-800">{error}</AlertDescription>
      </Alert>
    </div>
  );
};

export default ErrorAlert;
