import React from "react";
import "./App.css";
import { SubmitHandler, useForm } from "react-hook-form";
import { useAppSelector, useAppDispatch } from "./app/hooks";
import { sliceOne } from "./store/slice";

enum GenderEnum {
  female = "female",
  male = "male",
  other = "other",
}

interface IFormInput {
  firstName: String;
  gender: GenderEnum;
}

function App() {
  const { register, handleSubmit } = useForm<IFormInput>();
  const storeData = useAppSelector((state: any) => state);
  const dispatch = useAppDispatch();

  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    dispatch(sliceOne(data));
  };

  const isShow = !!storeData.rootReducer.main;
  return (
    <div className="App">
      <main className="App-main">
        <>
          <h2>Тестовое приложение Redux Toolkit</h2>
          <div className="App-form">
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="App-form-container"
            >
              <label className="App-form-item">First Name</label>
              <input {...register("firstName")} className="App-form-item" />
              <label className="App-form-item">Gender Selection</label>
              <select {...register("gender")} className="App-form-item">
                <option value="female">female</option>
                <option value="male">male</option>
                <option value="other">other</option>
              </select>
              <input className="App-form-item" type="submit" />
            </form>
          </div>
          {isShow && (
            <p>
              {storeData.rootReducer.main.firstName +
                ", " +
                storeData.rootReducer.main.gender}
            </p>
          )}
        </>
      </main>
    </div>
  );
}

export default App;
