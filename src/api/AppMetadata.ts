/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright 2019 FINOS FDC3 contributors - see NOTICE file
 */

import { Icon } from './Icon';

/**
 * App definition as provided by the application directory
 */
export interface AppMetadata {
  /** The unique app name that can be used with the open and raiseIntent calls. */
  readonly name: string;

  /** The unique application identifier located within a specific application directory instance. An example of an appId might be 'app@sub.root' */
  readonly appId?: string;

  /** The Version of the application. */
  readonly version?: string;

  /** A more user-friendly application title that can be used to render UI elements  */
  readonly title?: string;

  /**  A tooltip for the application that can be used to render UI elements */
  readonly tooltip?: string;

  /** A longer, multi-paragraph description for the application that could include markup */
  readonly description?: string;

  /** A list of icon URLs for the application that can be used to render UI elements */
  readonly icons?: Array<Icon>;

  /** A list of image URLs for the application that can be used to render UI elements */
  readonly images?: Array<string>;

  /** The type of output returned for any intent specified during resolution. May express a particular context type (e.g. "fdc3.instrument"), channel (e.g. "channel") or a channel that will receive a specified type (e.g. "channel<fdc3.instrument>"). */
  readonly output?: string | null;
}
