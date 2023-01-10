import './App.css';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from './store';
import { reset, increment, decrement } from './redux/counter/counter.slice';
import { add, removeAll } from './redux/todo/todo.slice'
import { useState } from 'react';

function App() {

  const count = useSelector((state: RootState) => {
    return state.counter.value
  })

  const list = useSelector((state: RootState) => {
    return state.todo.list
  })

  const [newTodo, setNewTodo] = useState("")

  const dispatch = useDispatch()

  return (
    //qui chiamo le azioni

    <div>
      <div>
        <button onClick={() => dispatch(increment())}>+</button>
        <p>{count}</p>
        <button onClick={() => dispatch(decrement())}>-</button>
        <button onClick={() => dispatch(reset())}>reset</button>
      </div>
      <br />
      <div>
        <input type="text" value={newTodo} onChange={(e) => setNewTodo(e.target.value)} />
        <button
          disabled={newTodo.trim().length === 0}
          onClick={() =>
            dispatch(
              add({
                label: newTodo,
                completed: false,
              })
            )}
        >Add TODO
        </button>
        <button onClick={() =>
          dispatch(
            removeAll())}
        >Remove All
        </button>
        {list.map((t, i) => {
          return (
            <>
              <p>{t.label}</p>

            </>
          )
        })}
      </div>
    </div >
  );
}

export default App;


// Quindi: Ho creato la slice, l'azione. All'interno dell interfaccia ho creato il selettore del todo
// che prende lo state globale e lo seleziona, quindi dentro il todos faccio il return di state.todo.todos (todo = stato, todos=array)
// Poi ho creato una variabile che è automaticamente aggiornata quando redux riceve un nuovo valore
// dispatch l'avevamo preso prima
// è stato aggiunto un input il cui onChange e il value sono bindati a useState
// Poi si clicca sul bottone aggiungi TODO che fa un dispatch di un azione che ho creato che è add e dentro passa il value e poi stampo i valori


