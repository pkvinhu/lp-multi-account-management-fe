import React, { useState, useEffect, ChangeEvent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { classes } from "./style";
import CloseIcon from "@material-ui/icons/Close";

const FormParent = () => {
  const [open, setOpen] = useState(false);
  const [neworEditForm, setFormChoice] = useState(true);
  const [whatFormType, setFormType] = useState("");

  const user = "user";
  const agentGroup = "agentGroup";
  const skill = "skill";
  const agentProfile = "profile";

  const handleOpen: any = () => {
    setOpen(true);
  };

  const handleClose: any = () => {
    setOpen(false);
    setFormChoice(true);
  };

  return (
    <div>
      <h1>hi</h1>
    </div>
  );
};

export {};
