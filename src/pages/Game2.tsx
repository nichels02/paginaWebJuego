import { Unity, useUnityContext } from "react-unity-webgl";

function Game2(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/game2.loader.js",
        dataUrl: "/game2.data",
        frameworkUrl: "/game2.framework.js",
        codeUrl: "/game2.wasm",
    });

    function handleClickSpawn()
    {
        sendMessage("controlador", "ReloadScene")
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Memoria</h1>
                <Unity unityProvider={unityProvider} className="centered-unity2" />
                <button onClick={handleClickSpawn}>Reload</button>
            </div>
        </div>
    );
    }
export default Game2