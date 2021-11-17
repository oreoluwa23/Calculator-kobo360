import { ContextType, createContext, useState } from "react";
import { Context } from "vm";


interface ContextProps{
    name: "",
    email: "",
    password1: "",
    password2: ""
};

const [user, setUser] = useState<object>({
    
})

export const UserContext = createContext<ContextProps | null>(null);