import React from 'react';
import './styles/normalize.css';
import  './styles/common.css';
import { renderRoutes } from "react-router-config";
import ListResultContainer from './containers/ListResultContainer';
import FilmDescriptionContainer from './containers/FilmDescriptionContainer';
import NotFound from './components/NotFound';


const AppRoot = ({route}) => {
  return (
    <div>
      {renderRoutes(route.routes)}
    </div>
  );
};

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
