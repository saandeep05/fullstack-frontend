import React, {useState} from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from "axios";

export default function AddUser() {
    let navigate = useNavigate();

    const [newUser, setNewUser] = useState({
        name:"",
        username:"",
        email:""
    });

    const {name, username, email} = newUser;

    const onInputChange = (e) => {
        setNewUser({...newUser, [e.target.name]:e.target.value});
        console.log(e.target.name, e.target.value);
        console.log(newUser);
    }

    const onSubmit = async () => {
        await axios.post("https://fullstack-backend-production-1a68.up.railway.app/user", newUser);
        navigate("/");
    }

  return (
    <div className="container">
        <div className="row p-4">
            <div className="col-md-6 offset-md-3 p-4 shadow">
                <h2 className='p-2'><u>Register User</u></h2>
                <div>
                    <label htmlFor='Name' className='form-label'>Name</label>
                    <input type="text" className = "form-control" name="name" value={name} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div>
                    <label htmlFor='username' className='form-label'>Username</label>
                    <input type="text" className = "form-control" name="username" value={username} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div>
                    <label htmlFor='Email' className='form-label'>Email</label>
                    <input type="text" className = "form-control" name="email" value={email} onChange={(e)=>onInputChange(e)}/>
                </div>
                <div className='p-4'>
                    <button type='submit' className='btn btn-outline-primary mx-2' onClick={onSubmit}>Submit</button>
                    <Link to="/" className='btn btn-outline-danger mx-2'>Cancel</Link>
                </div>
            </div>
        </div>
    </div>
  );
}
