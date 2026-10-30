import type { LoginRequest,LoginResponse } from "../types/types";


 export async function login(loginRequest:LoginRequest):Promise<LoginResponse>{
    await new Promise((res)=>setTimeout(res,100))
    if(loginRequest.email!='test@gmail.com' || loginRequest.password!='12345678'){
        throw new Error('Invalid Credentials')
    }
        return {
            user:{
                id:'User001',
                name:'test',
                email:'test@gmail.com',
                role:'DEVELOPER'
            },
            token:'token'
        }
    
}

