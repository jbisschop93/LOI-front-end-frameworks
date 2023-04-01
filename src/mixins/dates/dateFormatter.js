export default 
{
    methods: {
        $_dateFormatter_formatDate(date)
        {
            if(date != undefined)
            {
                if(date.length >= 8)
                {
                    let d = date.split('-');
                    if(d.length > 2)
                    {
                        return d[2]+'-'+d[1]+'-'+d[0];
                    }
                }
            } 
            return date; //Invalid format, return original value
        }
    }
}