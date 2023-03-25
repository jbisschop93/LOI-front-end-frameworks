export default class RealEstateApi
{
    constructor()
    {
        //Set Endpoint
        this.apiEndpoint = '//my-json-server.typicode.com/jbisschop93/LOI-front-end-frameworks/'
    }

    //Simulate a real API response by using async
    async call(action)
    {
        const response = await fetch(this.apiEndpoint+action).then(response => response.json())
        return response
    }
}