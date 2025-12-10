import { useQuery } from '@tanstack/react-query';
import css from './App.module.css';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';

export default function App() {
  const { data } = useQuery({ queryKey: ['notes'], queryFn: fetchNotes });

  const note = data?.notes ?? [];

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        <NoteList notes={note} />
      </header>
    </div>
  );
}
