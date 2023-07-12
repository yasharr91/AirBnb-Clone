'use client'
import { block } from "million/react-server";
interface MenuItemProps {
    onClick:()=> void;
    label:string
}

const MenuItem:React.FC<MenuItemProps> = ({
    onClick,
    label
}) => {
    return ( <div
    onClick={onClick}
                className="
                px-4
                py-3
                hover:bg-neutral-100
                transition
                font-semibold
                ">
                    {label}
                </div> );
}
const MainBlock = block(MenuItem);
export default MainBlock;