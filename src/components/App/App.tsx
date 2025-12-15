import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import Pagination from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import NoteList from '../NoteList/NoteList';

export default function App() {
  const { data } = useQuery({
    queryKey: ['notes'],
    queryFn: fetchNotes,
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox />
          <Pagination />
          <button className={css.button}>Create note +</button>
        </header>
        <NoteList notes={notes} />
      </div>
    </>
  );
}
