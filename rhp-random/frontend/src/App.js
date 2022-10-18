import axios from "axios";
import './App.css';
import { useState,useEffect } from 'react';
import Person2Icon from '@mui/icons-material/Person2';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import MailOutlineIcon from '@mui/icons-material/MailOutline';
import InstagramIcon from '@mui/icons-material/Instagram';
import CallIcon from '@mui/icons-material/Call';
import Main from "./pages/main";
import Create from "./pages/create";
function App() {
  return (
    <div>
      <Main/>
    </div>
  );
}

export default App;
