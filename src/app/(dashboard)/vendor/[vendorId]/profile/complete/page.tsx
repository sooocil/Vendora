import { Card, CardContent, CardHeader } from "@/components/ui/card";
import React from "react";

const ProfileVerificationPage = () => {
  return (
    <div className="flex m-16">
      <Card>
        <CardHeader>
          <h1>Profile Verification</h1>
        </CardHeader>
        <CardContent>
          Please complete your profile verification to unlock all store features
          and start selling your products.
        </CardContent>
      </Card>
    </div>
  );
};

export default ProfileVerificationPage;
