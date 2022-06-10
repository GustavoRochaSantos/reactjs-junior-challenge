import {configureStore} from '@reduxjs/toolkit';
import { IClientsProps } from '../types/apiResult';

export interface IinitialProps {
    clientData?: IClientsProps[],
    currentCard?: IClientsProps | null
    loading?: boolean
    searchText:string
    image:string
}

const initialState: IinitialProps = {
    clientData: [],
    currentCard: null,
    loading: false,
    searchText:'',
    image:''
};

interface stateStore {
    type: string;
}

const changeState = (state = initialState, {type, ...rest}: stateStore) => {
    switch (type) {
        case 'set':
            return {...state, ...rest};
        default:
            return state;
    }
};

const store = configureStore({reducer: changeState});
export default store;
