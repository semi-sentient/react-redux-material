import Home from 'pages/home/Home';

// Error Pages -- do not modify
import AccessDenied from 'pages/errors/AccessDenied';
import BrowserUpgrade from 'pages/errors/BrowserUpgrade';
import PageNotFound from 'pages/errors/PageNotFound';

/**
 * The following properties are currently supported for each route component:
 * 
 *  component   {JSX}       The JSX component that will render when the route matches
 *  exact       {Boolean}   When true, will only match if the path matches the location.pathname exactly
 *  isNavItem   {Boolean}   When true, will render a NavItem in the Header component
 *  path        {String}    The route/path of the component to render
 *  title       {String}    Used in conjunction with isNavItem and will display in the Header component
 */
const routes = {
    home: {
        component: Home,
        exact: true,
        isNavItem: true,
        path: '/',
        title: 'Welcome'
    },

    // Error Pages -- do not modify
    accessDenied: {
        component: AccessDenied,
        path: '/access-denied'
    },
    browserUpgrade: {
        component: BrowserUpgrade,
        path: '/browser-upgrade'
    },
    pageNotFound: {
        component: PageNotFound
    }
};

export { routes };