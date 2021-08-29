import { useHistory } from "react-router"
import MyButton from "./Button"
import Header2 from "./Header"
import MyModal from "./Modal"
import ContactForm from "./ConactForm"
import MyTable from "./MyTable"

const Page2 = () =>{

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
        <Header2 title="Welcome User"/>  
    </div>
    <div className="ButtonsRow" style={rowstyle}>
            <MyButton name="Log out" color= "white" bgColor="red.400" hoverColor= "blue.500" doClickAction ={logout}/>
    </div>
    
    <div>
    <MyModal title = "Add new contact" modalContent={<ContactForm />} />
    <MyModal title = "Show All Contacts" modalContent={<ContactForm />} />
    <MyModal title = "Show My Contact"/>
    </div>
    <div className="tableAndMap">
    <div>
      <MyTable />
    </div>
    <div className="Map">
      <h2>Map comes here</h2>
    </div>

    </div>


    </div>
    
    )
    
    }

    export default Page2