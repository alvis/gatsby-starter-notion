/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Specify the configuration for Gatsby.
 *
 *            See https://www.gatsbyjs.org/docs/gatsby-config
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

/* istanbul ignore file */

import env from 'dotenv';

import postcssConfig from './postcss.config';

import type { GatsbyConfig } from 'gatsby';

env.config({
  path: `.env.${process.env.NODE_ENV ?? 'development'}`,
});

export const graphqlTypegen: GatsbyConfig['graphqlTypegen'] = {
  typesOutputPath: 'types/gatsby-graphql.d.ts',
};

export const jsxRuntime: GatsbyConfig['jsxRuntime'] = 'automatic';

export const siteMetadata: GatsbyConfig['siteMetadata'] = {
  title: `Hi!`,
};

export const plugins: GatsbyConfig['plugins'] = [
  {
    resolve: 'gatsby-plugin-manifest',
    options: {
      name: 'Hi!',
      icon: 'src/images/gatsby.svg',
    },
  },
  {
    // HACK:
    // As of 2021 September, postcss- loader doesn't support postcss.config.ts
    // as it uses cosmiconfig to load the config file. Therefore, we need to load
    // the plugin lists here.
    resolve: 'gatsby-plugin-postcss',
    options: {
      postCssPlugins: postcssConfig.plugins,
    },
  },
];

export default {
  graphqlTypegen,
  jsxRuntime,
  siteMetadata,
  plugins,
};
