import { DataDisplay, View, Data, Entity } from "../../store/table/types";

export const wait = async (ms: number, value: any) => {
  await new Promise(resolve => setTimeout(resolve, ms, value));
};

export const getUserById = (id: string | number, data: any) => {
  for (let i = 0; i < data.length; i++) {
    if (data[i].id === id) {
      return data[i];
    }
  }
};

export const humanOrBot = (value: number | string) => {
  if (value == 1) {
    return "Bot";
  } else if (value == 2) {
    return "Human";
  } else {
    return "LP App";
  }
};
export const filterType = value =>
  Array.isArray(value)
    ? value.join(", ")
    : typeof value === "boolean"
    ? value
      ? "Yes"
      : "No"
    : value;

export const emptyRows = (rowsPerPage, rowCount, page) => {
  return rowsPerPage - Math.min(rowsPerPage, rowCount - page * rowsPerPage);
};

export const capitalize = s => (s ? s[0].toUpperCase() + s.slice(1) : "");

export const checkRowFromDeleteIconDisable = (
  view: View,
  row: any,
  campaigns?: any,
  roleCountMap?: any,
  userSkillMap?: any,
  profileSkillMap?: any
) => {
  if (view === "users") {
    return row.userTypeId < 1 || row.loginName === "API Agent" ? true : false;
  }
  if (view === "profiles") {
    return roleCountMap[row.roleTypeName] < 2 ||
      (row.description && row.description.startsWith("LivePerson")) ||
      (profileSkillMap[row.id] && profileSkillMap[row.id].length)
      ? true
      : false;
  }
  if (view === "agentGroups") {
    return row.id === -1 ? true : false;
  }
  if (view === "skills") {
      console.log(campaigns, userSkillMap)
    return (campaigns[row.id] && campaigns[row.id].length) ||
      (userSkillMap[row.id] && userSkillMap[row.id].length)
      ? true
      : false;
  }
};
