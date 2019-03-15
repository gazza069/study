import {appDispacher} from './appDispatcher.js'
import {ActionType} from './action.js'

// 今回利用するStoreを用意
export const nameStore = {name: '', onChange: null}
export const messageStore = {message: '', onChange: null}

// ActionとStoreを結びつける
appDispacher.register(payload => {
    if (payload.actionType === ActionType.CHANGE_NAME) {
        nameStore.name = payload.value
        nameStore.onChange()
    }
})
appDispacher.register(payload => {
    if (payload.actionType === ActionType.SUBMIT_NAME) {
        messageStore.message = nameStore.name + 'さん、こんにちわ'
        messageStore.onChange()
    }
})