import { HiUser } from "react-icons/hi";
import css from "./UserMenu.module.css";

interface UserMenuProms {
    name: string;
}


export default function UserMenu ({name}: UserMenuProms) {
    return <div><HiUser className={css.icon} size={24}/>{name}</div>
}