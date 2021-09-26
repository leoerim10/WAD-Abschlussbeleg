import { useHistory } from "react-router"
import MyButton from "./Button"
import Header2 from "./Header"
import MyModal from "./MyModal"
import MyTable from "./MyTable"
import MyMap from "./Map"
import { Button } from "@chakra-ui/button"
import { useState } from "react"
import { useEffect } from "react"
import Axios from "axios"


const Normalo_Page = () =>{

 
  const [loginType, setLoginType] = useState("my")
  const [contactList, setContactList] = useState([])
  const [contactList2, setContactList2] = useState([])



  useEffect (() =>{
    Axios.get("http://localhost:3001/read").then((Response) => {
     const res = Response.data
      setContactList(Response.data)
      setContactList2((Response.data.filter((obj => obj.owner === "normalo"))))
    })
    }, [])


  const showAllContacts = () =>{
    
    setLoginType("all")
    setContactList2(contactList.filter((obj =>! (obj.owner === "admina" && obj.privacy === "private"))))
  
   
    
  }

  const showMyContacts = () =>{
    
    setLoginType("my")
    setContactList2((contactList.filter((obj => obj.owner === "normalo"))))

   // setMyPrivateContactList( (contactList.filter((obj => obj.owner === "admina" && obj.privacy === "private"))))
  
  }





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
        <Header2 title="Welcome Normalo"
        
        logoutbutton = {<MyButton />}
        />  
       
    </div>
    <div className="ButtonsRow" style={rowstyle}>
            <MyButton name="Log out" color= "white" bgColor="red.400" hoverColor= "red.900" doClickAction ={logout}/>
    </div>
    
    <div className="ButtonsRow" style={rowstyle}>
    <MyModal title ="Add new contact" user="normalo" />
    <Button colorScheme="blue" mr={3} onClick={showAllContacts}  >
              Show All Contacts
            </Button>
    <Button colorScheme="blue" mr={3} onClick={showMyContacts}  >
        Show My Contacts
    </Button>
    </div>

        {<div>
          {loginType === "all"?(
            <div className="tableAndMap">
              <div className="myTable">
                <MyTable type="all" user="normalo" data={contactList2}/>
                </div>
                <div className="thisMap">
                  <MyMap data={contactList2} />
      
                </div>

            </div>
          ): (
            <div className="tableAndMap">
            <div className="myTable">
              <MyTable type="my" user="normalo" data={contactList2}/>
              </div>
              <div className="thisMap">
                <MyMap data={contactList2} />
    
              </div>

          </div>
          )
          }
        </div>}
      </div>


    
    )
    
    }

    export default Normalo_Page