async function SignupRequest(username, email, password) {
    const response = await fetch(process.env.REACT_APP_REGISTER_API_URL,
        {method: "PUT",
            headers: {
            "Content-Type": "application/json"
            },
            body: JSON.stringify({
                username,
                email,
                password,
            })
        })

    if (!response.ok) {
        throw new Error(response.statusText);
    }

    return response;
}

export default SignupRequest;