export const initialState = []

export function reducer(state,action){
    console.log(action.payload)
    console.log(state)
    switch (action.type) {
        case 'addNewTask':
         const newState = [...state, action.payload];
      return newState;

        case 'updateStatus':
            return state
        case 'deleteTask':
            return state
        default:
            return state;
    }
}