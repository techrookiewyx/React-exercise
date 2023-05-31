export function createConnectionTWS({ url, room }) {
  // A real implementation would actually connect to the server
  if (typeof url !== 'string') {
    throw Error('Expected serverUrl to be a string. Received: ' + url);
  }
  if (typeof room !== 'string') {
    throw Error('Expected roomId to be a string. Received: ' + room);
  }
  let intervalId;
  let messageCallback;
  return {
    connect() {
      console.log('✅ Connecting to "' + room + '" room at ' + url + '...');
      clearInterval(intervalId);
      intervalId = setInterval(() => {
        if (messageCallback) {
          if (Math.random() > 0.5) {
            messageCallback('hey')
          } else {
            messageCallback('lol');
          }
        }
      }, 3000);
    },
    disconnect() {
      clearInterval(intervalId);
      messageCallback = null;
      console.log('❌ Disconnected from "' + room + '" room at ' + url + '');
    },
    on(event, callback) {
      if (messageCallback) {
        throw Error('Cannot add the handler twice.');
      }
      if (event !== 'message') {
        throw Error('Only "message" event is supported.');
      }
      messageCallback = callback;
    },
  };
}