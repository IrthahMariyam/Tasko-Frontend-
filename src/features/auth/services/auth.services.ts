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

export async function logout():Promise<void>{
  await api.post('auth/logout')
}

export async function refreshAccessToken(){
  const response = await api.post('/auth/refresh')
  return response.data.accessToken
}