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

interface AgentGroupFormProps {
  value: any;
  newForm: any;
  closeModal: any;
  agentGroups: any;
}

const AgentGroupForm = ({
  value,
  newForm,
  closeModal,
  agentGroups,
}: AgentGroupFormProps) => {
  const classes = useStyles();
  const [id, setId] = useState(1);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [parentGroupId, setParentGroupId] = useState("");

  const updateState: any = () => {
    if (!newForm) {
      setId(value.id);
      setName(value.name);
      setDescription(value.description);
      setParentGroupId(value.parentGroupId);
    }
  };

  const [groupKeyArr, setGroupKeyArr] = useState<string[]>([]);
  let [groupObj, setGroupKeyObj] = useState([] as any);

  const availGroupMapping = (array) => {
    if (array.length < 1) {
      setGroupKeyArr(["Main Group"]);
      setGroupKeyObj({ "Main Group": -1 });
    }
    let keyArr: any = [];
    let keyObj: any = {};
    array.data.map((value) => {
      let obj = {};
      obj[value.name] = value.id;

      keyArr.push(value.name);
      keyObj[value.name] = value.id;
    });
    setGroupKeyArr(keyArr);
    setGroupKeyObj(keyObj);
  };

  useEffect(() => {
    updateState();
    availGroupMapping(agentGroups);
  }, []);

  let agentGroupObj = [
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
      value: parentGroupId,
      function: setParentGroupId,
      label: "Parent Group",
      type: "text",
      searchForIt: "parentGroupId",
      list: groupKeyArr.sort(),
    },
  ];
  return (
    <form className={classes.formCenter}>
      {newForm
        ? agentGroupObj.map((field: any, idx: any) => {
            return field.searchForIt === "parentGroupId" ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(event: any) => {
                      setParentGroupId(event.target.value);
                    }}
                  >
                    {field.list.map((skill: any) => (
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
                  type={field.type}
                  label={field.label}
                  value={field.value}
                  onChange={(event: any) => field.function(event.target.value)}
                />
                <br />
              </span>
            );
          })
        : agentGroupObj.map((field: any, idx: any) => {
            return field.searchForIt === "description" ? (
              <span key={idx}>
                <TextField
                  required
                  fullWidth
                  className={classes.textFieldCenter}
                  type={field.type}
                  label={field.label}
                  onChange={(event: any) => field.function(event.target.value)}
                  value={field.value}
                />
                <br />
              </span>
            ) : field.searchForIt === "parentGroupId" && value.id !== -1 ? (
              <span>
                <FormControl className={classes.formControl}>
                  <InputLabel>{field.label}</InputLabel>
                  <Select
                    fullWidth
                    value={field.value}
                    onChange={(event: any) => {
                      setParentGroupId(event.target.value);
                    }}
                  >
                    {field.list.map((skill: any) => (
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
                  disabled={true}
                  fullWidth
                  className={classes.textFieldCenter}
                  type={field.type}
                  label={field.label}
                  value={field.value}
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

          if (newForm) {
            console.log({
              name,
              description,
              parentGroup: groupObj[parentGroupId],
            });
          } else
            console.log({
              id,
              name,
              description,
              parentGroup: groupObj[parentGroupId],
            });
        }}
      >
        Submit
      </Button>
    </form>
  );
};

export default AgentGroupForm;
