import { useState } from "react";
import { Button } from "../Common/Button/Button";
import styles from "./TodoForm.module.scss";

/*
   props = {
    textSubmit : string 
  }
*/

/*
    CC1 - Form Handle
    - ใช้ FN ไปผูกกับ Event ชื่อ onSubmit
    - FN จะถูก Browser เรียกใช้ (เมื่อไหร่  ? ) โดยส่ง parameter มา 1 ตัว (event Obj) 
    - โดย default ทุกปุ่มใน <form> จะทำหน้าที่ submit
    - วิธีแก้ ต้องกำหนด type ของปุ่ม 
        type submit
        type 
    */

/*
    props = {
        textSubmit : string
        setIsOpenForm : FN    
    }
 */

function TodoForm(props) {
  const [isError, setIsError] = useState(false);
  const [taskInput, setTaskInput] = useState("");
  // console.log(taskInput);

  const handleChangeInput = function (event) {
    if (isError) setIsError(false);

    // console.log("user typing...", event.target.value);
    setTaskInput(event.target.value);
  };

  const handleSubmit = function (event) {
    // 1. PreventDefault
    event.preventDefault();
    // 2. รู้ก่อนว่า User พิมพ์อะไร (อยู่ใน state : taskInput)

    // 3. FormValidation
    // case 1 : submit ได้ => ไม่ error
    // case 2 : submit ไม่ได้ => แสดง Erro
    if (taskInput.trim() === "") {
      console.log("Error");
      setIsError(true);
      return;
    }
    console.log("submit");
  };

  const handleCancel = function () {
    console.log("cancel");
    // setIsOpenForm(false)
    // inCorrectName : undefined(false) => บู้มโกโก้ครั้นซ์
    props.setIsOpenForm(false);
  };
  return (
    <form className={styles.todo__form__container} onSubmit={handleSubmit}>
      {/*	Body */}
      <input
        className={styles.todo__form__input}
        placeholder="Task Name"
        value={taskInput}
        onChange={handleChangeInput}
      />

      {/*Form Footer */}
      <div className={styles.todo__form__footer}>
        {isError ? (
          <p className={styles.todo__error}>Title is required</p>
        ) : null}
        <div className={styles.todo__form__buttons}>
          <Button
            text="Cancel"
            active={false}
            type="button"
            onClick={handleCancel}
          />
          <Button text={props.textSubmit} active={true} type="submit" />
        </div>
      </div>
    </form>
  );
}

export default TodoForm;
