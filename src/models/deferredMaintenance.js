export default class deferredMaintenance
{
    constructor(args)
    {
        this.location = args.location ?? null; 
        this.typeMaintenance = args.typeMaintenance ?? null; 
        this.urgentActionRequired = args.urgentActionRequired ?? null; 
        this.costIndication = args.costIndication ?? null; 
    }
}