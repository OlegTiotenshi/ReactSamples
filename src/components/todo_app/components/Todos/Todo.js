import { RiDeleteBin2Line, RiTodoFill } from 'react-icons/ri'
import { FaCheck } from 'react-icons/fa'
import TodoContext from '../../context/TodoContext'
import styles from './Todo.module.css'

function Todo({ todo }) {
  return (
    <div
      className={`${styles.todo} ${
        todo.isCompleted ? styles.completedTodo : ''
      }`}
    >
      <RiTodoFill className={styles.todoIcon} />
      <div className={styles.todoText}>{todo.text}</div>

      <TodoContext.Consumer>
        {(value) => (
          <>
            <RiDeleteBin2Line
              className={styles.deleteIcon}
              onClick={() => value.delete(todo.id)}
            />
            <FaCheck
              className={styles.checkIcon}
              onClick={() => value.toggle(todo.id)}
            />
          </>
        )}
      </TodoContext.Consumer>
    </div>
  )
}

export default Todo
