import { ProfileDataDisplay } from "../table/types";
import { GenericError } from "../users/types";
import { any } from "prop-types";

export const GET_PROFILES = "GET_PROFILES";
export const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";

export interface ProfileState {
    data: Profile[];
    map: {};
    roleTypeCountMap: {};
    error: ProfilesError | null;
    loading: boolean;
}

export interface Profile extends ProfileDataDisplay {
  roleTypeId: number;
  deleted: boolean;
  permissions: number[];
  description?: string;
  permissionPackages: Package[];
}

interface Package {
  isEnabled: boolean;
  isDisplayed: boolean;
  id: number;
  featuredKeys?: string[];
}

interface ProfilePayload { 
  data: Profile[]; 
  map: any; 
  roleTypeCountMap: any; 
}

export interface ProfilesError extends GenericError {}

export interface GetProfilesAction {
  type: typeof GET_PROFILES;
  payload: ProfilePayload;
}

interface SetLoadingAction {
  type: typeof SET_PROFILE_LOADING;
}

interface SetErrorAction {
  type: typeof SET_PROFILE_ERROR;
  payload: ProfilesError;
}

export type ProfileAction = GetProfilesAction | SetLoadingAction | SetErrorAction;