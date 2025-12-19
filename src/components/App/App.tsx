import { useQuery, keepPreviousData } from '@tanstack/react-query';
import { fetchNotes } from '../../services/noteService';
import Pagination from '../Pagination/Pagination';
import SearchBox from '../SearchBox/SearchBox';
import css from './App.module.css';
import NoteList from '../NoteList/NoteList';
import { useState } from 'react';
import Modal from '../Modal/Modal';
import NoteForm from '../NoteForm/NoteForm';
import { useDebounce } from 'use-debounce';
import Loader from '../Loader/Loader';

export default function App() {
  const [page, setPage] = useState<number>(1);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [search, setSearch] = useState('');

  const [debounced] = useDebounce(search, 700);

  // ****************************useQuery****************************

  const { data, isLoading } = useQuery({
    queryKey: ['notes', page, debounced],
    queryFn: () => fetchNotes(page, debounced),
    placeholderData: keepPreviousData,
  });

  const notes = data?.notes ?? [];
  const totalPages = data?.totalPages ?? 0;

  // ****************************Modal*******************************

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className={css.app}>
        <header className={css.toolbar}>
          <SearchBox valueSearch={search} onSearch={setSearch} />
          {totalPages > 1 && (
            <Pagination
              totalPages={totalPages}
              page={page}
              onChangePage={setPage}
            />
          )}
          <button className={css.button} onClick={openModal}>
            Create note +
          </button>
        </header>
        {isLoading && <Loader />}
        {notes.length > 0 && <NoteList notes={notes} />}
        {isModalOpen && (
          <Modal onClose={closeModal}>
            <NoteForm onCancel={closeModal} />
          </Modal>
        )}
      </div>
    </>
  );
}
