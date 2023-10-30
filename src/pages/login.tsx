import { Unity, useUnityContext } from "react-unity-webgl";

function Login(){
    const { unityProvider} = useUnityContext({
        loaderUrl: "/login.loader.js",
        dataUrl: "/login.data.unityweb",
        frameworkUrl: "/login.framework.js.unityweb",
        codeUrl: "/login.wasm.unityweb",
    });



    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">login/register</h1>
                <Unity unityProvider={unityProvider} className="centered-unity4-login" />
            </div>
        </div>
    );
    }
export default Login