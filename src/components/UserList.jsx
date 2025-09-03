import {useEffect, useState} from "react";
import UserDetail from "./UserDetail.jsx";

export default function UserList(){
    const [users, setUsers] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/users")
            .then(res => res.json())
            .then(data => setUsers(data))
    }, []);

    return (
        <div>
            <h4>User List</h4>
            {users.length > 0 ?


                        users.map((user) => (
                            <UserDetail user={user} key={user.id}/>
                        ) )

                :
                <p>No users found.</p>
            }
        </div>
    )
}