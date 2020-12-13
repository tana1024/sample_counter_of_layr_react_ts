import {ComponentHTTPClient} from '@layr/component-http-client';
import React from 'react';
import {view} from '@layr/react-integration';
import type {Counter as BackendCounter} from '../../../backend/src/components/counter';

//var os = require('os');

export const getCounter = async () => {
//  const client = new ComponentHTTPClient('https://3001-' + os.hostname().substring(5));
  const client = new ComponentHTTPClient('https://3001-b91f93fa-5b6f-4e43-a2d7-c23462205009.ws-us03.gitpod.io/');

  const BackendCounterProxy = (await client.getComponent()) as typeof BackendCounter;

  class Counter extends BackendCounterProxy {
    @view() Main() {
      return (
        <div>
          <input value={this.value} readOnly />
          <button
            onClick={async () => {
              await this.increment();
            }}
          >
            +
          </button>
        </div>
      );
    }
  }

  return Counter;
};
