//Apis
import exampleJsonApi from '@/apis/exampleJsonApi';

//Models
import AssignedReport from '@/models/AssignedReport/AssignedReport'

export default
{
    API: new exampleJsonApi(),

    async getAll() {

        let returnObj;

        //Await API CALL and return object containing models
        await this.API.get('reportList').then((object) => {
            returnObj = object.map((data) => {
                return new AssignedReport(data)
            });
        })
        console.log(returnObj);
        return returnObj;
    }
}