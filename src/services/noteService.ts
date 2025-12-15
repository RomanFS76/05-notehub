import axios from 'axios';
import type { Note } from '../types/note';

const NotesAPI = axios.create({
  baseURL: 'https://notehub-public.goit.study/api',
  headers: {
    accept: 'application/json',
    Authorization: `Bearer ${import.meta.env.VITE_NOTEHUB_TOKEN}`,
  },
});


export const fetchNotes  = async()=>{
    const {data} = await NotesAPI.get<Note[]>('/notes');
    return data;
};