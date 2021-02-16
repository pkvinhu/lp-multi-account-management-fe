import React, { useState, useEffect, ChangeEvent } from "react";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Button,
  Select,
} from "@material-ui/core";
import { useStyles } from "./style";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
interface UserFormProps {
  value: any;
  newForm: any;
  closeModal: any;
  profiles: any;
  skills: any;
  agentGroups: any;
}

const UserForm = ({
  value,
  newForm,
  closeModal,
  profiles,
  skills,
  agentGroups,
}: UserFormProps) => {
  const state = useSelector((state: RootState) => state);
  const stateAgentGroups = state.agentGroups;
  let [loginName, setLoginName] = useState("");
  let [name, setName] = useState("");
  let [nickName, setNickname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [agentType, setAgentType] = useState("Human");
  let [apiKey, setAPIKey] = useState("");
  let [messagingNumber, setMaxMessage] = useState(1);
  let [skill, setSkill] = useState([] as any);
  let [profile, setProfile] = useState([] as any);
  let [groupAssignment, setGroupAssignment] = useState([] as any);
  let [newPassword, setNewPassword] = useState("");
  let [passwordCheckString, setPasswordCheck] = useState("");

  const [skillsKeyArr, setSkillsKeyArr] = useState<string[]>([]);
  let [skillKeyObj, setSkillKeyObj] = useState([] as any);

  let [agentGroupsKeyArr, setAgentGroupsKeyArr] = useState<string[]>([]);
  let [agentGroupsObj, setAgentGroupsObj] = useState([] as any);

  let [profilesArrKey, setProfilesKeyArr] = useState<string[]>([]);
  let [profilesObj, setProfilesObj] = useState([] as any);
  const classes = useStyles();

  const handleMessageNo = (value: any) => {
    if (value > 1000) setMaxMessage(999);
    else if (value < 1) setMaxMessage(1);
    else setMaxMessage(value);
  };

  const mapping = (array, type) => {
    let keyArr: any = [];
    let keyObj: any = {};
    array.data.map((value) => {
      let obj = {};
      obj[value.name] = value.id;

      keyArr.push(value.name);
      keyObj[value.name] = value.id;
    });
    if (type === "skill") {
      setSkillsKeyArr(keyArr);
      setSkillKeyObj(keyObj);
    } else if (type === "profile") {
      setProfilesKeyArr(keyArr);
      setProfilesObj(keyObj);
    } else {
      setAgentGroupsObj(keyObj);
      setAgentGroupsKeyArr(keyArr);
    }
  };

  const handleUserFormChange = (
    event: ChangeEvent<{ value: unknown }>,
    value: any
  ) => {
    event.preventDefault();
    if (value === "Profile") {
      setProfile(event.target.value as string[]);
    } else if (value === "Group") {
      setGroupAssignment(event.target.value as string[]);
    } else setSkill(event.target.value as string[]);
  };

  let arr = [
    {
      value: loginName,
      function: setLoginName,
      label: "Login Name",
      type: "text",
      helperText: "Username for login purposes",
      searchForIt: "loginName",
    },
    {
      value: name,
      function: setName,
      label: "Name",
      type: "text",
      helperText: "",
      searchForIt: "name",
    },
    {
      value: nickName,
      function: setNickname,
      label: "Nick Name",
      type: "text",
      helperText:
        "This will displayed to customers during messaging conversations.",
      searchForIt: "nickName",
    },
    {
      value: email,
      function: setEmail,
      label: "Email",
      type: "email",
      helperText: "",
      searchForIt: "email",
    },

    {
      value: agentType,
      function: setAgentType,
      label: "Agent Type",
      type: "text",
      helperText: "",
      list: ["LPA All Access", "Bot Agents", "FaaS Functions"].sort(),
      password: {
        value: password,
        function: setPassword,
        label: "Password",
        type: "password",
        helperText: "",
        searchForIt: "password",
      },
      searchForIt: "isApiUser",
    },
    // {
    //   value: messagingNumber,
    //   function: handleMessageNo,
    //   label: "Max Amount of Messaging Conversations",
    //   type: "number",
    //   helperText: "Max amount of messaging conversations (0-999)",
    //   searchForIt: "messagingNumber",
    // },
    {
      value: profile,
      label: "Profile",
      function: setProfile,
      list: profilesArrKey.length > 0 ? profilesArrKey.sort() : [""],
      helperText: "Please select profile",
      searchForIt: "profile",
    },
    {
      value: skill,
      label: "Skills",
      function: setSkill,
      helperText: "Please select Skills",
      list: skillsKeyArr.length > 0 ? skillsKeyArr.sort() : [""],
      searchForIt: "skills",
    },
    {
      value: groupAssignment,
      label: "Group",
      function: setGroupAssignment,
      list: agentGroupsKeyArr.length > 0 ? agentGroupsKeyArr.sort() : [""],
      helperText: "Please select Group",
      searchForIt: "groupAssignment",
    },
  ];

  const updateState: any = () => {
    if (!newForm) {
      if (value.isApiUser) setAgentType("Bot");
      else setAgentType("Human");
    }

    if (value.memberOf === undefined || value.memberOf === null) {
      setGroupAssignment([""]);
    } else {
      let memberValue = value.memberOf.agentGroupId;
      let groupArr = [stateAgentGroups.map[memberValue]];
      setGroupAssignment(groupArr);
    }

    setLoginName(value.loginName);
    setName(value.fullName);
    setNickname(value.nickname);
    setEmail(value.email);
    // setAgentType(userInfo.agentType);
    setProfile(value.profileIds);
    // setMaxMessage(userInfo.messagingNumber);
    setSkill(value.skillIds);
  };

  const postCallExample = () => {
    const mapItOut: any = (obj, valueArr) => {
      let arr: any = [];

      for (let i = 0; i < valueArr.length; i++) {
        // console.log("VALUE: ", array[valueArr[i]]);
        if (obj[valueArr[i]]) {
          arr.push(obj[valueArr[i]]);
        }
      }
      return arr;
    };
    if (!newForm) {
      console.log({
        loginName,
        name,
        nickName,
        email,
        agentType,
        newPassword,
        passwordCheckString,
        skills: mapItOut(skillKeyObj, skill),
        profiles: mapItOut(profilesObj, profile),
        groupAssignment: mapItOut(agentGroupsObj, groupAssignment),
      });
    } else {
      console.log({
        loginName,
        name,
        nickName,
        email,
        agentType,
        password,
        skills: mapItOut(skillKeyObj, skill),
        profiles: mapItOut(profilesObj, profile),
        groupAssignment: mapItOut(agentGroupsObj, groupAssignment),
      });
    }
  };

  useEffect(() => {
    if (!newForm) {
      updateState();
    }

    mapping(profiles, "profile");
    mapping(skills, "skill");
    mapping(agentGroups, "agentGroup");
  }, []);

  return (
    <form className={classes.formCenter}>
      {newForm
        ? arr.map((state: any, idx: any) => {
            return (
              <div key={idx}>
                {state.label === "Agent Type" ? (
                  <span>
                    <TextField
                      select
                      required
                      fullWidth
                      value={state.value}
                      onChange={(event) => {
                        setAgentType(event.target.value);
                      }}
                      helperText={state.helperText}
                      className={classes.textFieldCenter}
                    >
                      <MenuItem value="Human">Human</MenuItem>
                      <MenuItem value="Bot">Bot</MenuItem>
                    </TextField>
                    <br />
                    {agentType === "Bot" ? (
                      <div>
                        <TextField
                          id="agentType"
                          select
                          required
                          fullWidth
                          value={apiKey}
                          onChange={(event) => {
                            setAPIKey(event.target.value);
                            setPassword("");
                          }}
                          helperText="Please select API Key for Bot User"
                          className={classes.textFieldCenter}
                        >
                          {state.list.map((list: any) => {
                            return <MenuItem value={list}>{list}</MenuItem>;
                          })}
                        </TextField>
                        <br />
                      </div>
                    ) : (
                      <span>
                        <TextField
                          required
                          fullWidth
                          className={classes.textFieldCenter}
                          label={state.password.label}
                          type={state.password.type}
                          helperText={state.password.helperText}
                          onChange={(event: any) => {
                            state.password.function(event.target.value);
                            setAPIKey("");
                          }}
                        />
                        <br />
                      </span>
                    )}
                  </span>
                ) : state.label === "Skills" ||
                  state.label === "Group" ||
                  state.label === "Profile" ? (
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel>{state.helperText}</InputLabel>
                      <Select
                        fullWidth
                        multiple
                        value={state.value}
                        onChange={(event: any) =>
                          handleUserFormChange(event, state.label)
                        }
                      >
                        {state.list.map((skill: any) => (
                          <MenuItem key={skill} value={skill}>
                            {skill}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br />
                  </div>
                ) : (
                  <span>
                    <TextField
                      required
                      fullWidth
                      className={classes.textFieldCenter}
                      label={state.label}
                      type={state.type}
                      helperText={state.helperText}
                      onChange={(event: any) =>
                        state.function(event.target.value)
                      }
                    />
                    <br />
                  </span>
                )}
              </div>
            );
          })
        : arr.map((state: any, idx: any) => {
            return (
              <div key={idx}>
                {state.label === "Agent Type" ? (
                  <span>
                    <TextField
                      required
                      fullWidth
                      disabled={true}
                      value={
                        value[state.searchForIt] === false ? "Human" : "Bot"
                      }
                      helperText={state.helperText}
                      className={classes.textFieldCenter}
                    >
                      <MenuItem value="Human">Human</MenuItem>
                      <MenuItem value="Bot">Bot</MenuItem>
                    </TextField>
                    <br />
                    {agentType === "Bot" ? (
                      <div>
                        <TextField
                          id="agentType"
                          select
                          required
                          fullWidth
                          value={apiKey}
                          disabled={true}
                          onChange={(event) => setAPIKey(event.target.value)}
                          helperText="Please select API Key for Bot User"
                          className={classes.textFieldCenter}
                        >
                          {state.list.map((list: any, idx: number) => {
                            return (
                              <MenuItem key={idx} value={list}>
                                {list}
                              </MenuItem>
                            );
                          })}
                        </TextField>
                        <br />
                      </div>
                    ) : (
                      //PASSWORD STUFF HERE
                      <span>
                        <TextField
                          fullWidth
                          className={classes.textFieldCenter}
                          label="Enter your new password here"
                          type="password"
                          // helperText={state.helperText}
                          onChange={(event: any) => {
                            //ask kevin this question
                            setAPIKey("void");
                            setNewPassword(event.target.value);
                          }}
                          value={newPassword}
                        />
                        <br />
                        <TextField
                          fullWidth
                          className={classes.textFieldCenter}
                          label="Please re-verify your password change here"
                          type="password"
                          // helperText={state.helperText}
                          onChange={(event: any) =>
                            setPasswordCheck(event.target.value)
                          }
                          value={passwordCheckString}
                        />
                        <br />
                      </span>
                    )}
                  </span>
                ) : state.label === "Skills" ||
                  state.label === "Group" ||
                  state.label === "Profile" ? (
                  <div>
                    <FormControl className={classes.formControl}>
                      <InputLabel>{state.helperText}</InputLabel>

                      <Select
                        fullWidth
                        multiple
                        value={state.value}
                        onChange={(event: any) =>
                          handleUserFormChange(event, state.label)
                        }
                      >
                        {state.list.map((skill: any) => (
                          <MenuItem key={skill} value={skill}>
                            {skill}
                          </MenuItem>
                        ))}
                      </Select>
                    </FormControl>
                    <br />
                  </div>
                ) : state.label === "Login Name" ? (
                  <TextField
                    required
                    fullWidth
                    disabled={true}
                    className={classes.textFieldCenter}
                    label={state.label}
                    type={state.type}
                    helperText={state.helperText}
                    value={value[state.searchForIt]}
                  />
                ) : (
                  <span>
                    <TextField
                      required
                      fullWidth
                      className={classes.textFieldCenter}
                      label={state.label}
                      type={state.type}
                      helperText={state.helperText}
                      onChange={(event: any) =>
                        state.function(event.target.value)
                      }
                      value={state.value}
                    />
                    <br />
                  </span>
                )}
              </div>
            );
          })}

      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.buttonCenter}
        onClick={(event) => {
          event.preventDefault();
          postCallExample();
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default UserForm;
