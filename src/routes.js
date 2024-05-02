import Start from './pages/dont/Start.vue';
import Start2 from './pages/dont/Start2.vue';
import Start3 from './pages/dont/Start3.vue';
import Home from './pages/dont/Home.vue';
import Leaderboard from './pages/dont/Leaderboard.vue';
import Profile from './pages/dont/Profile.vue';

const routes = [
  Start,
  Start2,
  Start3,
  Home,
  Leaderboard,
  Profile,

].map((component) => {
  const name = component.name;
  const path = `/${name
    .split('Page')[0]
    .split('')
    .map((char, index) =>
      char.match(/[A-Z]/) && index !== 0 ? `-${char}` : char
    )
    .join('')
    .toLowerCase()}`;
  const title =
    component.title ||
    name
      .split('Page')[0]
      .split('')
      .map((char, index) =>
        char.match(/[A-Z]/) && index !== 0 ? ` ${char}` : char
      )
      .join('');
  console.log('path',path,'title',title)
  return {
    component,
    path: name === 'Start' ? '/' : path,
    // path: name === 'HomePage' ? '/' : path,
    title,
  };
});
routes.sort((a, b) => (a.title > b.title ? 1 : -1));

export default routes;
