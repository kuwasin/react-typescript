type TodoType = {
  userId: number;
  title: string;
  completed: boolean;
};

export const Todo = (props) => {
  const { title, userid, completed } = props;
  const completeMark = completed ? "[完]" : "[未]";
  return <p>{`${title}(ユーザー：${userid})`}</p>;
};
