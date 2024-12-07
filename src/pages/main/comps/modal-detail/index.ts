import {defineComponent, reactive, toRefs} from 'vue'
import {DetailModel} from '@/pages/main/types'
import {StateModel} from './types'

export default defineComponent({
    setup(){
        const state = reactive<StateModel>({
            visible: false,
            detail: null,
            title: null
        })

        const methods = {
            open(detail:DetailModel, name: string){
                state.visible = true
                state.detail = detail
                state.title = name
            }
        }

        return {
            ...toRefs(state),
            ...methods
        }
    }
})