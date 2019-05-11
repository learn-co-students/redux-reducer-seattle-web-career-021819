export function manageFriends(state, action){

  switch(action.type) {

    case 'ADD_FRIEND':
      let newFriend = {
        name: action.friend.name,
        hometown: action.friend.hometown,
        id: action.friend.id
      }
      return {friends: [...state.friends, newFriend]}

    case 'REMOVE_FRIEND':
      let newFriends = state.friends.filter(friend => {
        return friend.id !== action.id
      })
      return {friends: newFriends}
    default:
      return state;
  }

}
