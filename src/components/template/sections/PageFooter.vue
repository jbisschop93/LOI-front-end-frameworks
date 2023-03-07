<template>
    <footer>
        <div class="container">
            <div class="row">
                <div class="col-sm-3">
                    <img class="logo img-fluid" :src="require('@/assets/logo.png')"/> 
                </div>
                <div class="col-sm-8 text-right">
                    &copy; 2023 - Real Estate Care
                </div>
            </div>
        </div>
    </footer>
</template>
 
<script>
export default {
  name: 'PageFooter'
}
</script>

<style scoped>
    footer 
    {
        padding:10px;
        background-color:#FFFFFF;
    }

    footer img 
    {
        margin:10px;
    }
</style>