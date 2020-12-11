import { User } from "../users/types";
import { Profile } from "../profiles/types";
import { Skill } from "../skills/types";
import { AgentGroup } from "../agentGroups/types";
import {
  UserHeadCell,
  SkillHeadCell,
  ProfileHeadCell,
  AgentGroupHeadCell
} from "../table/types";

export const getDisplayForUsers = (skillsMap: any, profilesMap: any, data: User[]) => {

  return data.map(
    (
      e: {
        id,
        pid,
        loginName,
        fullName,
        maxChats,
        email,
        skillIds,
        profileIds,
        managerOf,
        dateCreated,
        dateUpdated,
        isApiUser,
        lpaCreatedUser
      },
      i
    ) => {
        return {
            ...e,
            skillIds: e.skillIds.map((e, i) => skillsMap[e] ? skillsMap[e] : null).join(", "),
            profileIds: e.profileIds.map((e, i) => profilesMap[e] ? profilesMap[e] : null).join(", ")
        }
    }
  );
};

export const getDisplayForProfiles = (data: Profile[]) => {
    return data.map(
        (
            e: { 
                id, 
                name, 
                roleTypeName, 
                dateUpdated, 
                isAssignedToLPA 
            }, 
            i
            ) => {
        return e;
    })
};

export const getDisplayForSkills = (skillsMap: any, data: Skill[]) => {
    return data.map(
        (
            e: {
                id,
                name,
                skillOrder,
                dateUpdated,
                canTransfer,
                skillTransferList
            },
            i
        ) => {
            return {
                ...e,
                skillIds: e.skillTransferList.map((e, i) => skillsMap[e] ? skillsMap[e] : null).join(", ")
            }
        }
    )
};

export const getDisplayForAgentGroups = (data: AgentGroup[]) => {
    return data.map(
        (
            e: {
                id,
                name,
                parentGroupId,
                dateUpdated
            },
            i
        ) => {
            return e;
        }
    )
};

export const getHeadCellsForUsers = (): UserHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "pid", numeric: false, disablePadding, label: "Pid" },
    { id: "loginName", numeric: false, disablePadding, label: "Login Name" },
    { id: "fullName", numeric: false, disablePadding, label: "Name" },
    { id: "maxChats", numeric: true, disablePadding, label: "Max Chats" },
    { id: "email", numeric: false, disablePadding, label: "Email" },
    { id: "skillIds", numeric: false, disablePadding, label: "Skills" },
    { id: "profileIds", numeric: false, disablePadding, label: "Profiles" },
    { id: "managerOf", numeric: false, disablePadding, label: "Manager Of" },
    {
      id: "dateCreated",
      numeric: false,
      disablePadding,
      label: "Date Created"
    },
    {
      id: "dateUpdated",
      numeric: false,
      disablePadding,
      label: "Date Updated"
    },
    { id: "isApiUser", numeric: false, disablePadding, label: "API User" },
    {
      id: "lpaCreatedUser",
      numeric: false,
      disablePadding,
      label: "LPA Created User"
    }
  ];
};

export const getHeadCellsForProfiles = (): ProfileHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "name", numeric: false, disablePadding, label: "Name" },
    { id: "roleTypeName", numeric: false, disablePadding, label: "Role Type" },
    {
      id: "dateUpdated",
      numeric: false,
      disablePadding,
      label: "Date Updated"
    },
    {
      id: "isAssignedToLPA",
      numeric: false,
      disablePadding,
      label: "Assigned to LPA"
    }
  ];
};

export const getHeadCellsForSkills = (): SkillHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "name", numeric: false, disablePadding, label: "Name" },
    { id: "skillOrder", numeric: false, disablePadding, label: "Skill Order" },
    {
      id: "dateUpdated",
      numeric: false,
      disablePadding,
      label: "Date Updated"
    },
    {
      id: "canTransfer",
      numeric: false,
      disablePadding,
      label: "Can Transfer"
    },
    {
      id: "skillTransferList",
      numeric: false,
      disablePadding,
      label: "Skill Transfer List"
    }
  ];
};

export const getHeadCellsForAgentGroups = (): AgentGroupHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "name", numeric: false, disablePadding, label: "Name" },
    {
      id: "parentGroupId",
      numeric: false,
      disablePadding,
      label: "Parent Group"
    },
    { id: "dateUpdated", numeric: false, disablePadding, label: "Date Updated" }
  ];
};
