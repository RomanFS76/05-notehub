import axios from 'axios';
import type { Note } from '../types/note';

const NotesAPI = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});



interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const fetchNotes  = async():Promise<FetchNotesResponse>=>{
    const {data} = await NotesAPI.get<FetchNotesResponse>('/notes');
    return data;
};