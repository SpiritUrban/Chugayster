import appState from '../app-state';


const log = console.log;

const steps = (lot) => {
    lot.map(one => setTimeout(one[1], one[0]))
};

//////////////////////////////////////////////////////////////////////////////////////////
//                                    work with URL                                     //
//////////////////////////////////////////////////////////////////////////////////////////

const parseQuery = (queryString) => {
    var query = {};
    var pairs = (queryString[0] === '?' ? queryString.substr(1) : queryString).split('&');
    for (var i = 0; i < pairs.length; i++) {
        var pair = pairs[i].split('=');
        query[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1] || '');
    }
    return query;
};

const getUrlQueries = () => parseQuery(location.search);

const my_alert = (title, userMsg, devMsg) => {
    appState.alert = { show: true, title, userMsg, devMsg }
  }

export { log, steps, parseQuery, getUrlQueries, my_alert };