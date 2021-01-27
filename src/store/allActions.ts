import { checkAuth, logout } from "./auth/actions";
import { getAccounts, selectAccount } from "./accounts/actions";
import { getUsers, setUserLoading, setUserError, clearUserData } from "./users/actions";
import { getSkills, setSkillsLoading, setSkillsError, clearSkillsData } from "./skills/actions";
import { getProfiles, setProfileLoading, setProfileError, clearProfileData } from "./profiles/actions";
import { getAgentGroups, setAgentGroupsLoading, setAgentGroupsError, clearAgentGroupsData } from "./agentGroups/actions";
import {
  setDataDisplay,
  setView,
  setOrder,
  setOrderBy,
  setSelected,
  setPage,
  setRowsPerPage,
  setFilterCategory,
  setFilterValue,
  setTableError,
  setTableLoading,
  deleteEntity,
  clearTableData
} from "./table/actions";
import { getAppKeys, setAppKeysLoading, setAppKeysError, clearAppKeysData } from "./appkeys/actions";
import { getCampaigns, setCampaignLoading, setCampaignError, clearCampaignData } from './campaigns/actions';

export default {
  checkAuth,
  logout,
  getAccounts,
  selectAccount,
  getUsers,
  getSkills,
  getProfiles,
  getAgentGroups,
  setUserLoading,
  setSkillsLoading,
  setProfileLoading,
  setAgentGroupsLoading,
  setDataDisplay,
  setView,
  setOrder,
  setOrderBy,
  setSelected,
  setPage,
  setRowsPerPage,
  setFilterCategory,
  setFilterValue,
  setTableError,
  setTableLoading,
  deleteEntity,
  getAppKeys,
  setAppKeysLoading,
  getCampaigns,
  setCampaignLoading,
  setUserError,
  setSkillsError,
  setProfileError,
  setAgentGroupsError,
  setCampaignError, 
  setAppKeysError,
  clearUserData,
  clearSkillsData,
  clearProfileData,
  clearAgentGroupsData,
  clearAppKeysData,
  clearCampaignData,
  clearTableData
};
