import BaseModel from '@/models/BaseModel'
export default class AssignedReportModifications extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.isNew = args.isNew ?? null;
        this.previousDocumentation = args.previousDocumentation ?? null;
        this.location = args.location ?? null;
        this.executedBy = args.executedBy ?? null;
        this.description = args.description ?? null;
        this.actionRequired = args.actionRequired ?? null;
        this.extraInformation = args.extraInformation ?? null;

    }
}