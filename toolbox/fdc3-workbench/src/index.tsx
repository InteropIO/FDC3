/**
 * SPDX-License-Identifier: Apache-2.0
 * Copyright FINOS FDC3 contributors - see NOTICE file
 */

import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import "@interopio/fdc3";
import IOConnectDesktop from "@interopio/desktop"
import IOConnectBrowser from "@interopio/browser"
import { IOConnectProvider } from "@interopio/react-hooks"

//make sure URL ends with trailing / for resolution of image paths
if (!window.location.href.endsWith("/")){
	window.location.href = `${window.location.href}/`;
}

ReactDOM.render(
	<React.StrictMode>
      <IOConnectProvider
        settings={{
          browser: {
            factory: IOConnectBrowser,
            config: {
            },
          },
          desktop: {
            factory: IOConnectDesktop,
            config: {
            },
          },
        }}
      >
		<App />
      </IOConnectProvider>
	</React.StrictMode>,
	document.getElementById("root")
);

