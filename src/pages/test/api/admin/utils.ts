import { User } from "@/pages/test/api/admin";

export const mapUsersListForAdminTable = (users: User[]) =>{
  return users?.map((user) => ({
    email: user?.email,
    createdAt: user?.created_at,
    phone: user?.phone,
    lastSignIn: user?.last_sign_in_at,
    id: user?.id,
  }));
};

export const mapUsersListForDropdown = (users: User[]) => {
  return users?.map((user) => ({
    value: user?.id,
    label: user?.email,
  }));
};