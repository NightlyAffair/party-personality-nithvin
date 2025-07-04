async function LoginRequest(username, password) {
        const response = await fetch(process.env.REACT_APP_LOGIN_API_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username: username,
                password: password
            })
        })


        if (!response.ok) {
            throw new Error(response.statusText);
        }

        const data = await response.json();



        //Save the token
        sessionStorage.setItem("token", data.token);
        return {response, data};

}

export default LoginRequest;