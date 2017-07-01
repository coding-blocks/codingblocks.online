/**
 * Created by abhishek on 30/06/17.
 */
'use strict';

import env from '../config/environment'

export default {
  
  api: (url) => {
    `${env.apiEndpoint}/api/${url}`
  }

}
