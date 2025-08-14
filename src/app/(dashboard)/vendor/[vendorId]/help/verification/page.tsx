import React from "react";
import { Card, CardHeader, CardTitle } from "@/components/ui/card";

export const VerificationHelp = () => {
  return (
    <div>
      <Card>
        <CardHeader>
          <h2>Verification Help</h2>
        </CardHeader>
        <CardTitle>Verification Required</CardTitle>
        <p>You must complete your profile for Verification.</p>
      </Card>
    </div>
  );
};
