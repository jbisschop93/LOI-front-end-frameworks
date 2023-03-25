//Apis
import RealEstateApi from '@/apis/RealEstateApi';

//Models
import AssignedReport from '@/models/AssignedReport/AssignedReport'

export default
{
    API: new RealEstateApi(),

    async getAll() {

        let returnObj

        //Await API CALL and return object containing models
        await this.API.call('reportList').then((object) => {
            returnObj = object.map((data) => {
                return new AssignedReport(data)
            })
        })
        return returnObj
    },

    async getById(id) {
        //Simulated "Get By Id" call by looping thru all items, returning the item which matches requested ID.
        let returnObj;

        returnObj = await this.API.call('reportList/'+id)

        return new AssignedReport(returnObj)
    },

    async userLogin(username, password) 
    {
        
    }
}