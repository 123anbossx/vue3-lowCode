<template>
    <div class="widget-inner-con">
        <draggable :list="dataList.widgetList" item-key="key" ghost-class="ghost" @end="onContainerDragEnd">
            <template #item="{ element }">
                <div class="widget-item">{{element.name}}</div>
            </template>
        </draggable>
        <div v-for="item of dataSelect.wideStoreList" :key="item.key">{{item}}</div>
    </div>   
    
</template>

<script lang="ts" setup>
    import {widgetList } from './widgetsConfig'
    import { storeToRefs } from 'pinia'
    import {wideListStore} from '@/store'
    import draggable from 'vuedraggable'
    import { reactive, ref } from 'vue'
    const wideStore = wideListStore()
    let inputValue = ref('')
    let dataList = reactive({
        widgetList:widgetList
    })
    let dataSelect:any = reactive({
        wideStoreList:[]
    })
   let  onContainerDragEnd = (origin:object)=>{
      let {_underlying_vm_} = origin.item
      wideStore.wideSelectList.push(_underlying_vm_)
      const {wideSelectList} = storeToRefs(wideStore)
      dataSelect.wideStoreList= wideSelectList
      console.log(dataSelect.wideStoreList) 
     
      
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