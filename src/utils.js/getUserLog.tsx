export const getUserLog = (task: string | React.ChangeEvent<HTMLInputElement>, action: string, user: string = "user") => {
  const currentDate = new Date();

  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString();
  const day = currentDate.getDate().toString();
  const hour = currentDate.getHours().toString();
  const minute = currentDate.getMinutes().toString();
  const second = currentDate.getSeconds().toString();

  const formattedLog = `${year}-${month}-${day} ${hour}-${minute}-${second} INFO: Task '${task}' ${action} by ${user}`;

  return formattedLog;
};
