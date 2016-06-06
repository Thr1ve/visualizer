import { configure } from '@kadira/storybook';

function loadStories() {
  require('../stories/VisualizerTest');
  // require as many stories as you need.
}

configure(loadStories, module);
