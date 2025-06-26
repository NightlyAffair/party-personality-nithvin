function LoginRequest(username, password) {

    return async (username, password) => {

        const response = await fetch("http://localhost:8080/login", {
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
        return response;
    };



}