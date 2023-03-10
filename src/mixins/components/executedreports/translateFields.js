export default
{
    methods: {
        translateTypeMaintenance(type)
        {
            switch(type)
            {
                case 'painting':
                    return 'Schilderwerk';

                case 'piping':
                    return 'leidingwerk';

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        translateTypeTechnicalInstallation(type)
        {
            switch(type)
            {
                case 'heating':
                    return 'Verwarming';

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        translateActionRequired(type)
        {
            switch(type)
            {
                case 'removeModification':
                    return 'Laten verwijderen';

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        translateExecutedBy(type)
        {
            switch(type)
            {
                case 'Tenant':
                    return 'Huurder';

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        translateTypeDamage(type)
        {
            switch(type)
            {
                case 'Calamity':
                    return 'Calamiteit';

                case 'Wear':
                    return 'Slijtage';

                case 'Other':
                    return 'Overige';

                //Unknown type, return original value
                default:
                    return type;
            }
        },
    },
}