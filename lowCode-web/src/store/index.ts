import { defineStore } from "pinia";
export const wideListStore = defineStore('wideListArr',{
    state:()=>{
        return {
            wideList:[]
        }
    }
})