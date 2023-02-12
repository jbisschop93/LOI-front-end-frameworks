<template>
  <div class="container">
    <h1>{{ msg }}</h1>
    <div class="row">
      <div class="col-6">
        <p>
          {{ rule1 }}
        </p>
        <p>
          {{ rule2 }}
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomePage',
  props: {
    msg: String,
    rule1: String,
    rule2: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container, .container h1
{
  color:#FFFFFF;
}
</style>
