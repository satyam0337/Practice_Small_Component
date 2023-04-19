import {DEC,INC} from './actionType'

export const inc = () => {
  return { type: INC };
};

export const dec = () => {
  return { type: DEC };
};