import { reactive } from 'vue'

let apiHost = ''
let liveHost = ''
if (process.env.NODE_ENV === 'development') {
	// apiHost = 'http://localhost:3001'
	liveHost = 'http://localhost:3000'
}
if (process.env.NODE_ENV === 'production') {
	// TODO
}

export function useHost() {
  const state = reactive({
    apiHost,
	liveHost
  })
  
  return {
	  apiHost: state.apiHost,
	  liveHost: state.liveHost
  }
}