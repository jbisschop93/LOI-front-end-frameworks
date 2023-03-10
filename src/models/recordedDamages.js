export default class recordedDamages 
{
    constructor(args)
    {
        this.location = args.location ?? null;
        this.isNew = args.isNew ?? null;
        this.typeDamage = args.typeDamage ?? null;
        this.date = args.date ?? null;
        this.urgentActionRequired = args.urgentActionRequired ?? null;
        this.description = args.description ?? null;
    }
    
}