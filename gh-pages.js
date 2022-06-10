import { publish } from 'gh-pages';

publish(
 'build', // path to public directory
 {
  branch: 'gh-pages',
  repo: 'https://github.com/Alsadig-ahmed/sveltekit-gh-pages.git', // Update to point to your repository
  //   repo: 'https://github.com/el3um4s/memento-sveltekit-and-github-pages.git', // Update to point to your repository
  user: {
    name: 'Alsadig-ahmed', 
    email: 'alsadq.ahmed@gmail.com' 
  },
  dotfiles: true
  },
  () => {
   console.log('Deploy Complete!');
  }
);