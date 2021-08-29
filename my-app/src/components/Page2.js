import { useHistory } from "react-router"
import MyButton from "./Button"
import Header2 from "./Header"

const Page2 = () =>{

    const  history = useHistory()
    function logout(){

      history.push("/")
  
    }
    return(
        <div>
    <div>
        <MyButton name="Log out" doClickAction ={logout}/>
        <Header2 title="Welcome User"/>
    </div>
    
    <div>
    <MyButton name="Add contacts" />
    </div>
      	
    <div>
      contact Information
      Contact 1
      Contact 2
      Contact 3
    </div>

    </div>
    
    )
    
    }

    export default Page2