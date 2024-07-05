import { auth } from "@clerk/nextjs/server";

const adminIds = [
  "user_2iD1JGpJB8M0tZSMpx0aPOAsg3N"
]


export const isAdmin = async () => {
  const { userId } = auth();

  if (!userId) {
    return false;
  }

  return adminIds.indexOf(userId) !== -1;

}