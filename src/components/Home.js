import React, { useEffect, useState } from 'react';
import axios from "axios";

export default function Home() {
    const [users, setUsers] = useState([]);

    useEffect(()=>{
        loadUsers();
    }, []);

    const loadUsers = async() => {
        const info = await axios.get("https://fullstack-backend-production-1a68.up.railway.app/user");
        console.log(info);
        setUsers(info.data);
    };

    const updateUser = async() => {}

    return (
        <div className="container">
            <div className="p-4">
                <table className="table table-hover border shadow">
                    <thead>
                        <tr>
                        <th scope="col">id</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            users.map((user, index) => (
                                <tr key={index}>
                                <th scope="row">{user.id}</th>
                                <td>{user.name}</td>
                                <td>{user.username}</td>
                                <td>{user.email}</td>
                                <td>
                                    <button type="button" className="btn btn-outline-secondary mx-2">Edit</button>
                                    <button type="button" className="btn btn-outline-danger mx-2">Delete</button>
                                </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
}
