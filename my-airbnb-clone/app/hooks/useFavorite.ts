import axios from "axios";
import { useRouter } from "next/navigation";
import {useCallback,useMemo} from 'react';

import { toast } from "react-hot-toast";


import { SafeUSer } from "../types";

import useLoginModal from "./useLoginModal";

interface IUserfavorite {
    listingId:string;
    currentUser?:SafeUSer|null
}


const useFavorite = ({
    listingId,
    currentUser
}:IUserfavorite)=>{
    const router = useRouter()
    const loginModal = useLoginModal()

    const hasFavorited = useMemo(()=>{
const list = currentUser?.favoriteIds||[];
return list.includes(listingId);
    },[currentUser,listingId])

    const toggleFavorite = useCallback(async(
        e:React.MouseEvent<HTMLDivElement>
    )=>{
  e.isPropagationStopped();
  if(!currentUser){
    return loginModal.onOpen();
  }
  try {
    let request;
    if(hasFavorited){
        request=()=>axios.delete(`/api/favorites/${listingId}`)
    }else {
        request = ()=> axios.post(`/api/favorites/${listingId}`)
    }
    await request();
    router.refresh();
    toast.success('Success')
  } catch (error) {
    toast.error('Something went wrong')
  }
    },[
        currentUser,
        hasFavorited,
        listingId,
        loginModal,
        router
    ]);
    return{
        hasFavorited,
        toggleFavorite
    }
}
export default useFavorite