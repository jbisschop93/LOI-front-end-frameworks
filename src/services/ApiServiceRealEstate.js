//Apis
import RealEstateApi from '@/apis/RealEstateApi';

//Models
import AssignedReport from '@/models/AssignedReport/AssignedReport'
import UserModel from '@/models/Users/UserModel'

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
        const response = await this.API.call('users/'+username).then((object) => 
        {
            let user = new UserModel(object)
            if(user.userName == username)
            {
                if(user.tmpPassword == password)
                {
                    this.$store.commit('setUser', user)
                } else {
                    alert('Het door u ingevulde wachtwoord komt niet overeen bij deze gebruikersnaam!')
                }
            } else {
                console.log(user)
                alert('De door u ingevulde gebruikersnaam is niet bij ons bekend!')
            }
        });
        return response;
    }
}