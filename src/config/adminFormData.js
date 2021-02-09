import { AddAccountForm, AddDatabaseUserForm, DeleteAccountForm, RequestAccountsForm } from "../components"

export const adminFormData =  {
    "add-user": {
        "title": "Adding a User",
        "description": "When you add a user, it is equivalent to signing them up for an account to use the Account Management Tool. Since this tool authenticates through LivePerson's SSO system, the login name and the email has to match the one they use to log on to LP Conversational Cloud. You can select whether or not they are a super user or a regular user. Only super users are permitted to add other users to grant them rights to use the tool.",
        "img": "",
        "component": AddDatabaseUserForm
    },
    "request-accounts": {
        "title": "Requesting Multiple Accounts to Be Added to Your View",
        "description": "This is a bulk add feature unique to this tool. The way that the Account Management Tool is able to access user data from multiple accounts is by creating an API Agent as a user on that account and give them api permissions to access what is needed from the management tool. Since users logged in to this tool do not have access to the accounts requesting through their login credentials, a bulk add can only be a requested action. Please upload a csv file with the following format. \n\nNote: When requesting an account with api agent credentials, please be sure that the login name is unique on that specific account. Otherwise, an error will be through and we will not be able to add that specific account. To guarantee uniqueness, we recommend appending your name in front of API Agent (ex: John-Doe-API-Agent). The accounts without error will be added within 48 hours of request.",
        "img": "",
        component: RequestAccountsForm
    },
    "add-account": {
        "title": "Adding a Single Account",
        "description": "You can choose to add a single account to your view if the API Agent (see: description in Request Account tab) associated to that account has already been created. Once the addition is confirmed, we will check that it is before adding the account to your view.",
        "img": "",
        component: AddAccountForm
    },
    "delete-account": {
        "title": "Delete Accounts",
        "description": "You are able to delete any number of accounts from your view. If you also want to delete the corresponding agent from the account being deleted, you'll have to request this deletion by uploading a csv in the following format.",
        "img": "",
        component: DeleteAccountForm
    }
}
