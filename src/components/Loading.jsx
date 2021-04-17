import React from 'react';
import Skeleton from 'react-loading-skeleton';

import '../styles/components/loading.scss';

const Loading = () => (
  <div className="loading">
    <Skeleton />
  </div>
);

export default Loading;
