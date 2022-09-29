import {useState} from "react";
import style from "./style.module.css"


export function ApiCORSPage() {

    const [state, setState] = useState({
        isLoading: true,
        viewResponse: false
    });

    const apiRequest = new Request(
        'https://srv1.1cam.ru/api/StopTranslation/SessionID=123&URL=aaaa.aa',
        {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'content-type': 'application/x-www-form-urlencoded'
            }
        }
    )

    const Post = () => {
        setState({...state, viewResponse: true});
        console.log(fetch(apiRequest).then(response => {
                setState({
                    viewResponse: true,
                    isLoading: false,
                })
                return response;
            })
        )
    }

    return (
        <div className={style.wrapper}>
            <div className={style.apiButton} onClick={() => Post()}>Отправить запрос</div>
            {state.viewResponse &&
                <div>
                    {state.isLoading ?
                        <p><em>Loading...</em></p>
                        : <p>Можно проверять результат</p>}
                </div>
            }
        </div>
    )
}