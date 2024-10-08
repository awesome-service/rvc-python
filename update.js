const APP_NAME = "rvc-python";
const ENV_PATH = "env";

module.exports = {
  run: [
    {
      method: "shell.run",
      params: {
        venv: ENV_PATH, // Edit this to customize the venv folder path
        path: APP_NAME,
        message: ["git pull"],
      },
    },
    {
      method: "notify",
      params: {
        html: `Click the 'start ${APP_NAME}' tab to get started!`,
      },
    },
  ],
};
