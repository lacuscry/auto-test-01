import React, {ChangeEvent, ChangeEventHandler, KeyboardEvent} from "react";
import s from "./Greeting.module.css";


type GreetingPropsType = {
    name: string
    setNameCallback: ChangeEventHandler<HTMLInputElement>
    addUser: () => void
    onBlur: (e: ChangeEvent) => void
    onEnter: (e: KeyboardEvent) => void
    error: string
    totalUsers: number
    lastUserName?: string
}


const Greeting: React.FC<GreetingPropsType> = (
    {
        name,
        setNameCallback,
        addUser,
        onEnter,
        onBlur,
        error,
        totalUsers,
        lastUserName,
    }
) => {
    return (
        <div id={"hw3-form"} className={s.greetingForm}>
            <div className={s.text}>
                {"Людей добавили: "}
                <span id={"hw3-users-total"}>
                    {totalUsers}
                </span>
            </div>

            <div className={s.inputAndButtonContainer}>
                <div className={s.inputWrapper}>
                    <input
                        id={"hw3-input"}
                        value={name}
                        onChange={setNameCallback}
                        className={s.input + (error ? ` ${s.errorInput}` : "")}
                        onKeyDown={onEnter}
                        onBlur={onBlur}
                    />
                    {error &&
                        <div id={"hw3-error"} className={s.error}>
                            {error}
                        </div>
                    }
                </div>
                <button id={"hw3-button"} onClick={addUser} className={s.button} disabled={!name.trim()}>
                    add
                </button>
            </div>
            {lastUserName && (
                <div className={s.greeting}>
                    Привет <span id={"hw3-last-user"}>{lastUserName}</span>!
                </div>
            )}
        </div>
    );
};


export default Greeting;