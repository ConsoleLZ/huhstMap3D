import {defineComponent, reactive, toRefs} from 'vue'
import {userList} from './constants'

export default defineComponent({
    setup(){
        const state = reactive({
            visible: false
        })

        const methods = {
            open(){
                state.visible = true
            }
        }

        return {
            userList,
            ...toRefs(state),
            ...methods
        }
    }
})