import {ComponentHTTPClient} from '@layr/component-http-client';
import React from 'react';
import {view} from '@layr/react-integration';
import type {Counter as BackendCounter} from '../../../backend/src/components/counter';

//var os = require('os');

export const getCounter = async () => {
//  const client = new ComponentHTTPClient('https://3001-' + os.hostname().substring(5));
  const client = new ComponentHTTPClient('https://3001-a1e67120-1496-4cdc-840e-a8cb1531b153.ws-us03.gitpod.io/');

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
