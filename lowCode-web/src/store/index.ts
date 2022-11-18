import { defineStore } from "pinia";
import {wideListObj}from './storeFile/file'
export const wideListStore = defineStore('wideListArr',{
    state:()=>{
        return wideListObj
    }
})