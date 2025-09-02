import css from "./Alert.module.css";

export default function Alert () 
    { return
        <p className={css.alert}>This is alert text</p>
}



interface Book{
    id: string;
    name: string;
}


const books: Book[]= [
   {id: "id-1", name:"JS for beginners" },
   {id:"id-2", name: "React basics"},
   { id: "id-3", name: "React Query overview"},
];