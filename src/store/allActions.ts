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
  setTableError,
  setTableLoading
} from "./table/actions";

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
  setTableError,
  setTableLoading
};
