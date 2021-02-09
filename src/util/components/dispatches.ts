import actions from "../../store/allActions";
const {
  selectAccount,
  setUserLoading,
  setSkillsLoading,
  setProfileLoading,
  setAgentGroupsLoading,
  setCampaignLoading,
  setAppKeysLoading,
  setTableLoading,
  setUserError,
  setSkillsError,
  setProfileError,
  setAgentGroupsError,
  setAppKeysError,
  setCampaignError,
  getUsers,
  getSkills,
  getProfiles,
  getAgentGroups,
  getAppKeys,
  getCampaigns,
  clearUserData,
  clearProfileData,
  clearSkillsData,
  clearAgentGroupsData,
  clearAppKeysData,
  clearCampaignData,
  clearTableData
} = actions;

export const sweepErrors = (dispatch, history, setModalStatus) => {
  Promise.resolve(() => console.log("....clearing"))
    .then(() => dispatch(selectAccount("")))
    .then(() => dispatch(setUserError(null)))
    .then(() => dispatch(setSkillsError(null)))
    .then(() => dispatch(setProfileError(null)))
    .then(() => dispatch(setAgentGroupsError(null)))
    .then(() => dispatch(setAppKeysError(null)))
    .then(() => dispatch(setCampaignError(null)))
    .then(() => setModalStatus(false))
    .then(() => {
      history.push("/home");
    })
    .catch(err => console.log(err));
};

export const clearAllDataFields = (dispatch, history) => {
        Promise.resolve(() => console.log("....clearing"))
          .then(() => dispatch(selectAccount("")))
          .then(() => dispatch(clearUserData()))
          .then(() => dispatch(clearSkillsData()))
          .then(() => dispatch(clearProfileData()))
          .then(() => dispatch(clearAgentGroupsData()))
          .then(() => dispatch(clearAppKeysData()))
          .then(() => dispatch(clearCampaignData()))
          .then(() => dispatch(clearTableData()))
          .then(() => {
            history.push("/home");
          })
          .catch(err => console.log(err));
      };

export const setDataLoadingForAccount = (acc, dispatch, location, history) => {
  Promise.resolve(() => console.log("....clearing"))
    .then(() => dispatch(selectAccount(acc)))
    .then(() => dispatch(setUserLoading()))
    .then(() => dispatch(setSkillsLoading()))
    .then(() => dispatch(setProfileLoading()))
    .then(() => dispatch(setAgentGroupsLoading()))
    .then(() => dispatch(setAppKeysLoading()))
    .then(() => dispatch(setCampaignLoading()))
    .then(() => dispatch(setTableLoading(true)))
    // .then(() => history.push(`/dashboard/${acc}`))
    .catch(err => console.log(err));
};

export const loadDataForAccount = (
  u_len,
  s_len,
  p_len,
  ag_len,
  ak_len,
  c_len,
  errorWrapper,
  dispatch,
  account
) => {
  const u = async () => {
    if (!u_len || !errorWrapper()) {
      await dispatch(getUsers(account));
    }
  };

  const s = async () => {
    if (!s_len || !errorWrapper()) {
      await dispatch(getSkills(account));
    }
  };

  const p = async () => {
    if (!p_len || !errorWrapper()) await dispatch(getProfiles(account));
  };

  const ag = async () => {
    if (!ag_len || !errorWrapper()) await dispatch(getAgentGroups(account));
  };

  const c = async () => {
    if (!ak_len || !errorWrapper()) await dispatch(getAppKeys(account));
  };

  const ak = async () => {
    if (!c_len || !errorWrapper()) await dispatch(getCampaigns(account));
  };
  Promise.resolve(() => console.log("...loading data"))
    .then(u)
    .then(s)
    .then(p)
    .then(ag)
    .then(c)
    .then(ak)
    .catch(e => console.log(e));
};
