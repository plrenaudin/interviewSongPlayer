import { generateSongList } from "../../data/generateSong";

const songs = generateSongList(123);

export const list = ({ page, perPage }) => {
  
  // TODO replace songs by real database data
  return songs.slice((page - 1) * perPage, page * perPage);
}
