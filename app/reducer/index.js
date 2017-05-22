import uuid from 'uuid';

module.exports = (state, action) => {
  switch (action.type) {
    case 'ADD_TODO':
    //  ...state.todos =  this array will contain all the old todos, plus the new ones.
      var newTodos = [
        ...state.todos,
        {
          text: action.text,
          id: uuid.v4()
        }
      ]
      return {   // returnign an object with todos: set to the newTodos variable.
          todos: newTodos
      };
      case 'DELETE_TODO':
      //  ...state.todos =  this array will contain all the old todos, plus the new ones.
        var newTodos = state.todos.filter((todo)=> {
          if (todo.id == action.id) {  // if todo.id is equal to the id we wish to remove ? (coz we're filtering) then return false.
              return false;  // this indicates that the todo should be discarted.
          }
          return true;
        });
        return {  //returning the latest todos ( after filter deletion )
          todos: newTodos
        };


        return {   // returnign an object with todos: set to the newTodos variable.
            todos: newTodos
        };

    default:
      return state;
  }
}
