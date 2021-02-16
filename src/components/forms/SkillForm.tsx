import React, { useState, useEffect, ChangeEvent } from "react";
import {
  FormControl,
  FormLabel,
  InputLabel,
  MenuItem,
  Button,
  Select,
  FormControlLabel,
} from "@material-ui/core";
import { useStyles } from "./style";
import TextField from "@material-ui/core/TextField";
import { makeStyles } from "@material-ui/core/styles";
import { useSelector } from "react-redux";
import { RootState } from "../../store";
import Radio, { RadioProps } from "@material-ui/core/Radio";
import clsx from "clsx";
import RadioGroup from "@material-ui/core/RadioGroup";
interface SkillFormProps {
  value: any;
  newForm: any;
  closeModal: any;
  skills: any;
}

const StyledRadio = (props: RadioProps) => {
  const classes = useStyles();

  return (
    <Radio
      className={classes.root}
      disableRipple
      color="default"
      checkedIcon={<span className={clsx(classes.icon, classes.checkedIcon)} />}
      icon={<span className={classes.icon} />}
      {...props}
    />
  );
};

const SkillForm = ({ value, newForm, closeModal, skills }: SkillFormProps) => {
  const classes = useStyles();
  console.log({ value, newForm, closeModal });
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [canTransfer, setTransferChoice] = useState(true);
  const [skillTransferList, setSkillTransferList] = useState<string[]>([]);
  const [
    fallbackWhenAllAgentsAreAway,
    setFallbackWhenAllAgentsAreAway,
  ] = useState(true);
  const [maxWaitTime, setMaxWaitTime] = useState(1);
  const [autoCloseinSeconds, setAutoCloseInSeconds] = useState(5);
  const [fallbackSkill, setFallbackSkill] = useState<string[]>([""]);
  const [slaDefaultResponseTime, setSLADefaultResponseTime] = useState(1);
  const [slaUrgentResponseTime, setSLAUrgentResponseTime] = useState(1);
  const [slaFirstTimeResponseTime, setSLAFirstTimeResponseTime] = useState(1);
  const [skillsKeyArr, setSkillsKeyArr] = useState<string[]>([]);
  let [skillKeyObj, setSkillKeyObj] = useState([] as any);

  const updateState: any = () => {
    const secondsToMinutes = (value) => {
      let minute = value / 60;
      return Math.ceil(minute);
    };
    setId(value.id);
    setName(value.name);
    setDescription(value.description);
    setTransferChoice(value.canTransfer);
    setSkillTransferList(value.skillTransferList);
    setAutoCloseInSeconds(secondsToMinutes(value.autoCloseInSeconds));
    setMaxWaitTime(secondsToMinutes(value.maxWaitTime));
    setFallbackWhenAllAgentsAreAway(value.fallbackWhenAllAgentsAreAway);
    if (value.fallbackWhenAllAgentsAreAway) {
      setFallbackSkill(value.fallbackSkill);
    }
    if (value.slaDefaultResponseTime) {
      setSLADefaultResponseTime(secondsToMinutes(value.slaDefaultResponseTime));
    }
    if (value.slaUrgentResponseTime) {
      setSLAUrgentResponseTime(secondsToMinutes(value.slaUrgentResponseTime));
    }
    if (value.slaFirstTimeResponseTime) {
      setSLAFirstTimeResponseTime(
        secondsToMinutes(value.slaFirstTimeResponseTime)
      );
    }
  };

  const availSkillsMapping = (array) => {
    if (array.length < 1) {
      setSkillsKeyArr([""]);
      setSkillKeyObj({});
    }
    let keyArr: any = [];
    let keyObj: any = {};
    array.data.map((value) => {
      let obj = {};
      obj[value.name] = value.id;

      keyArr.push(value.name);
      keyObj[value.name] = value.id;
    });
    setSkillsKeyArr(keyArr);
    setSkillKeyObj(keyObj);
  };

  useEffect(() => {
    if (!newForm) updateState();
    availSkillsMapping(skills);
  }, []);

  let skillObj = [
    {
      value: name,
      function: setName,
      label: "Name",
      type: "text",
      searchForIt: "name",
    },
    {
      value: description,
      function: setDescription,
      label: "Description",
      type: "text",
      searchForIt: "description",
    },
    {
      value: canTransfer,
      function: setTransferChoice,
      label: "Transfer to Other Skills?",
      type: "radio",
      searchForIt: "canTransfer",
      list: [true, false],
    },
    {
      value: skillTransferList,
      function: setSkillTransferList,
      label: "List of Skills to transfer to",
      helperText: "List of Skills to transfer to",
      type: "text",
      list: skillsKeyArr.sort(),
      searchForIt: "skillTransferList",
    },
    {
      value: maxWaitTime,
      function: setMaxWaitTime,
      label: "maxWaitTime(should be minute)",
      helperText: "1 = 60 seconds",
      type: "number",
      searchForIt: "maxWaitTime",
    },
    {
      value: autoCloseinSeconds,
      function: setAutoCloseInSeconds,
      label: "autoCloseinSeconds(should be minute)",
      helperText: "1 = 60 seconds",
      type: "number",
      searchForIt: "autoCloseinSeconds",
    },
    {
      value: fallbackWhenAllAgentsAreAway,
      function: setFallbackWhenAllAgentsAreAway,
      label: "fallbackWhenAllAgentsAreAway",
      type: "text",
      helperText: "fallbackWhenAllAgentsAreAway",
      searchForIt: "fallbackWhenAllAgentsAreAway",
    },
    {
      value: fallbackSkill,
      function: setFallbackSkill,
      label: "fallbackSkill",
      type: "text",
      list: skillsKeyArr.sort(),
      helperText: "Fallback Skill",
      searchForIt: "fallbackSkill",
    },
    {
      value: slaDefaultResponseTime,
      function: setSLADefaultResponseTime,
      label: "slaDefaultResponseTime(should be minute)",
      helperText: "1 = 60 seconds",
      type: "number",
      searchForIt: "slaDefaultResponseTime",
    },
    {
      value: slaUrgentResponseTime,
      function: setSLAUrgentResponseTime,
      label: "slaUrgentResponseTime(should be minute)",
      helperText: "1 = 60 seconds",
      type: "number",
      searchForIt: "slaUrgentResponseTime",
    },
    {
      value: slaFirstTimeResponseTime,
      function: setSLAFirstTimeResponseTime,
      label: "slaFirstTimeResponseTime(should be minute)",
      helperText: "1 = 60 seconds",
      type: "number",
      searchForIt: "slaFirstTimeResponseTime",
    },
  ];
  return (
    <form className={classes.formCenter}>
      {newForm
        ? skillObj.map((skill: any, idx: any) => {
            return skill.searchForIt === "canTransfer" ? (
              <span key={idx}>
                <FormControl className={classes.textFieldCenter}>
                  <FormLabel style={{ textDecoration: "none", color: "black" }}>
                    Transfer to Other Skills?
                  </FormLabel>
                  <RadioGroup row defaultValue="true">
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={true}
                      label="true"
                      onClick={() => setTransferChoice(true)}
                    />
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={false}
                      label="false"
                      onClick={() => setTransferChoice(false)}
                    />
                  </RadioGroup>
                </FormControl>
              </span>
            ) : skill.searchForIt === "fallbackSkill" ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{skill.helperText}</InputLabel>
                  <Select
                    fullWidth
                    value={skill.value}
                    disabled={fallbackWhenAllAgentsAreAway ? false : true}
                    onChange={(event: any) => {
                      setFallbackSkill(event.target.value as string[]);
                      console.log(fallbackSkill);
                    }}
                  >
                    {skill.list.map((skill: any) => (
                      <MenuItem key={skill} value={skill}>
                        {skill}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
              </span>
            ) : skill.searchForIt === "fallbackWhenAllAgentsAreAway" ? (
              <span key={idx}>
                <FormControl className={classes.textFieldCenter}>
                  <FormLabel style={{ textDecoration: "none", color: "black" }}>
                    Fallback to Another Skill?
                  </FormLabel>
                  <RadioGroup row defaultValue="true">
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={true}
                      label="true"
                      onClick={() => setFallbackWhenAllAgentsAreAway(true)}
                    />
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={false}
                      label="false"
                      onClick={() => setFallbackWhenAllAgentsAreAway(false)}
                    />
                  </RadioGroup>
                </FormControl>
              </span>
            ) : skill.searchForIt === "skillTransferList" ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{skill.helperText}</InputLabel>
                  <Select
                    fullWidth
                    multiple
                    value={skill.value}
                    disabled={canTransfer ? false : true}
                    onChange={(event: any) =>
                      setSkillTransferList(event.target.value as string[])
                    }
                  >
                    {skill.list.map((skill: any) => (
                      <MenuItem key={skill} value={skill}>
                        {skill}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
              </span>
            ) : (
              <span key={idx}>
                <TextField
                  required
                  fullWidth
                  className={classes.textFieldCenter}
                  type={skill.type}
                  label={skill.label}
                  helperText={skill.helperText}
                  onChange={(event: any) => skill.function(event.target.value)}
                  // value={skillInfo[skill.searchForIt]}
                  value={skill.value}
                />
                <br />
              </span>
            );
          })
        : skillObj.map((skill: any, idx: any) => {
            return skill.searchForIt === "canTransfer" ? (
              <span key={idx}>
                <FormControl className={classes.textFieldCenter}>
                  <FormLabel style={{ textDecoration: "none", color: "black" }}>
                    Transfer to Other Skills?
                  </FormLabel>
                  <RadioGroup row defaultValue="true">
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={true}
                      label="true"
                      onClick={() => setTransferChoice(true)}
                    />
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={false}
                      label="false"
                      onClick={() => setTransferChoice(false)}
                    />
                  </RadioGroup>
                </FormControl>
              </span>
            ) : skill.searchForIt === "fallbackSkill" ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{skill.helperText}</InputLabel>
                  <Select
                    fullWidth
                    value={skill.value}
                    disabled={fallbackWhenAllAgentsAreAway ? false : true}
                    onChange={(event: any) => {
                      setFallbackSkill(event.target.value as string[]);
                      console.log(fallbackSkill);
                    }}
                  >
                    {skill.list.map((skill: any) => (
                      <MenuItem key={skill} value={skill}>
                        {skill}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
              </span>
            ) : skill.searchForIt === "fallbackWhenAllAgentsAreAway" ? (
              <span key={idx}>
                <FormControl className={classes.textFieldCenter}>
                  <FormLabel style={{ textDecoration: "none", color: "black" }}>
                    Fallback to Another Skill?
                  </FormLabel>
                  <RadioGroup row defaultValue="true">
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={true}
                      label="true"
                      onClick={() => setFallbackWhenAllAgentsAreAway(true)}
                    />
                    <FormControlLabel
                      control={<StyledRadio />}
                      value={false}
                      label="false"
                      onClick={() => setFallbackWhenAllAgentsAreAway(false)}
                    />
                  </RadioGroup>
                </FormControl>
              </span>
            ) : skill.searchForIt === "skillTransferList" ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{skill.helperText}</InputLabel>
                  <Select
                    fullWidth
                    multiple
                    value={skill.value}
                    disabled={canTransfer ? false : true}
                    onChange={(event: any) =>
                      setSkillTransferList(event.target.value as string[])
                    }
                  >
                    {skill.list.map((skill: any) => (
                      <MenuItem key={skill} value={skill}>
                        {skill}
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <br />
              </span>
            ) : skill.label === "Name" ? (
              <span key={idx}>
                <TextField
                  required
                  disabled
                  fullWidth
                  className={classes.textFieldCenter}
                  type={skill.type}
                  label={skill.label}
                  helperText={skill.helperText}
                  value={value[skill.searchForIt]}
                />
                <br />
              </span>
            ) : (
              <span key={idx}>
                {console.log("SKILL OBJ: ", typeof skillObj)}
                <TextField
                  required
                  fullWidth
                  className={classes.textFieldCenter}
                  type={skill.type}
                  label={skill.label}
                  helperText={skill.helperText}
                  onChange={(event: any) => skill.function(event.target.value)}
                  // value={skillInfo[skill.searchForIt]}
                  value={skill.value}
                />
                <br />
              </span>
            );
          })}
      <Button
        type="submit"
        variant="contained"
        color="primary"
        className={classes.buttonCenter}
        onClick={(event) => {
          event.preventDefault();
          console.log({
            id,
            name,
            description,
            canTransfer,
            skillTransferList,
            fallbackWhenAllAgentsAreAway,
            autoCloseinSeconds,
            fallbackSkill,
            slaDefaultResponseTime,
            slaUrgentResponseTime,
            slaFirstTimeResponseTime,
            skillsKeyArr,
            skillKeyObj,
            maxWaitTime,
          });
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default SkillForm;
