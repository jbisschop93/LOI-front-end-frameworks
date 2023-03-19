import BaseModel from '@/models/BaseModel'
export default class AssignedReportRecordedDamages extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.location = args.location ?? null;
        this.isNew = args.isNew ?? null;
        this.typeDamage = args.typeDamage ?? null;
        this.date = args.date ?? null;
        this.urgentActionRequired = args.urgentActionRequired ?? null;
        this.description = args.description ?? null;
    }
    
}