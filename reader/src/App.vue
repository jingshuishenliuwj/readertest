<template>
  <div id="app">
    
    <router-view/>
  </div>
</template>
<script>
export default {
  name:'App'
}
document.addEventListener('DOMContentLoaded',()=>{
  const html=document.querySelector('html')
  let fontSize=window.innerWidth/10
  fontSize=fontSize>50?50:fontSize
  html.style.fontSize=window.innerWidth/10+'px'
})
</script>
<style>

</style>
