import {sha256} from "js-sha256";

export default function Avatar({name, email}){


    function getGravatarURL( email ) {
        // Trim leading and trailing whitespace from
        // an email address and force all characters
        // to lower case
        const address = String( email ).trim().toLowerCase();

        // Create a SHA256 hash of the final string
        const hash = sha256( address );

        // Grab the actual image URL
        return `https://gravatar.com/avatar/${ hash }`;
    }

    return (
        <div>
            <img src={getGravatarURL(email)} alt={name} style={{borderRadius : "50%", marginTop: "20px"}}/>
        </div>
    )
}