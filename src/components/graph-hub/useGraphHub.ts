import { useContext } from 'react';

import { GraphHubContext } from 'src/components/graph-hub/GraphHubContext';

export const useGraphHub = () => useContext(GraphHubContext);
