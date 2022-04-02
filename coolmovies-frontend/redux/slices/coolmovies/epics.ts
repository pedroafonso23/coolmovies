import { Epic, StateObservable } from 'redux-observable';
import { Observable } from 'rxjs';
import { filter, map, switchMap } from 'rxjs/operators';
import { RootState } from '../../store';
import { EpicDependencies } from '../../types';
import { actions, SliceAction } from './slice';
import { allMoviesQuery, reviewsByMovieIdQuery, loggedUserQuery } from '../../../graphql/queries'
import { createMovieReviewMutation } from '../../../graphql/mutations';

export const coolmoviesEpic: Epic = (
  action$: Observable<SliceAction['increment']>,
  state$: StateObservable<RootState>
) => action$.pipe(
  filter(actions.increment.match),
  filter(() => Boolean(state$.value.coolmovies.value % 2)),
  map(() => actions.epicSideEffect())
);

export const allMoviesAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetchAllMovies']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies
) => action$.pipe(
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
) => action$.pipe(
  filter(actions.fetchReviewsByMovieId.match),
  switchMap(async (action) => {
    try {
      const result = await client.query({
        query: reviewsByMovieIdQuery(action.payload),
        fetchPolicy: 'network-only',
      });
      return actions.loaded({ data: result.data });
    } catch (err) {
      return actions.loadError();
    }
  })
);

export const loggedUserAsyncEpic: Epic = (
  action$: Observable<SliceAction['fetchLoggedUser']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies,
) => action$.pipe(
  filter(actions.fetchLoggedUser.match),
  switchMap(async () => {
    try {
      const result = await client.query({
        query: loggedUserQuery,
      });
      return actions.loaded({ data: result.data });
    } catch (err) {
      return actions.loadError();
    }
  })
)

export const createMovieReviewAsyncEpic: Epic = (
  action$: Observable<SliceAction['createMovieReview']>,
  state$: StateObservable<RootState>,
  { client }: EpicDependencies,
) => action$.pipe(
  filter(actions.createMovieReview.match),
  switchMap(async (action) => {
    try {
      const result = await client.mutate({
        mutation: createMovieReviewMutation(action.payload),
        refetchQueries: 'active',
      });
      return actions.loaded({ data: result.data });
    } catch (err) {
      return actions.loadError();
    }
  })
)
