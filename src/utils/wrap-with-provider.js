import React from 'react';

import TopLayout from '../components/top-layout';
import theme from '../gatsby-theme-material-ui-top-layout/theme';

export default function wrapWithProvider({ element }) {
  return <TopLayout theme={theme}>{element}</TopLayout>;
}
