export const GET_PROFILES = "GET_PROFILES";
export const SET_PROFILE_ERROR = "SET_PROFILE_ERROR";
export const SET_PROFILE_LOADING = "SET_PROFILE_LOADING";

export interface ProfileState {
    data: Profile[];
    map: any;
    error: ProfilesError | null;
    loading: boolean;
}

export interface Profile {
  roleTypeId: number;
  deleted: boolean;
  roleTypeName: string;
  permissions: number[];
  name: string;
  description?: string;
  id: number;
  permissionPackages: Package[];
  dateUpdated: string;
  isAssignedToLPA: boolean;
}

interface Package {
  isEnabled: boolean;
  isDisplayed: boolean;
  id: number;
  featuredKeys?: string[];
}

export interface ProfilesError {
  time: string;
  message: string;
  internalCode: number;
  responseStatus: string;
}

export interface GetProfilesAction {
  type: typeof GET_PROFILES;
  payload: { data: Profile[], map: any };
}

interface SetLoadingAction {
  type: typeof SET_PROFILE_LOADING;
}

interface SetErrorAction {
  type: typeof SET_PROFILE_ERROR;
  payload: ProfilesError;
}

export type ProfileAction = GetProfilesAction | SetLoadingAction | SetErrorAction;