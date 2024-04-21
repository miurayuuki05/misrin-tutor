import LoginClient from './client/Clientlogin';
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';

export default function Login() {

    async function handleLogin(username, password){
        "use server"
        const resp = await fetch('https://' + process.env.PROD_DOMAIN + '/api/auth/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        }).then(res => res.json()).then(
            (data) => {
                if(data.message){
                    return data
                }
                
                redirect('/dashboard')
            }
        )

        return resp
    }

    return(
        <LoginClient handleLogin={handleLogin} />
    )
}