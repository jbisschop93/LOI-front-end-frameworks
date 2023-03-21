import BaseModel from '@/models/BaseModel'
export default class AssignedReportAddress extends BaseModel
{
    constructor(args)
    {
        //Call parent class
        super(args);
        
        //Add model fields
        this.houseNumber = args.houseNumber ?? null
        this.houseNumberAddon = args.houseNumberAddon ?? null
        this.street = args.street ?? null
        this.place = args.place ?? null
        this.zipCode = args.zipCode ?? null
    }
}