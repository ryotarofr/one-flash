// store.js
import {create} from 'zustand';


interface UserSession {
  userData: {id:string| null, email:string |null}
  setUserData: (newUserData:{id:string| null, email:string |null}) => void
 }


const useUserSessionStore = create<UserSession>((set) => ({
  userData: {id:null, email:null},
  setUserData: (newUserData) => set({ userData: newUserData }),
}));

export default useUserSessionStore;
