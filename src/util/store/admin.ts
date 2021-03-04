export const verifyAgent = (apiAgent, data, adminId) => {
    let findAgent = data.filter((user, ind) => user.loginName === apiAgent.loginName);
    if(!findAgent.length) {
        return { error: "Agent does not exist!", message: "" }
    }

    let isAdmin = findAgent[0].profileIds.length ? findAgent.profileIds.filter((prof, ind) => prof === adminId) : null;
    if(!isAdmin) {
        return { error: "Agent needs to be granted Administrator Role!", message: "" }
    }
    console.log(findAgent[0]);
    return { message: "Agent is Verified!", error: "" }
}