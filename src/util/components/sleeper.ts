export const wait = async (ms, value) => {
    await new Promise(resolve => setTimeout(resolve, ms, value));
}
