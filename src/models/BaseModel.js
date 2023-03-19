export default class BaseModel
{
    constructor(args)
    {
        this.id = args.id ?? null;
        this.createdAt = args.createdAt ?? null;
        this.updatedAt = args.updatedAt ?? null;
    }
}