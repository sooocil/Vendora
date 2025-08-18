import React, { useEffect, useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import { Button } from "../ui/button";
import { fa } from "zod/v4/locales";
import { CheckCircle } from "lucide-react";

interface SignoutConfirmProps {
  open: boolean;
}

export function SignoutConfirm({ open }: SignoutConfirmProps) {
  const [signout, setSignout] = useState(false);
  const [modalState, setModalState] = useState(open);

  const handleCancel = () => {
    setModalState(false);
  };

  const handleSignout = () => {
    console.log(" Signout clicked !");
  };

  return (
    <>
      {modalState && (
        <div className="fixed inset-0 mb-0 z-40 bg-black/60 backdrop-blur-sm ">
          <Card className="absolute left-1/2 top-1/2 z-50 w-fit px-8 py-4  ">
            <CardHeader className=" text-center text-2xl text-indigo-600">
              Signout
            </CardHeader>
            <CheckCircle size={32} className="text-red-500 mx-auto" />

            <p className="text-center text-zinc-600">
              Do you want to sign out?
            </p>
            <div className="flex justify-center gap-2 mx-auto">
              <Button
                onClick={() => {
                  setModalState(false);
                }}
                className="bg-indigo-100 hover:bg-indigo-200 text-black"
              >
                {" "}
                Cancel
              </Button>
              <Button
                onClick={handleSignout}
                className="bg-red-500 hover:bg-red-600 text-white"
              >
                {" "}
                Signout
              </Button>
            </div>
          </Card>
        </div>
      )}{" "}
    </>
  );
}

export default SignoutConfirm;
