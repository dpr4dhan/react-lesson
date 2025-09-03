import Avatar from "./Avatar.jsx";

export default function UserDetail({user}){
    return (
        <div style={{border: "1px", borderStyle: "solid", borderRadius: "15px", marginTop: "15px"}}>
            <Avatar name={user.name} email={user.email} key={user.id}/>
            <p>Name: {user.name}</p>
            <p>Username: {user.username}</p>
            <p>Email: {user.email}</p>
            <p>Phone: {user.phone}</p>
        </div>
    )
}