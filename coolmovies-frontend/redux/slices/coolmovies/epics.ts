import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { RootState } from '../../store';
import { EpicDependencies } from '../../types';
import { actions, SliceAction } from './slice';
import { allMoviesQuery, reviewsByMovieIdQuery } from '../../../graphql/queries'

export const coolmoviesEpic: Epic = (
  action$: Observable<SliceAction['increment']>,
  state$: StateObservable<RootState>
) =>
  action$.pipe(
    filter(actions.increment.match),
    filter(() => Boolean(state$.value.coolmovies.value % 2)),
    map(() => actions.epicSideEffect())
  );

export const allMoviesAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetchAllMovies']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) => 
  action$.pipe(
    filter(actions.fetchAllMovies.match),
    switchMap(async () => {
      try {
        const result = await client.query({
          query: allMoviesQuery,
        });
        return actions.loaded({ data: result.data });
      } catch (err) {
        return actions.loadError();
      }
    })
  );

export const reviewsByMovieIdAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetchReviewsByMovieId']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies,
) => 
  action$.pipe(
    filter(actions.fetchReviewsByMovieId.match),
    switchMap(async (action) => {
      try {
        const result = await client.query({
          query: reviewsByMovieIdQuery(action.payload),
        });
        return actions.loaded({ data: result.data });
      } catch (err) {
        return actions.loadError();
      }
    })
  );
