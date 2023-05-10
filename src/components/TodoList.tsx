/**
 * @component
 * TodoList：useQueryを使用してTodoリストのデータを取得して表示する
 */
import React from "react";
import { useQuery } from "react-query"; // useQueryカスタムフック：APIからデータを取得してデータの状態（ローディング、エラー、成功）を管理できる
import { fetchTodos } from "../api/todos";

const TodoList: React.FC = () => {
  // データ、読み込み中の状態、エラーの状態を取得する
  const { data, isLoading, error } = useQuery("todos", fetchTodos, {
    retry: false, // クエリの挙動制御：データ取得に失敗した場合のリトライ（再試行）を無効にする
  }) as {
    data: any;
    isLoading: boolean;
    error: Error | null;
  };

  // データが読み込み中の場合
  if (isLoading) {
    return <div>Loading...</div>;
  }

  // エラーが発生した場合
  if (error) {
    return <div>Error: {error.message}</div>;
  }

  // データが正常に取得された場合
  return (
    <ul>
      {data.map((todo: any) => (
        <li key={todo.id}>{todo.title}</li>
      ))}
    </ul>
  );
};

export default TodoList;
