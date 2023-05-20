export const chuShi = {
  selectedId: 0,
  message: '你好',
}

export function messageReducer(message,action){
  switch (action.type) { 
    case 'select': {
      return {
        ...message,
        selectedId: action.id,
        message: '',
      }
    }
    case 'textarea_input':{
      return {
        ...message,
        message:action.message
      }
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}