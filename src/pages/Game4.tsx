import { Unity, useUnityContext } from "react-unity-webgl";

function Game4(){
    const { unityProvider,sendMessage } = useUnityContext({
        loaderUrl: "/game4.loader.js",
        dataUrl: "/game4.data.unityweb",
        frameworkUrl: "/game4.framework.js.unityweb",
        codeUrl: "/game4.wasm.unityweb",
    });

    function handleClickSpawn()
    {
        sendMessage("elReinicio", "ReiniciarJuego")
    }

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">Dino-Run</h1>
                <Unity unityProvider={unityProvider} className="centered-unity4" />
                <button onClick={handleClickSpawn}>Reiniciar</button>
            </div>
        </div>
    );
    }
export default Game4