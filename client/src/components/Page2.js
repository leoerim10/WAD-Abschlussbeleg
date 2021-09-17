import { useHistory } from "react-router"
import MyButton from "./Button"
import Header2 from "./Header"
import MyModal from "./Modal"
import ContactForm from "./ConactForm"
import MyTable from "./MyTable"
import MyMap from "./Map"

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
        <Header2 title="Welcome User"
        logoutbutton = {<MyButton />}
        />  
    </div>
    <div className="ButtonsRow" style={rowstyle}>
            <MyButton name="Log out" color= "white" bgColor="red.400" hoverColor= "red.900" doClickAction ={logout}/>
    </div>
    

    <div className="ButtonsRow" style={rowstyle}>
    <MyModal title = "Add new contact" modalContent={<ContactForm />} />
    <MyButton name = "Show all contacts"/>
    <MyButton name = "Show my contacts"/>
    </div>
    <div className="tableAndMap">
      <div className="myTable">
        <MyTable />
      </div>
      <div className="thisMap">
          <MyMap />
      
      </div>

    </div>


    </div>
    
    )
    
    }

    export default Page2