export default 
{
    methods: {
        formatDate(date)
        {
            let d = date.split('-');
            if(d.length > 2)
            {
                return d[2]+'-'+d[1]+'-'+d[0];
            } else return date; //Invalid format, return original value
        }
    }
}