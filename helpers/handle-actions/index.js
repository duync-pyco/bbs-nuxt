const handleAction = async (vueContext, fn) => {
  try {
    const res = await fn();
    return res;
  } catch (error) {
    // TODO: handle action here
  }
};

export default handleAction;
