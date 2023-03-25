import BaseModel from '@/models/BaseModel'
export default class AssignedReport extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.userName = args.userName ?? null
        this.tmpPassword = args.tmpPassword ?? null
        this.email = args.email ?? null
        this.tmp2FA = args.tmp2FA ?? null
    }
}