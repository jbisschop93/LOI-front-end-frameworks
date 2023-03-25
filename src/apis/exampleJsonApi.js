import dummyData from '@/../db.json'

export default class exampleJsonApi
{
    constructor()
    {
        //Imported JSON file
        this.data = dummyData;
    }

    //Simulate a real API response by using async
    async get(call)
    {
        return typeof(this.data[call]) != undefined ? this.data[call] : false;
    }
}