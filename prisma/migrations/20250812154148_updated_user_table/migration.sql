-- CreateEnum
CREATE TYPE "public"."SubscriptionPlan" AS ENUM ('BASE', 'PLUS', 'PRO');

-- AlterTable
ALTER TABLE "public"."User" ADD COLUMN     "isPaid" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "subscriptionId" TEXT,
ADD COLUMN     "subscriptionPlan" "public"."SubscriptionPlan" DEFAULT 'BASE',
ADD COLUMN     "trialEnd" TIMESTAMP(3),
ADD COLUMN     "trialStart" TIMESTAMP(3);

-- CreateTable
CREATE TABLE "public"."Subscription" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "plan" "public"."SubscriptionPlan" NOT NULL,
    "status" TEXT NOT NULL,
    "startedAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "expiresAt" TIMESTAMP(3),
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Subscription_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "public"."Subscription" ADD CONSTRAINT "Subscription_userId_fkey" FOREIGN KEY ("userId") REFERENCES "public"."User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
