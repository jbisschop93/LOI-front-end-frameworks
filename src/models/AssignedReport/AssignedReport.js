import BaseModel from '@/models/BaseModel'
import AssignedReportAddressModel from '@/models/assignedreport/AssignedReportAddress'
import AssignedReportDeferredMaintenanceModel from '@/models/assignedreport/AssignedReportDeferredMaintenance'
import AssignedReportModificationsModel from '@/models/assignedreport/AssignedReportModifications'
import AssignedReportRecordedDamagesModel from '@/models/assignedreport/AssignedReportRecordedDamages'
import AssignedReportTechnicalInstallationsModel from '@/models/assignedreport/AssignedReportTechnicalInstallations'

export default class AssignedReport extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.inspectedAt = args.inspectedAt ?? null;
        this.status = args.status ?? null;
        this.title = args.title ?? null;

        this.deferredMaintenance = new Array();
        args.deferredMaintenance.map((data) => {
            this.deferredMaintenance.push(new AssignedReportDeferredMaintenanceModel(data))
        });

        this.address = new AssignedReportAddressModel(args.address)

        this.modifications = new Array();
        args.modifications.map((data) => {
            this.modifications.push(new AssignedReportModificationsModel(data))
        });

        this.recordedDamages = new Array();
        args.recordedDamages.map((data) => {
            this.recordedDamages.push(new AssignedReportRecordedDamagesModel(data))
        });

        this.technicalInstallations = new Array();
        args.technicalInstallations.map((data) => {
            this.technicalInstallations.push(new AssignedReportTechnicalInstallationsModel(data))
        });
    }
}