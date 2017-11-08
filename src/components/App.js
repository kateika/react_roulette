import React from 'react';
import '../styles/normalize.css';
import  '../styles/common.css';
import AppRoot from './app-root';
import ListResultContainer from '../containers/ListResultContainer';
import FilmDescriptionContainer from '../containers/FilmDescriptionContainer';
import NotFound from '../components/NotFound';

const routes = [
  { component: AppRoot,
    routes: [
      { path: '/',
        exact: true,
        component: ListResultContainer
      },
      { path: '/search',
        exact: true,
        component: ListResultContainer
      },
      { path: '/search/:searchQuery',
        component: ListResultContainer
      },
      { path: '/:type/:filmId',
        component: FilmDescriptionContainer
      },
      { path: '*',
        component: NotFound
      }
    ]
  }
];

export default routes;
