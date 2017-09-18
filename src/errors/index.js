'use strict';

import VKError from './vk';
import APIError from './api';
import UpdatesError from './updates';
import ExecuteError from './execute';

export { API_ERRORS, UPDATES_ERRORS } from '../util/constants';

export { VKError, APIError, UpdatesError, ExecuteError };

export default VKError;
