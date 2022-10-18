import { useContext, useState } from "react";
import "./create.css";
import axios from "axios";


export default function NewMovie() {
  const [movie, setMovie] = useState(null);
  const [dob,setdob]=useState(null);
  const [address,setaddress]=useState(null);
  const [contact, setcontact] = useState(null);
  const register = async () => {
    try {
      const res = await axios.post("http://localhost:8800/api/auth/register",movie);
      console.log(res.status);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }

  };
  const handleChange = (e) => {
    const value = e.target.value;
    setMovie({ ...movie, [e.target.name]: value });
  };
  const handleChangedob = (e) => {
    const value = e.target.value;
    setdob({ ...dob, [e.target.name]: value });
  };
  const handleChangecon = (e) => {
    const value = e.target.value;
    setcontact({ ...contact, [e.target.name]: value });
  };
  const handleChangeadd = (e) => {
    const value = e.target.value;
    setaddress({ ...address, [e.target.name]: value });
  };


  const handleSubmit = (e) => {
    setMovie({...movie,dob,address,contact});
    register();
    e.preventDefault();
  };
  console.log(movie)

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Movie</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Name</label>
          <input
            type="text"
            placeholder="John Wick"
            name="username"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>email</label>
          <input
            type="text"
            placeholder="email"
            name="email"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Password</label>
          <input
            type="text"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>profilePic</label>
          <input
            type="text"
            placeholder="link"
            name="profilePic"
            onChange={handleChange}
          />
        </div>
        <div className="addProductItem">
          <label>Country</label>
          <input
            type="text"
            placeholder="country"
            name="country"
            onChange={handleChangeadd}
          />
        </div>
        <div className="addProductItem">
          <label>State</label>
          <input
            type="text"
            placeholder="state"
            name="state"
            onChange={handleChangeadd}
          />
        </div>
        <div className="addProductItem">
          <label>District</label>
          <input
            type="text"
            placeholder="District"
            name="district"
            onChange={handleChangeadd}
          />
        </div>
        <div className="addProductItem">
          <label>Dob-Date</label>
          <input
            type="text"
            placeholder="limit"
            name="date"
            onChange={handleChangedob}
          />
        </div>
        <div className="addProductItem">
          <label>Dob-month</label>
          <input
            type="text"
            placeholder="month of birth"
            name="month"
            onChange={handleChangedob}
          />
        </div>
        <div className="addProductItem">
          <label>Dob-Year</label>
          <input
            type="text"
            placeholder="Birth year"
            name="year"
            onChange={handleChangedob}
          />
          
        </div>
        <div className="addProductItem">
          <label>Phone</label>
          <input
            type="text"
            placeholder="phone"
            name="phone"
            onChange={handleChangecon}
          />
        </div>
        <div className="addProductItem">
          <label>twitter</label>
          <input
            type="text"
            placeholder="month of birth"
            name="twitter"
            onChange={handleChangecon}
          />
        </div>
        <div className="addProductItem">
          <label>instagram</label>
          <input
            type="text"
            placeholder="instagram"
            name="instagram"
            onChange={handleChangecon}
          />
          
        </div>
        <div className="addProductItem">
          <label>Gender</label>
          <select name="gender" id="isSeries" onChange={handleChange}>
            <option value={"not to specify"}>click me</option>
            <option value="male">male</option>
            <option value="female">female</option>
            <option value="trans-gender">TransGender</option>
          </select>
        </div>
          <button className="addProductButton" onClick={handleSubmit}>
            Create
          </button>
      </form>
    </div>
  );
}