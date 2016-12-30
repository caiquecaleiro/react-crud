import { types } from './columnTypes';

// The Grid component require these values to build the component.
export const todoCells = [
  { name: 'Text', value: 'text', type: types.STRING },
  { name: 'Completed', value: 'completed', type: types.BOOLEAN },
  { name: 'Completed at', value: 'completedAt', type: types.TIMESTAMP }
];