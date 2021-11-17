import React, {useState} from "react";
import LogIn from "./LogIn";
import SignUp from "./SignUp";
import { UserContext } from "./UserContext";

function MainScreen(){
    const [user, setUser] = useState<object>({
        name: "",
        email: "",
        password1: "",
        password2: ""
    })

    // const {name, email, password1, password2} = user;
    return(
       
        <div>
            <UserContext.Provider value={user}>
            <SignUp />
            </UserContext.Provider>
           
        </div>
    )
}
export default MainScreen;