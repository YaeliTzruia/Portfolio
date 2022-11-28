import { FormControl, FormLabel, Input } from "@chakra-ui/react";
import { Field, Form, Formik } from "formik";
import { data } from "../data/initialValues";
import { validation } from "../data/validationSchema";
import { colors } from "../styles/colors";

export default function AppFormField({ data, field, form, values, handleChange }) {

    // const randomId = Math.floor(Math.random() * 100)



    const handleSubmit = ((values) => {
        console.log(values)
    })



    return (

        <Form >


            <FormControl
                borderRadius="0.5rem"
                border={`2px solid ${colors.primaryVariant}`}
                marginBottom="1.2rem"
                variant="floating"
            // isRequired
            // isInvalid={
            //     `values.errors.${data.name}` &&
            //     `values.touched.${data.name}`
            // }
            >
                <Input

                    _hover={{ border: "2px solid transparent" }}
                    border="2px solid transparent"
                    padding="1.5rem"
                    w="30rem"
                    _focus={{ border: "1px solid transparent" }}
                    placeholder=" "
                    name={data.name}
                    onChange={handleChange} />
                <FormLabel
                    color="gray"
                >
                    {data.name}
                </FormLabel>
            </FormControl>


        </Form>

    )
}