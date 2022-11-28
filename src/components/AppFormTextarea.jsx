import { Flex, FormControl, FormLabel, Textarea } from "@chakra-ui/react"
import { Field, Form } from "formik"
import { colors } from "../styles/colors"

export default function AppForm({ field, form, values, handleChange }) {
    console.log(values)

    return (

        <Form >

            <Field>
                {({ field, form }) =>
                    <FormControl
                        marginBottom="1.2rem"
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
                            // value={values.initialValues.message}
                            resize="none"
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
            <Flex justifyContent="flex-end" >

            </Flex>
        </Form>

    )
}