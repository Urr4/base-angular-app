import { configure } from '@storybook/angular';

configure(require.context('../src/stories', true, /\.stories\.[tj]s$/), module);