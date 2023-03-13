import {GoogleLogout} from 'react-google-login';

const clientId = "539129427804-07sklsooannkkmcipaq1jeemipodm8ff.apps.googleusercontent.com";

function Logout () {

    const onSuccess = (res) => {
        console.log("Sucesso ao logar! Current user: ", res.profileObj);
    }


    return (
        <div id='signOutButton'>
            <GoogleLogout 
                client_id={clientId}
                buttonText="Logout"
                onLogoutSuccess={onSuccess}
            />
        </div>
    )
}

export default Logout;