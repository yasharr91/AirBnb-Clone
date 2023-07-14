'use client'

import { SafeUSer } from "@/app/types";
import { Listing, Reservation } from "@prisma/client";

interface ListingCardProps {
    key:string;
    data:Listing;
    reservation?:Reservation
    onAction?:(id:string)=>void
    disabled?:boolean
    actionLabel?:string
    actionId?:string
    currentUser?:SafeUSer|null
}
const ListingCard:React.FC<ListingCardProps> = ({
    key,
    data,
    currentUser,
    onAction,
    reservation,
    actionId,
    actionLabel,
    disabled
}) => {
    return ( <div>ListingCard</div> );
}
 
export default ListingCard;