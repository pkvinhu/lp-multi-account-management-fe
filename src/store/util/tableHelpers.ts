import { User } from "../users/types";
import { Profile } from "../profiles/types";
import { Skill } from "../skills/types";
import { AgentGroup } from "../agentGroups/types";
import {
  UserHeadCell,
  SkillHeadCell,
  ProfileHeadCell,
  AgentGroupHeadCell,
  Order,
  DataDisplay,
  Data
} from "../table/types";

export const getDisplayForUsers = (
  skillsMap: any,
  profilesMap: any,
  agentGroupsMap: any,
  data: User[],
  order: Order,
  orderBy: string
): DataDisplay[] => {
  const notSorted = data.map(
    (
      {
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
        id,
        pid,
        loginName,
        fullName,
        maxChats,
        email,
        dateCreated,
        dateUpdated,
        isApiUser,
        lpaCreatedUser,
        skillIds:
          skillIds && skillIds.length
            ? skillIds.map((e, i) => (e && skillsMap[e] ? skillsMap[e] : null))
            : [],
        profileIds:
          profileIds && profileIds.length
            ? profileIds.map((e, i) =>
                e && profilesMap[e] ? profilesMap[e] : null
              )
            : [],
        managerOf:
          managerOf && managerOf.length
            ? managerOf.map((e, i) =>
                e && agentGroupsMap[e.agentGroupId]
                  ? agentGroupsMap[e.agentGroupId]
                  : null
              )
            : []
      };
    }
  );
  let sorted = stableSort(notSorted, getComparator(order, orderBy));
  return sorted;
};

export const getDisplayForProfiles = (
  data: Profile[],
  order: Order,
  orderBy: string
) => {
  let notSorted = data.map(
    (
      e: {
        id;
        name;
        roleTypeName;
        dateUpdated;
        isAssignedToLPA;
      },
      i
    ) => {
      return e;
    }
  );
  let sorted = stableSort(notSorted, getComparator(order, orderBy));
  return sorted;
};

export const getDisplayForSkills = (
  data: Skill[],
  skillsMap: any,
  order: Order,
  orderBy: string
) => {
  let notSorted = data.map(
    (
      { id, name, skillOrder, dateUpdated, canTransfer, skillTransferList },
      i
    ) => {
      return {
        id,
        name,
        skillOrder,
        dateUpdated,
        canTransfer,
        skillTransferList:
          skillTransferList && skillTransferList.length
            ? skillTransferList.map((e, i) =>
                e && skillsMap[e] ? skillsMap[e] : null
              )
            : []
      };
    }
  );
  return stableSort(notSorted, getComparator(order, orderBy));
};

export const getDisplayForAgentGroups = (
  data: AgentGroup[],
  order: Order,
  orderBy: string
) => {
  let notSorted = data.map(({ id, name, parentGroupId, dateUpdated }, i) => {
    return { id, name, parentGroupId, dateUpdated };
  });
  return stableSort(notSorted, getComparator(order, orderBy));
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

// const stableSort = (array, comparator) => {
//   const stabilizedThis = array.map((el, index) => [el, index]);
//   stabilizedThis.sort((a, b) => {
//     const order = comparator(a[0], b[0]);
//     if (order !== 0) return order;
//     return a[1] - b[1];
//   });
//   return stabilizedThis.map(el => el[0]);
// };

function stableSort<T>(array: T[], comparator: (a: T, b: T) => number) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  return stabilizedThis.map(el => el[0]);
}

function getComparator<T extends keyof any>(
  order: Order,
  orderBy: T
): (a: DataDisplay, b: DataDisplay) => number {
  return order === "desc"
    ? (a, b) => descendingComparator(a, b, orderBy)
    : (a, b) => -descendingComparator(a, b, orderBy);
}

function descendingComparator(a, b, orderBy) {
  let A = Array.isArray(a[orderBy])
    ? a[orderBy].join(",").toLowerCase()
    : typeof a[orderBy] === "number"
    ? a[orderBy]
    : String(a[orderBy]).toLowerCase();
  let B = Array.isArray(b[orderBy])
    ? b[orderBy].join(",").toLowerCase()
    : typeof b[orderBy] === "number"
    ? b[orderBy]
    : String(b[orderBy]).toLowerCase();
  if (B < A) {
    return -1;
  }
  if (B > A) {
    return 1;
  }
  return 0;
}
