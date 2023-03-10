export default
{
    methods: {
        setReport(index, type)
        {
            this.$emit('onReportChange', index, type)
        }
    }
}