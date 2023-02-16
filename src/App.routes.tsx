import React from 'react';
import { createBrowserRouter, RouteObject, redirect } from 'react-router-dom';
import { Home, Examples, Features, Counter, Checkbox } from './Routes';
import App from './App';
import { BASE_PATH } from './constants/App.constants';

interface IRoute {
  name: string;
  path: string;
  element: JSX.Element;
  loader: () => JSX.Element;
}

export const featureRoutesList: IRoute[] = [
  {
    name: 'Examples',
    path: '/examples',
    element: <Examples />,
    loader: () => <>Loading....</>,
  },
  {
    name: 'Features',
    path: '/features',
    element: <Features />,
    loader: () => <>Loading....</>,
  },
  {
    name: 'Counter',
    path: '/counter',
    element: <Counter />,
    loader: () => <>Loading....</>,
  },
  {
    name: 'Checkbox',
    path: '/checkbox',
    element: <Checkbox />,
    loader: () => <>Loading....</>,
  },
];

const appRoutesList: RouteObject[] = [
  {
    path: '',
    element: <App />,
    children: [
      {
        path: '',
        loader: () => redirect('/home'),
      },
      {
        path: '/home',
        element: <Home />,
        loader: () => <>Loading....</>,
      },
      ...featureRoutesList.map(
        (route): RouteObject => ({
          path: route.path,
          element: route.element,
          loader: route.loader,
        })
      ),
    ],
  },
];

export const router = createBrowserRouter(appRoutesList, { basename: BASE_PATH });
