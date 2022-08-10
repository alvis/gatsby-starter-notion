/*
 *                            *** MIT LICENSE ***
 * -------------------------------------------------------------------------
 * This code may be modified and distributed under the MIT license.
 * See the LICENSE file for details.
 * -------------------------------------------------------------------------
 *
 * @summary   The main landing page
 *
 * @author    Alvis HT Tang <alvis@hilbert.space>
 * @license   MIT
 * @copyright Copyright (c) 2021 - All Rights Reserved.
 * -------------------------------------------------------------------------
 */

import type { FC } from 'react';

// export const Head: FC = () => <title>Hello World</title>;

/**
 * the main landing page
 * @inheritdoc
 * @returns a component holding the landing page
 */
const HomePage: FC = () => (
  <>
    <header className="min-safe-h-screen container mx-auto flex flex-col px-6">
      <div className="my-8 mr-0 flex grow flex-col justify-center md:my-0">
        <h1 className="my-4 text-center text-3xl">
          <span>Hello, World!</span>
        </h1>
      </div>
    </header>
  </>
);

export default HomePage;
