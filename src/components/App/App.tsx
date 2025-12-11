import { useQuery } from '@tanstack/react-query';
import css from './App.module.css';
import { fetchNotes } from '../../services/noteService';
import NoteList from '../NoteList/NoteList';
import Pagination from '../Pagination/Pagination';
import { useState } from 'react';

export default function App() {
  const [page, setPage] = useState(1);

  const { data } = useQuery({
    queryKey: ['notes', page],
    queryFn: () => fetchNotes(page),
  });

  const note = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  return (
    <div className={css.app}>
      <header className={css.toolbar}>
        {totalPages > 1 && (
          <Pagination
            totalPages={totalPages}
            page={page}
            onChangePage={setPage}
          />
        )}
        <button className={css.button}>Create note +</button>
      </header>
      {note.length > 0 && <NoteList notes={note} />}
    </div>
  );
}
