import { Unity, useUnityContext } from "react-unity-webgl";

function Game(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/game.loader.js",
        dataUrl: "/game.data.unityweb",
        frameworkUrl: "/game.framework.js.unityweb",
        codeUrl: "/game.wasm.unityweb",
    });

    function handleClickSpawn()
    {
        sendMessage("LaConexion", "crear_mensaje")
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">lluvia acida</h1>
                <Unity unityProvider={unityProvider} className="centered-unity" />
                <button onClick={handleClickSpawn}>Spawn Enemies</button>
            </div>
        </div>
    );
    }
export default Game