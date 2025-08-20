export type vendor = {
  id: string;
  fullName?: string;
  username: string;
  email: string;
  panNo?: string;
  storeName?: string;
  citizenshipNo?: string;
  location?: string;
  isEmailVerified: boolean;
  isVerified: boolean;
  profileImage?: string;
  isPaid: boolean;
  trialStart?: Date;
  trialEnd?: Date;
  subscriptionId?: string;
  subscriptionPlan?: string;
  password: string;
  createdAt: Date;
  updatedAt: Date;
}