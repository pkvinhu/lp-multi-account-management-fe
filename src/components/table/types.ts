import { User } from '../../store/users/types';
import { Profile } from '../../store/profiles/types';
import { Skill } from '../../store/skills/types';
import { AgentGroup } from '../../store/agentGroups/types';

export type Order = "asc" | "desc";

// export interface Data {
//   calories: number;
//   carbs: number;
//   fat: number;
//   name: string;
//   protein: number;
// }

interface UserHeadCell {
  disablePadding: boolean;
  id: keyof User;
  label: string;
  numeric: boolean;
}

interface SkillHeadCell {
    disablePadding: boolean;
    id: keyof Skill;
    label: string;
    numeric: boolean;
}

interface ProfileHeadCell {
    disablePadding: boolean;
    id: keyof Profile;
    label: string;
    numeric: boolean;
}

interface AgentGroupHeadCell {
    disablePadding: boolean;
    id: keyof AgentGroup;
    label: string;
    numeric: boolean;
}

export type Data = User | Skill | Profile | AgentGroup;
export type HeadCell = UserHeadCell | SkillHeadCell | ProfileHeadCell | AgentGroupHeadCell;
