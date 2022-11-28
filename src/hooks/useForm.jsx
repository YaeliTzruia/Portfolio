import { useState } from "react";

export default function useForm() {

    const initialData = { email: "", name: "", message: "" };

    let [formvalue, setFormValue] = useState(initialData);

    const handleSubmitForm = (value) => {
        setFormValue((prev) => ({ ...prev, ...value }));
        console.log(value, "value");


        makeRequest(value);
        return;


    };

    const makeRequest = (value) => {
        console.log("form Submitted", value);

    };

    return {
        handleSubmitForm, initialData
    }
}