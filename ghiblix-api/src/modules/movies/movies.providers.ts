import { Movie } from './movie.entity';

export const moviesProviders = [{
    provide: 'MOVIE_REPOSITORY',
    useValue: Movie,
}];