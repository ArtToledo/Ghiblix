import { Inject, Injectable, NotFoundException, NotAcceptableException } from '@nestjs/common';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {

    constructor(
        @Inject('MOVIE_REPOSITORY') private moviesRepository: typeof Movie
    ){}

}
