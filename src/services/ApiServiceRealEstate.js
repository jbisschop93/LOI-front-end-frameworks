//Apis
import RealEstateApi from '@/apis/RealEstateApi';

//Models
import AssignedReport from '@/models/assignedreport/AssignedReport'
import UserModel from '@/models/users/UserModel'

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

    async verifyCredentials(username, password) 
    {
        const response = await this.API.call('users/'+username).then((object) => 
        {
            let user = new UserModel(object)
            if(user.userName == username)
            {
                if(user.tmpPassword == password)
                {
                    return user
                } else {
                    return false
                }
            } else {
                return false
            }
        });
        return response;
    },

    async verifyLogin(username, code)
    {
        const response = await this.API.call('users/'+username).then((object) => 
        {
            let user = new UserModel(object)
            if(user.userName == username)
            {
                if(user.tmp2FA == code)
                {
                    return user
                } else {
                    return false
                }
            } else {
                return false
            }
        });
        return response;
    }
}