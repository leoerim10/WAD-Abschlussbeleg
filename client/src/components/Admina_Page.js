import { useHistory } from "react-router"
import MyButton from "./Button"
import Header2 from "./Header"
import MyModal from "./MyModal"
import MyTable from "./MyTable"
import MyMap from "./Map"
import { ModalHeader } from "@chakra-ui/modal"
import { Button } from "@chakra-ui/button"

var res ="all"
const setPrivacy = (privacy) =>{
  console.log("current privacy = " + res)
  if(privacy === "my"){
    console.log("setting type my")
    res = "my"
  }else{
    res = "all"
  }

  window.location.reload(false)

}

const Admina_Page = (props) =>{

  var type = "all"




 

    const  history = useHistory()
    function logout(){

      history.push("/")
  
    }
    const rowstyle = {
      display:"flex",
      flexDirection:"flex-end",
      justifyContent: "flex-end"

    };
    return(
        <div>
    <div>
        <Header2 title="Welcome Admina"
        
        logoutbutton = {<MyButton />}
        />  
       
    </div>
    <div className="ButtonsRow" style={rowstyle}>
            <MyButton name="Log out" color= "white" bgColor="red.400" hoverColor= "red.900" doClickAction ={logout}/>
    </div>
    
    <div className="ButtonsRow" style={rowstyle}>
    <MyModal title ="Add new contact" />
    <Button colorScheme="blue" mr={3} onClick={() => { setPrivacy("all") }}>
              Show All Contacts
            </Button>
            <Button colorScheme="blue" mr={3} onClick={() => { setPrivacy("my") }}>
              Show My Contacts
            </Button>
    </div>
    <div className="tableAndMap">
      <div className="myTable">
        
        <MyTable from="admina" type={res}/>
      </div>
      <div className="thisMap">
          <MyMap />
      
      </div>

    </div>


    </div>
    
    )
    
    }

    export default Admina_Page