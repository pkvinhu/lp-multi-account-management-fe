import { User } from "../../store/users/types";
import { Profile } from "../../store/profiles/types";
import { Skill } from "../../store/skills/types";
import { AgentGroup } from "../../store/agentGroups/types";
import {
  UserHeadCell,
  SkillHeadCell,
  ProfileHeadCell,
  AgentGroupHeadCell,
  Order,
  Data
} from "../../store/table/types";

export const getDisplayForUsers = (
  skillsMap: any,
  profilesMap: any,
  agentGroupsMap: any,
  data: User[],
  order: Order,
  orderBy: string,
  appKeys: any,
  filterCategory: string,
  filterValue: string[]
): Data[] | any => {
  console.log(filterCategory, filterValue)
  const notSortedAll = data.map((e, i) => {
    let { skillIds, profileIds, managerOf } = e;
    return {
      ...e,
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
  });
  let sorted = stableSort(
    notSortedAll,
    getComparator(order, orderBy),
    filterCategory ? filterCategory : undefined,
    filterValue.length ? filterValue : undefined
  );
  return sorted;
};

export const getDisplayForProfiles = (
  data: Profile[],
  order: Order,
  orderBy: string,
  filterCategory: string,
  filterValue: string[]
) => {
  let sorted = stableSort(
    data,
    getComparator(order, orderBy),
    filterCategory ? filterCategory : undefined,
    filterValue.length ? filterValue : undefined
  );
  return sorted;
};

export const getDisplayForSkills = (
  data: Skill[],
  skillsMap: any,
  order: Order,
  orderBy: string,
  filterCategory: string,
  filterValue: string[]
) => {
  let notSorted = data.map((e, i) => {
    return {
      ...e,
      skillTransferList:
        e.skillTransferList && e.skillTransferList.length
          ? e.skillTransferList.map((e, i) =>
              e && skillsMap[e] ? skillsMap[e] : null
            )
          : []
    };
  });
  return stableSort(
    notSorted,
    getComparator(order, orderBy),
    filterCategory ? filterCategory : undefined,
    filterValue.length ? filterValue : undefined
  );
};

export const getDisplayForAgentGroups = (
  data: AgentGroup[],
  order: Order,
  orderBy: string,
  filterCategory: string,
  filterValue: string[]
) => {
  return stableSort(
    data,
    getComparator(order, orderBy),
    filterCategory ? filterCategory : undefined,
    filterValue.length ? filterValue : undefined
  );
};

export const getHeadCellsForUsers = (): UserHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "userTypeId", numeric: false, disablePadding, label: "Type" },
    { id: "loginName", numeric: false, disablePadding, label: "Login Name" },
    { id: "fullName", numeric: false, disablePadding, label: "Name" },
    { id: "maxChats", numeric: true, disablePadding, label: "Max Chats" },
    { id: "email", numeric: false, disablePadding, label: "Email" },
    { id: "skillIds", numeric: false, disablePadding, label: "Skills" },
    { id: "profileIds", numeric: false, disablePadding, label: "Profiles" },
    { id: "managerOf", numeric: false, disablePadding, label: "Manager Of" },
    { id: "isApiUser", numeric: false, disablePadding, label: "API User" }
  ];
};

export const getHeadCellsForProfiles = (): ProfileHeadCell[] => {
  const disablePadding: boolean = false;
  return [
    { id: "id", numeric: false, disablePadding, label: "Id" },
    { id: "name", numeric: false, disablePadding, label: "Name" },
    { id: "roleTypeName", numeric: false, disablePadding, label: "Role Type" },
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
    }
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

function stableSort<T>(
  array: T[],
  comparator: (a: T, b: T) => number,
  filterCategory?: string,
  filterValue?: string[]
) {
  const stabilizedThis = array.map((el, index) => [el, index] as [T, number]);
  // console.log("Stable Sort: ", stabilizedThis)
  stabilizedThis.sort((a, b) => {
    const order = comparator(a[0], b[0]);
    if (order !== 0) return order;
    return a[1] - b[1];
  });
  let m = stabilizedThis
  .filter(el => {
    if(!filterValue || !filterCategory) {
      return el; 
    } else {
      if (Array.isArray(el[0][filterCategory])) {
        let map = {};
        el[0][filterCategory].forEach(e => map[e] = true)
        for (let i = 0; i < filterValue.length; i++) {
          if(map[filterValue[i]]) {
            return el;
          }
        }
      } 
      else if (filterValue.indexOf(el[0][filterCategory]) !== -1) {
        return el;
      }
      else if(el[0][filterCategory] === true && filterValue.indexOf("Yes") > -1 || el[0][filterCategory] === false && filterValue.indexOf("No") > -1) {
        return el;
      }
    }
  })
  .map(el => el[0])
  // console.log(m)
  return m;
}

function getComparator<T extends keyof any>(
  order: Order,
  orderBy: T
): (a: Data, b: Data) => number {
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
