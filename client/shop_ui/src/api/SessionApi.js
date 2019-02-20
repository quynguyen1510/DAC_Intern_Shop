class SessionApi {
    static login(credentials){
        const request = new Request("localhost:3000/auth/login", {
            method: 'POST',
            headers: new Headers({
                'Content-Type': 'application/json'
            }),
            body: JSON.stringify(credentials)
        });

        return fetch(request).then(response => {
            return response.json;
        }).catch(err => {
            return err;
        });
    }
}

export default SessionApi;