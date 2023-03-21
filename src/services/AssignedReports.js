//Apis
import exampleJsonApi from '@/apis/exampleJsonApi';

//Models
import AssignedReport from '@/models/AssignedReport/AssignedReport'

export default
{
    API: new exampleJsonApi(),

    async getAll() {

        let returnObj

        //Await API CALL and return object containing models
        await this.API.get('reportList').then((object) => {
            returnObj = object.map((data) => {
                return new AssignedReport(data)
            })
        })
        return returnObj
    },

    async getById(id) {
        //Simulated "Get By Id" call by looping thru all items, returning the item which matches requested ID.
        let returnObj;

        await this.getAll().then((object) => {
            object = object.filter((data) => data.id == id)
            if(object.length == 1)
            {
                returnObj =  new AssignedReport(object[0])
            }
        })

        return returnObj
    }
}