import { compose } from "@reduxjs/toolkit";

import {withContext} from "./with-context";
import { withI18n } from "./with-18n";
import { withReduxToolkit } from "./with-reduxToolkit";
import { withMUi } from "./with-mui";

import type { FunctionComponent } from 'react';

export const withProviders = compose<FunctionComponent>(
  withI18n,
  withReduxToolkit,
  withContext,
  withMUi,
);