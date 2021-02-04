import { Inject, Injectable, NotFoundException, NotAcceptableException } from '@nestjs/common';
import { Movie } from './movie.entity';

@Injectable()
export class MoviesService {

    constructor(
        @Inject('MOVIE_REPOSITORY') private moviesRepository: typeof Movie
    ){}

    async findAll(): Promise<Movie[]> {
        return await this.moviesRepository.findAll<Movie>();
    }

    async findOne(id: number): Promise<Movie> {
        return await this.moviesRepository.findByPk(id);
    }
}
