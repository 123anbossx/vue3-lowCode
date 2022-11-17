<template>
    <div class="widget-inner-con">
        <draggable :list="dataList.widgetList" item-key="key" ghost-class="ghost" @end="onContainerDragEnd">
            <template #item="{ element }">
                <div class="widget-item">{{element.name}}</div>
            </template>
        </draggable>
        <div>{{data.dataSelect}}</div>
    </div>   
    
</template>

<script lang="ts" setup>
    import {widgetList } from './widgetsConfig'
    import draggable from 'vuedraggable'
    import { reactive, ref } from 'vue'
    let inputValue = ref('')
    let dataList = reactive({
        widgetList:widgetList
    })
    let data = reactive({
        dataSelect:{}
    })
   let  onContainerDragEnd = (origin:object)=>{
      let {_underlying_vm_} = origin.item
      data.dataSelect = _underlying_vm_
      console.log(data)
      
    }
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