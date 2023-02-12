<template>
    <header>
        <div class="container">
            <div class="row">
                <div class="col-4">
                    <img class="logo img-fluid" src="../../../assets/logo.png"/> 
                </div>
            </div>
        </div>
    </header>
</template>

<script>
export default {
  name: 'PageHeader'
}
</script>

<style scoped>
    header 
    {
        background-color:#FFFFFF;
        background-image:url('../../../assets/headerbg.png');
        background-repeat:no-repeat;
        background-position: top right;
        background-size:auto;
    }

    .logo 
    {
        padding-top:15px;
        padding-bottom:15px;
    }
</style>