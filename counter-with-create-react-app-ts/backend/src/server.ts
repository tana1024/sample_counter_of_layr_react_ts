import express from 'express';
import {serveComponent} from '@layr/component-express-middleware';
import {Counter} from './components/counter';

//const express = require('express');
var cors = require('cors')

const app = express();
app.use(cors);

// Serve the `Movie` component at the root ('/')
app.use('/', serveComponent(Counter));
app.listen(3001);
