/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   Specify the configuration related to
 *            node generation.
 *
 *            See https://www.gatsbyjs.org/docs/node-apis
 *            for detailed usage
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

/* istanbul ignore file */

import { resolve } from 'path';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';

import type { GatsbyNode } from 'gatsby';

export const onCreateWebpackConfig: GatsbyNode['onCreateWebpackConfig'] = ({
  stage,
  actions,
}) => {
  switch (stage) {
    case 'build-javascript':
      actions.setWebpackConfig({
        plugins: [
          new BundleAnalyzerPlugin({
            openAnalyzer: false,
            analyzerMode: 'static',
            reportFilename: resolve(
              __dirname,
              'webpack-bundle-analyzer-report.html',
            ),
          }),
        ],
      });

      break;
    default:
      break;
  }
};
