import api from "../../../shared/api";
import type{
  LoginRequest,
  LoginResponse
} from '../types/types'

export async function login(
 loginRequest:LoginRequest
):Promise<LoginResponse>{
  
  const response=await api.post<LoginResponse>(
    "/auth/login",
     loginRequest
    
  )
  return response.data
}

