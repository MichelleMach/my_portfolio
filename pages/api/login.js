import { GoogleLogin } from 'react-google-login';

const clientId = "539129427804-07sklsooannkkmcipaq1jeemipodm8ff.apps.googleusercontent.com";

function Login() {

    const onSuccess = (res) => {
        console.log("Sucesso ao logar! Current user: ", res.profileObj);
    }

    const onFailure = (res) => {
        console.log("Falha no Login! res: ", res);
    }

    return (
        <div id='signInButton'>
            <GoogleLogin
                client_id={clientId}
                buttonText="Login"
                onSuccess={onSuccess}
                onFailure={onFailure}
                cookiePolicy={'single_host_origin'}
                isSignedIn={true}
            />
        </div>
    )
}

export default Login

