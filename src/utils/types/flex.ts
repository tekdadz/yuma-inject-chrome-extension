/* eslint-disable @typescript-eslint/no-unused-vars */
import { ReactChild, ReactChildren, ReactElement, ReactNode } from 'react';

export type FlexPropsType = {
  dir?: 'row' | 'column';
  gap?: number;
  justifyContent?: 
    'flex-start' |
    'flex-end' |
    'space-around' | 
    'space-between' | 
    'center';
  alignItems?: 
    'flex-start' |
    'flex-end' |
    'space-around' | 
    'space-between' | 
    'center';
  children: ReactElement | ReactElement[];
}