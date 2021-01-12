import { checkAuth, logout } from "./auth/actions";
import { getAccounts, selectAccount } from "./accounts/actions";
import { getUsers, setUserLoading } from "./users/actions";
import { getSkills, setSkillsLoading } from "./skills/actions";
import { getProfiles, setProfileLoading } from "./profiles/actions";
import { getAgentGroups, setAgentGroupsLoading } from "./agentGroups/actions";
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
import { getAppKeys, setAppKeysLoading } from "./appkeys/actions";
import { getCampaigns, setCampaignLoading } from './campaigns/actions';

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
  setCampaignLoading
};
