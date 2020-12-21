import { DataDisplay } from "../../store/table/types";

export const wait = async (ms: number, value: any) => {
    await new Promise(resolve => setTimeout(resolve, ms, value));
}

export const getUserById = (id: string|number, data: any) => {
    for(let i = 0; i < data.length; i++) {
        if(data[i].id === id) {
            return data[i];
        }
    }
}

export const filterType = (value) => Array.isArray(value) ? value.join(", ") : typeof value === "boolean" ? value ? "Yes" : "No" : value;

export const emptyRows = (rowsPerPage, rowCount, page) => {
    return rowsPerPage - Math.min(rowsPerPage, rowCount - page * rowsPerPage);
}

export const capitalize = (s) => s ? s[0].toUpperCase()+s.slice(1) : "";
