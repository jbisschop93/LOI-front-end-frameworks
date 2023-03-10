export default class technicalInstallations
{
    constructor(args)
    {
        this.location = args.location ?? null;
        this.typeInstallation = args.typeInstallation ?? null;
        this.reportedFailures = args.reportedFailures ?? null;
        this.testProcedure = args.testProcedure ?? null;
        this.approved = args.approved ?? null;
        this.description = args.description ?? null;
    }
}