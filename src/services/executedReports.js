//Apis
import exampleJsonApi from '@/apis/exampleJsonApi';

//Models
import deferredMaintenanceModel from '@/models/deferredMaintenance'
import modificationsModel from '@/models/modifications'
import recordedDamagesModel from '@/models/recordedDamages'
import technicalInstallationsModel from '@/models/technicalInstallations'

export default
{
    API: new exampleJsonApi(),

    async getAll() {

        let returnObj;

        //Await API CALL and return object containing models
        await this.API.get('executedReports').then((object) => {
            returnObj = {
                'deferredMaintenance': object.deferredMaintenance.map((data) => {
                    return new deferredMaintenanceModel(data)
                }),
                'modifications': object.modifications.map((data) => {
                    return new modificationsModel(data)
                }),
                'recordedDamages': object.recordedDamages.map((data) => {
                    return new recordedDamagesModel(data)
                }),
                'technicalInstallations': object.technicalInstallations.map((data) => {
                    return new technicalInstallationsModel(data)
                })
            }
        })
        return returnObj;
    }
}