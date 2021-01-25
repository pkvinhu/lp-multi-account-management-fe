import { checkAuth, logout } from "./auth/actions";
import { getAccounts, selectAccount } from "./accounts/actions";
import { getUsers, setUserLoading, setUserError } from "./users/actions";
import { getSkills, setSkillsLoading, setSkillsError } from "./skills/actions";
import { getProfiles, setProfileLoading, setProfileError } from "./profiles/actions";
import { getAgentGroups, setAgentGroupsLoading, setAgentGroupsError } from "./agentGroups/actions";
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
  deleteEntity
} from "./table/actions";
import { getAppKeys, setAppKeysLoading, setAppKeysError } from "./appkeys/actions";
import { getCampaigns, setCampaignLoading, setCampaignError } from './campaigns/actions';

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
  setAppKeysError
};
