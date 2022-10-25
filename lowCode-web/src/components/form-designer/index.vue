<template>
    <div class="form-set-all-con">
        <div class="widget-out-con">
            <WidgetPanel/> 
        </div>
        <div>

        </div>
        <div>

        </div>
    </div>

   
</template>

<script lang="ts" setup>
import WidgetPanel from  './widget-panel/index.vue'
</script>
<style lang="scss" scoped>
    .form-set-all-con{
        display: flex;
        height: 100vh;
        width: 100%;
        .widget-out-con{
            width: 300px;
        }
        
    }
</style>