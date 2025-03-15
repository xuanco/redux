import { ADD_TODO, TOGGLE_TODO, DELETE_TODO } from '../constants/todoConstants';

export default function todoReducer(state = [], action) {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        { id: Date.now(), text: action.payload, completed: false }, // Sửa lỗi ID
      ];

    case TOGGLE_TODO:
      return state.map((todo) =>
        todo.id === action.payload
          ? { ...todo, completed: !todo.completed }
          : todo
      );

    case DELETE_TODO:
      return state.filter((todo) => todo.id !== action.payload); // Thêm chức năng xóa

    default:
      return state;
  }
}

