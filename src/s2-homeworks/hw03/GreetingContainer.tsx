import {ChangeEvent, FC, KeyboardEvent, useState} from "react";
import Greeting from "./Greeting";
import {UserType} from "./HW3";


type GreetingContainerPropsType = {
    users: UserType[]
    addUserCallback: (name: string) => void
}


export const pureAddUser = (name: string, setError: (text: string) => void, setName: (name: string) => void, addUserCallback: (name: string) => void) => {
    if (name) {
        addUserCallback(name);

        setName("");
    } else {
        setError("Ошибка! Введите имя!");
    }
};

export const pureOnBlur = (name: string, setError: (text: string) => void) => {
    !name && setError("Ошибка! Введите имя!");
};

export const pureOnEnter = (e: KeyboardEvent, addUser: () => void) => {
    e.code === "Enter" && addUser();
};

const GreetingContainer: FC<GreetingContainerPropsType> = ({users, addUserCallback}) => {
    const [name, setName] = useState<string>("");
    const [error, setError] = useState<string>("");


    const setNameCallback = (e: ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);

        error && setError("");
    };

    const addUser = () => {
        pureAddUser(name, setError, setName, addUserCallback);
    };

    const onBlur = () => {
        pureOnBlur(name, setError);
    };

    const onEnter = (e: KeyboardEvent) => {
        pureOnEnter(e, addUser);
    };


    const totalUsers = users.length;
    const lastUserName = users[users.length - 1]?.name;


    return (
        <Greeting
            name={name}
            setNameCallback={setNameCallback}
            addUser={addUser}
            onBlur={onBlur}
            onEnter={onEnter}
            error={error}
            totalUsers={totalUsers}
            lastUserName={lastUserName}
        />
    );
};


export default GreetingContainer;