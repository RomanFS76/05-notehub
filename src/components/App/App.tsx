import { fetchNotes } from '../../services/noteService';
import Pagination from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';

export default function App() {

  fetchNotes();
  
  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          <Pagination />
          <button className={css.button}>Create note +</button>
        </header>
      </div>
    </>
  );
}
