import React, { useState, useEffect, ChangeEvent } from "react";
import { Modal, Backdrop, Fade } from "@material-ui/core";
import { useStyles } from "./style";
import CloseIcon from "@material-ui/icons/Close";
import { View } from "../../store/table/types";
import UserForm from "./UserForm";
import SkillForm from "./SkillForm";
import AgentGroupForm from "./AgentGroupForm";
interface EnhancedFormParentProps {
  view: View;
  setOpenModal: any;
  setFormChoice: any;
  closeModal: any;
  openModal: any;
  neworEditForm: any;
  value: any;
  setNewOrEdit: any;
  newForm: any;
  profiles: any;
  skills: any;
  agentGroups: any;
}

const FormParent = ({
  view,
  setOpenModal,
  setFormChoice,
  closeModal,
  openModal,
  neworEditForm,
  setNewOrEdit,
  newForm,
  value,
  profiles,
  skills,
  agentGroups,
}: EnhancedFormParentProps) => {
  const classes = useStyles();
  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      className={classes.modal}
      open={openModal}
      onClose={closeModal}
      closeAfterTransition
      BackdropComponent={Backdrop}
      BackdropProps={{
        timeout: 500,
      }}
    >
      <Fade in={openModal}>
        <div className={classes.paper}>
          <CloseIcon className={classes.closeButton} onClick={closeModal} />
          {view === "skills" ? (
            <SkillForm
              value={value}
              closeModal={closeModal}
              newForm={newForm}
              skills={skills}
            />
          ) : view === "agentGroups" ? (
            <AgentGroupForm
              value={value}
              closeModal={closeModal}
              newForm={newForm}
              agentGroups={agentGroups}
            />
          ) : view === "profiles" ? (
            <h1>profile</h1>
          ) : (
            <UserForm
              value={value}
              closeModal={closeModal}
              newForm={newForm}
              profiles={profiles}
              skills={skills}
              agentGroups={agentGroups}
            />
          )}
          {newForm === true ? <h1>new form</h1> : <h1>edit form</h1>}
        </div>
      </Fade>
    </Modal>
  );
};

export default FormParent;
