import './App.css'
import { Unity, useUnityContext } from "react-unity-webgl";

function App() {
    const { unityProvider } = useUnityContext({
        loaderUrl: "/game.loader.js",
        dataUrl: "/game.data.unityweb",
        frameworkUrl: "/game.framework.js.unityweb",
        codeUrl: "/game.wasm.unityweb",
    });

    return (
        <div className="centered-container">
            <div className="centered-content">
                <h1 className="centered-title">lluvia acida</h1>
                    <Unity unityProvider={unityProvider} className="centered-unity" />
            </div>
        </div>
    );
}


export default App
