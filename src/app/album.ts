import {Track} from './track';
export interface Album {
    name: string;
    releaseDate: string;
    coverImafe: string;
    tracks: Track[];
}
