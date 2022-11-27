import { Box, FormControl, Input, Textarea, FormLabel, Flex } from '@chakra-ui/react';
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import { colors } from '../styles/colors';
import AppButton from './AppButton';
import AppButtonPrimary from './AppButtonPrimary';


export default function AppForm() {

    const handleSubmit = ((values) => {
        console.log(values)
    })

    const data = { email: '', name: '', mesage: '' }
    const validation = Yup.object({
        name: Yup.string()
            .matches(/^[aA-zZ\s]+$/, "Cannot contain any special symbols or numbers")
            .required("Name is required")
            .max(30, "cannot be more than 30 characters"),
        email: Yup.string()
            .email("Has to be a valid email")
            .required("Email is required")
            .max(25, "Cannot contain more than 25 characters"),
        message: Yup.string().required("Required"),
    });

    return (
        <Flex >
            <Formik
                validationSchema={validation}
                initialValues={data}
                onSubmit={handleSubmit}
            >
                {(values, handleChange) => {
                    return (
                        <Form >
                            <Field >
                                {({ field, form }) =>
                                    <FormControl
                                        borderRadius="0.5rem"
                                        border={`2px solid ${colors.primaryVariant}`}
                                        marginBottom="1.2rem"
                                        variant="floating"
                                        // isRequired
                                        isInvalid={
                                            values.errors.name &&
                                            values.touched.name
                                        }
                                    >
                                        <Input
                                            _hover={{ border: "2px solid transparent" }}
                                            border="2px solid transparent"
                                            padding="1.5rem"
                                            w="30rem"
                                            _focus={{ border: "1px solid transparent" }}
                                            placeholder=" "
                                            name="name"
                                            onChange={handleChange} />
                                        <FormLabel
                                            color="gray"
                                        >
                                            Name
                                        </FormLabel>
                                    </FormControl>
                                }
                            </Field>
                            <Field>
                                {({ field, form }) =>
                                    <FormControl
                                        borderRadius="0.5rem"
                                        border={`2px solid ${colors.primaryVariant}`}
                                        marginBottom="1.2rem"
                                        variant="floating"
                                        // isRequired
                                        isInvalid={
                                            values.errors.email &&
                                            values.touched.email
                                        }
                                    >
                                        <Input
                                            _hover={{ border: "2px solid transparent" }}
                                            border="2px solid transparent"
                                            padding="1.5rem"
                                            type="email"
                                            _focus={{ border: "1px solid transparent" }}
                                            placeholder=" "
                                            name="email"
                                            onChange={handleChange} />
                                        <FormLabel
                                            color="gray"
                                        >
                                            Email
                                        </FormLabel>
                                    </FormControl>
                                }
                            </Field>
                            <Field>
                                {({ field, form }) =>
                                    <FormControl
                                        borderRadius="0.5rem"
                                        border={`2px solid ${colors.primaryVariant}`}
                                        variant="floating"
                                        // isRequired
                                        isInvalid={
                                            values.errors.message &&
                                            values.touched.message
                                        }
                                    >
                                        <Textarea
                                            _hover={{ border: "2px solid transparent" }}
                                            border="2px solid transparent"
                                            padding="1.5rem"
                                            h="20rem"
                                            _focus={{ border: "1px solid transparent" }}
                                            placeholder=" "
                                            name="message"
                                            onChange={handleChange} />
                                        <FormLabel
                                            color="gray"
                                        >
                                            Message
                                        </FormLabel>
                                    </FormControl>
                                }
                            </Field>

                            <AppButtonPrimary text="Send Message" type='submit' />

                        </Form>
                    );
                }}
            </Formik>
        </Flex>

    )


}