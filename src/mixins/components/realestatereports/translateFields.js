export default
{
    methods: {
        $_translateFields_translateTypeMaintenance(type)
        {
            switch(type)
            {
                case 'painting':
                    return 'schilderwerk';

                case 'piping':
                    return 'leidingwerk';

            case 'Woodrot':
                return 'houtrot'

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        $_translateFields_translateTypeTechnicalInstallation(type)
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

        $_translateFields_translateActionRequired(type)
        {
            switch(type)
            {
                case 'removeModification':
                    return 'Laten verwijderen';

                case 'accept':
                    return 'Geen (geacepteerd)'

                //Unknown type, return original value
                default:
                    return type;
            }
        },

        $_translateFields_translateExecutedBy(type)
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

        $_translateFields_translateTypeDamage(type)
        {
            switch(type)
            {
                case 'regularUse':
                    return 'Normaal gebruik'

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