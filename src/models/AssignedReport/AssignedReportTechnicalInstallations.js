import BaseModel from '@/models/BaseModel'
export default class AssignedReportTechnicalInstallations extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.location = args.location ?? null;
        this.typeInstallation = args.typeInstallation ?? null;
        this.reportedFailures = args.reportedFailures ?? null;
        this.testProcedure = args.testProcedure ?? null;
        this.approved = args.approved ?? null;
        this.description = args.description ?? null;
    }
}