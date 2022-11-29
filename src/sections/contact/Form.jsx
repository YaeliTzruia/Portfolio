
import { FormControl, Input, Textarea, FormLabel, Flex, useToast, Box, Heading, Text } from '@chakra-ui/react';
import { useFormik } from "formik";
import { forwardRef, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';


import { colors } from '../../styles/colors';
import AppButtonPrimary from '../../components/AppButtonPrimary';
import { validationShema } from '../../data/validationSchema';




export default function DisplayForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageSent, setMessageSent] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    const [error, setError] = useState(null)
    const [content, setContent] = useState("");
    const characterLimit = 500;


    const form = useRef()
    const toastIdRef = useRef()
    const toastIdErrorRef = useRef()
    const toast = useToast()

    function toastSuccsess() {
        toastIdRef.current = toast({
            description: 'some text', position: 'top-center', render: () => (
                <Box marginTop="10rem" textAlign="center" color='white' p={3} bg={colors.primaryVariant} borderRadius="0.6rem" border={`1px solid ${colors.primary}`}>
                    <Heading fontSize="1rem" as="h3">Thank you for your message</Heading>
                    <Text fontSize="0.8rem">I will get back to you shortly</Text>
                </Box>
            ),
        })
    }

    function toastError() {
        toastIdErrorRef.current = toast({
            description: 'some text', position: 'top-center', render: () => (
                <Box marginTop="10rem" textAlign="center" color='white' p={3} bg="red.200" borderRadius="0.6rem" border={`1px solid ${colors.primary}`}>
                    <Heading fontSize="1rem" as="h3">Something went Wrong</Heading>
                    <Text fontSize="0.8rem">Please select another form of contact or try again later</Text>
                </Box>
            ),
        })
    }


    const handleLimitChange = (event) => {
        if (characterLimit - event.target.value.length >= 0) {
            setContent(event.target.value);
            setIsDisabled(false);
        } else if (characterLimit - event.target.value.length <= 0) {
            setIsDisabled(true);
        }
    };

    const sendEmail = (resetForm) => {
        // e.preventDefault();
        emailjs.sendForm('service_4j4l51h', 'template_zse0jtb', form.current, 'jeFu9bVnz-Ilz9T0c')
            .then((result) => {
                setError(false)
                toastSuccsess()
                resetForm({ values: "" });
                setContent("");
                setMessageSent(true)
                setIsSubmitting(false);
                setMessageSent(false)
                setIsDisabled(false)

            }, (error) => {
                setError(true)
                console.log(error.text);
                setIsSubmitting(false);
                toastError()
            });
    };


    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationShema,
        onSubmit: (values, { resetForm }) => {
            setIsSubmitting(true);
            sendEmail(resetForm)



            // setMessageSent(false)

        }
    }
    );

    return (
        <form ref={form} onSubmit={formik.handleSubmit}>
            <Flex flexDir="column" alignItems="center">
                <FormControl
                    borderRadius="0.5rem"
                    border={`2px solid ${colors.primaryVariant}`}
                    marginBottom="1.2rem"
                    variant="floating"
                    w={["20rem", "22rem", "22rem", "22rem"]}
                    isInvalid={
                        formik.errors.name &&
                        formik.touched.name
                    }
                >
                    <Input
                        _invalid={{ border: "2px solid #a90909" }}
                        autoComplete="off"
                        onChange={formik.handleChange}
                        value={formik.values.name}
                        _hover={{ border: "2px solid transparent" }}
                        border="2px solid transparent"
                        padding="1rem"
                        w={["20rem", "22rem", "22rem", "22rem"]}
                        _focus={{ border: "2px solid transparent", outline: "none" }}
                        placeholder=" "
                        name="name"
                    />
                    <FormLabel
                        color="gray"
                    >
                        Name
                    </FormLabel>
                    {/* <Text>{formik.errors.name}</Text> */}
                </FormControl>

                <FormControl
                    w={["20rem", "22rem", "22rem", "22rem"]}
                    borderRadius="0.5rem"
                    border={`2px solid ${colors.primaryVariant}`}
                    marginBottom="1.2rem"
                    variant="floating"
                    // isRequired
                    isInvalid={
                        formik.errors.email &&
                        formik.touched.email
                    }
                >
                    <Input
                        w={["20rem", "22rem", "22rem", "22rem"]}
                        autoComplete="off"
                        _invalid={{ border: "2px solid #a90909" }}
                        value={formik.values.email}
                        _hover={{ border: "2px solid transparent" }}
                        border="2px solid transparent"
                        padding="1rem"

                        type="email"
                        _focus={{ backgroundColor: colors.background, border: "2px solid transparent", outline: "none" }}
                        placeholder=" "
                        name="email"
                        onChange={formik.handleChange} />
                    <FormLabel
                        color="gray"
                    >
                        Email
                    </FormLabel>

                </FormControl>

                <FormControl
                    w={["20rem", "22rem", "22rem", "22rem"]}
                    marginBottom="0.5rem"
                    borderRadius="0.5rem"
                    border={`2px solid ${colors.primaryVariant}`}
                    variant="floating"
                    // isRequired
                    isInvalid={
                        formik.errors.message &&
                        formik.touched.message
                    }

                >
                    <Textarea
                        w={["20rem", "22rem", "22rem", "22rem"]}
                        _invalid={{ border: "2px solid #a90909" }}
                        autoComplete="off"
                        value={content}
                        resize="none"
                        _hover={{ border: "2px solid transparent" }}
                        border="2px solid transparent"
                        padding="1.5rem"
                        h="15rem"
                        _focus={{ border: "1px solid transparent", outline: "none" }}
                        placeholder=" "
                        name="message"
                        onChange={(e) => {
                            formik.handleChange(e)
                            handleLimitChange(e)


                        }} />
                    <FormLabel
                        color="gray"
                    >
                        Message
                    </FormLabel>

                </FormControl>
                <Flex gap={["1rem", "1rem", "0", "0"]} alignItems="center" flexDir={["column", "column", "row", "row"]} w="100%" justifyContent={["center", "center", "space-between", "space-between"]}>
                    {isDisabled ? (
                        <Flex textAlign="start">
                            <Text fontSize="13px" color="#b53e3e">
                                Can't contain more then 500 chars.
                            </Text>
                        </Flex>
                    ) : (
                        <Flex textAlign="start">
                            <Text color={colors.primaryLight} w="100%" fontSize="13px">
                                Remaining{" "}
                                {characterLimit - content.length}
                                {` characters`}
                            </Text>
                        </Flex>
                    )}


                    <Flex justifyContent="flex-end">
                        <AppButtonPrimary
                            size="sm"
                            display="flex"
                            loadingText="Sending"
                            isLoading={isSubmitting}
                            isDisabled={content.length === 499}
                            justifyContent="center"
                            alignItems="center"
                            text="Send Message"
                            disabled={isSubmitting}
                            type="submit"
                        />
                    </Flex>
                </Flex>
            </Flex>
        </form>
    );


}


