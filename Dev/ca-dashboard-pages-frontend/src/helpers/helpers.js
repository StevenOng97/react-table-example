import moment from 'moment';
import history from './history';

const getFormalDate = (date) => {
  return moment(date).format('Do MMMM, h:mm a');
};

const setCurrentUser = (currentUser) => {
  localStorage.setItem('user', currentUser);
};

const getCurrentUser = () => {
  return JSON.parse(localStorage.getItem('user')) || {};
};

const forwardTo = (location) => {
  console.log(history, location);
  history.push(location);
}

export { getFormalDate, setCurrentUser, getCurrentUser, forwardTo };
