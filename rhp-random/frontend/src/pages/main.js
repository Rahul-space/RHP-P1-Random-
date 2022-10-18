import axios from "axios";
import './main.css';
import { useState,useEffect } from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';

function Main() {
  const [user, setusers] = useState({});
  const [answer,setanswer]=useState("Hover to reveal");
  const [query,setquery]=useState("....");
  const [trigger,settrigger]=useState(1);


  const fetchusers = async () => {
    try {
      const res = await axios.get("https://rhp-random.herokuapp.com/api/users/random");
      setusers(res.data);
      console.log(res.status);
      setquery("Name");
      console.log(res.data.username)
      setanswer(res.data.username);
    } catch (err) {
      console.log(err);
    }

  };
  useEffect(() => {

    
    fetchusers();
    console.log(user)
    console.log(trigger);
    

  }, [trigger])
  return (
    <div className="App" >
      
        <div className="container" style={{ backgroundImage:`url(${user.profilePic})`,backgroundRepeat:"no-repeat" }}>
            <div className="header"> <a className="name">R&R LLC</a></div><div className="navbar">
                <a class="btn" id="newuser"><div class="text">Search</div></a>
                <a class="btn" id="refresh" onClick={()=>{settrigger(trigger+1)}}><div class="text">Refresh {trigger}</div></a>
                <a class="btn" ><div class="text">New User</div></a>
            </div>
            <div className="card">
                <img className="image"  src={user.profilePic}/>
                <div className="icons">
                    <Person2Icon className="icon" onMouseEnter={()=>{setanswer(user.username);setquery("Name")}}/>
                    <MailOutlineIcon className="icon" onMouseEnter={()=>{setquery("Email");setanswer(user.email)}}/>
                    <MyLocationIcon className="icon" onMouseEnter={()=>{setquery("Location");setanswer(user.address.country+","+user.address.state+","+user.address.district)}}/>
                    <CallIcon className="icon" onMouseEnter={()=>{setquery("Contact");setanswer(user.contact.phone)}}/>
                    <InstagramIcon className="icon" onMouseEnter={()=>{setquery("Instagram");setanswer(user.contact.instagram)}}/>
                </div>
                <div className="value">{query}</div>
                <div className="answer">{answer}</div>
            </div>
        </div>
    </div>
  );
}

export default Main;
