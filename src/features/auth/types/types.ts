export type UserRole = "SUPER_ADMIN" | "ADMIN" | "DEVELOPER";
 
export interface User{
    id:string,
    name:string,
    email:string,
    role:UserRole
}

export type AuthUser = {
  id: string;
  name: string;
  email: string;
  role?: UserRole;
  status?: "ACTIVE" | "BLOCKED";
  designation?: string;
  joiningDate?: string;
  profileImage?: string;
};

export type LoginRequest = {
  email: string;
  password: string;
};

export type LoginResponse = {
  message: string;
   user: User;
    accessToken: string;
    role: UserRole;
  
};



