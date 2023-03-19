import BaseModel from '@/models/BaseModel'
export default class AssignedReportDeferredMaintenance extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.location = args.location ?? null; 
        this.typeMaintenance = args.typeMaintenance ?? null; 
        this.urgentActionRequired = args.urgentActionRequired ?? null; 
        this.costIndication = args.costIndication ?? null; 
    }
}