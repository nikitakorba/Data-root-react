import getDataIndex from './action.js';
import { GET_DECORATION, GET_ARCHITECTURE, GET_PARK } from '../constants/catalog';

export let decoration = () => getDataIndex('decoration', GET_DECORATION);
export let architecture = () => getDataIndex('architecture', GET_ARCHITECTURE);
export let park = () => getDataIndex('park', GET_PARK);