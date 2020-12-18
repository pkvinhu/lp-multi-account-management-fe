import { RootState } from '..';
import { ThunkAction } from 'redux-thunk';
import { Profile, ProfileAction, GET_PROFILES, SET_PROFILE_ERROR, SET_PROFILE_LOADING } from './types';
import axios from 'axios';

export const getProfiles = (account: string|number): ThunkAction<void, RootState, null, ProfileAction | any> => {
    return async dispatch => {
        try {
            const res: any = await axios.get(`http://localhost:1337/api/profiles/${account}`);
            const data: Profile[] = res.data;
            let map = {};
            res.data.forEach((e, i) => { map[e.id] = e.name });
            dispatch({
                type: GET_PROFILES,
                payload: { data, map }
            })
        } catch(err) {
            console.log(err);
            dispatch({
                type: SET_PROFILE_ERROR,
                error: err
            })
        }
    }
}

export const setProfileLoading = (): ProfileAction => {
    return {
        type: SET_PROFILE_LOADING,
    }
}