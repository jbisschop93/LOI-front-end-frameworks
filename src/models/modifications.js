export default class  modifications 
{
    constructor(args)
    {
        this.isNew = args.isNew ?? null;
        this.previousDocumentation = args.previousDocumentation ?? null;
        this.location = args.location ?? null;
        this.executedBy = args.executedBy ?? null;
        this.description = args.description ?? null;
        this.actionRequired = args.actionRequired ?? null;
        this.extraInformation = args.extraInformation ?? null;

    }
}