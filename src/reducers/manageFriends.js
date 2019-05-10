export function manageFriends(state, action){
  switch(action.type){
  case 'ADD_FRIEND':
    return {friends: [...state.friends, action.friend]}
  case 'REMOVE_FRIEND':
    let index = state.friends.findIndex(x=> x.id ===action.id)
    let copiedArray = [...state.friends]
    copiedArray.splice(index,1)

    return {friends: copiedArray}
  default:
    return state
  }
}
