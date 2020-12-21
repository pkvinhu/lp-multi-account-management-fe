import { View } from "../../store/table/types";
import { setUserLoading } from "../../store/users/actions";
import { setSkillsLoading } from "../../store/skills/actions";
import { setProfileLoading } from "../../store/profiles/actions";
import { setAgentGroupsLoading } from "../../store/agentGroups/actions";

export const getLoadingAction = (view:View) => {
        switch(view) {
            case "users":
                return setUserLoading
            case "skills":
                return setSkillsLoading;
            case "profiles":
                return setProfileLoading;
            case "agentGroups":
                return setAgentGroupsLoading;
        }
}