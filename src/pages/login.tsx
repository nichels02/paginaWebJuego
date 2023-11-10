import { useNavigate } from "react-router-dom";

interface LoginProps {
    onLogin: (result: any) => void;
    isAuthenticated: boolean;
}

function Login({ onLogin, isAuthenticated }: LoginProps) {
    const navigate = useNavigate();

    const iniciarSesion = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const dataForm = new FormData(event.currentTarget);

        const rutaServicio =
            "https://www.wildcat.games/services/autorpgservices/login.php";

        const requestData = {
            usuario: dataForm.get("usuario"),
            clave: dataForm.get("clave"),
        };

        const response = await fetch(rutaServicio, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(requestData),
        });

        const result = await response.json();

        if (result.success) {
            alert("Bienvenido");
            onLogin(result);
            navigate("/escritorio", { replace: true });
        } else {
            alert(result.message);
        }
    };

    return (
        <section className="padded">
            <div className="container">
                <div className="row">
                    <div className="col-md-4"></div>
                    <div className="col-md-4">
                        <h2 className="text-center">Iniciar sesión</h2>
                        <form onSubmit={(event) => iniciarSesion(event)}>
                            <div className="mb-2">
                                <input
                                    type="text"
                                    className="form-control"
                                    required
                                    name="usuario"
                                    placeholder="Usuario"
                                />
                            </div>
                            <div className="mb-2">
                                <input
                                    type="password"
                                    className="form-control"
                                    required
                                    id="txtClave"
                                    name="clave"
                                    placeholder="Contraseña"
                                />
                                <input
                                    type="checkbox"
                                    className="form-check-input"
                                    onClick={(event) =>
                                        document
                                            .getElementById("txtClave")
                                            .setAttribute(
                                                "type",
                                                event.target.checked ? "text" : "password"
                                            )
                                    }
                                />
                                <label className="form-check-label">
                                    &nbsp;Mostrar contraseña
                                </label>
                            </div>
                            <div className="mb-2">
                                <button type="submit" className="btn btn-primary w-100">
                                    Iniciar sesión &gt;
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-4"></div>
                </div>
            </div>
        </section>
    );
}

export default Login;




/*
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

*/
