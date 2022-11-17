<template>
    <div class="render-inner-con">
        
    </div>   
</template>

<script lang="ts" setup>
    import { ref } from 'vue'
    let inputValue = ref('')
</script>
<style lang="scss" scoped>
.widget-inner-con{
    height: 100vh;
    div{
        display: flex;
        // height: 100vh;
        flex-wrap:wrap;
        padding-left: 20px;
        .widget-item{
        height: 30px;
        width: 90px;
        cursor: move;
        border: 1px dashed rgb(0, 157, 255);
        margin-right: 20px;
        margin-top: 20px;
        text-align: center;
        color: #aaaaaa;
        line-height: 30px;
        font-size: 14px;
        // background-color: #f1f2f3;
    }
    }
  
}
</style>