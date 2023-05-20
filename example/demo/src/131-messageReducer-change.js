export const chuShi2 = {
  selectedId: 0,
  message: {
    0: 'Hello, Taylor',
    1: 'Hello, Alice',
    2: 'Hello, Bob',
  }
}

export function messageReducerC(message,action){
  switch (action.type) { 
    case 'select': {
      return {
        ...message,
        selectedId: action.id,
      }
    }
    case 'textarea_input':{
      return {
        ...message,
        message: {
          ...message.message,
          [message.selectedId]:action.message,
        }
      }
    }
    case 'send':{
      return {
        ...message,
        message: {
          ...message.message,
          [message.selectedId]:''
        }
      }
    }
    default: {
      throw Error('未知 action：' + action.type);
    }
  }
}