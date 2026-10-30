
import {create} from 'zustand'
import { persist} from 'zustand/middleware'
import type { User } from '../types/types'


type AuthState={
    user:User|null
    token:string|null
    isHydrated:boolean

    login :(user:User,token:string)=>void
    logout:()=>void;
    setHydrated: () => void;
}

export const UserAuth=create<AuthState>()(
    persist(
        (set)=>({
            user:null,
            token:null,
            isHydrated:false,
            login:(user,token)=>{
                set({
                    user,
                    token,
                    isHydrated:true,
                })
            },
            logout:()=>{
                set({
                    user:null,
                    token:null,
                    
                })
            },
            setHydrated: () => set({ isHydrated: true }),
        }),
        {
            name:'auth-storage',
          onRehydrateStorage: () => () => {
        UserAuth.setState({ isHydrated: true });
      },
        }
    )
)
