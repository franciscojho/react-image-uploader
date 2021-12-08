export const uploaderInitialState = {
    isLoading: false,
    isError: false,
    url: ''
};

export const uploaderReducer = (state, action) => {
    console.log('reducer', action)
    switch (action.type) {
        case 'UPLOADING':
            return {
                ...state,
                isLoading: true,
                isError: false,
                url: ''
            };
        case 'UPLOADED':
            return {
                ...state,
                isLoading: false,
                isError: false,
                url: action.payload
            }
        case 'ON_ERROR':
            return {
                ...state,
                isLoading: false,
                isError: true,
            }            
        
      default:
        return state;
    }
  };