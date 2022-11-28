
import { FormControl, Input, Textarea, FormLabel, Flex, useToast, Box, Heading, Text } from '@chakra-ui/react';
import { useFormik } from "formik";


import { colors } from '../../styles/colors';
import AppButtonPrimary from '../../components/AppButtonPrimary';
import { validationShema } from '../../data/validationSchema';
import { useRef, useState } from 'react';



export default function DisplayForm() {
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [messageSent, setMessageSent] = useState(false)
    const [isDisabled, setIsDisabled] = useState(false);
    const [content, setContent] = useState("");
    const characterLimit = 500;

    const toastIdRef = useRef()
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
    function toastError(error) {

        toastIdRef.current = toast({
            description: 'some text', position: 'top-center', render: () => (
                <Box marginTop="10rem" textAlign="center" color='white' p={3} bg={colors.primaryVariant} borderRadius="0.6rem" border={`1px solid ${colors.primary}`}>
                    <Heading fontSize="1rem" as="h3">Something Went Wrong</Heading>
                    <Text fontSize="0.8rem">{error}</Text>
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



    const formik = useFormik({
        initialValues: {
            name: '',
            email: '',
            message: '',
        },
        validationSchema: validationShema,
        onSubmit: (values, { resetForm }) => {
            setIsSubmitting(true);
            console.log("lalala")

            const timer = setTimeout(() => {

                resetForm({ values: "" });
                toastSuccsess()
                console.log(values)
                setIsSubmitting(false);
                setMessageSent(true)
                // setMessageSent(false)


            }, 900);
            return () => clearTimeout(timer);
        }
    }
    );

    return (
        <form onSubmit={formik.handleSubmit}>

            <FormControl
                borderRadius="0.5rem"
                border={`2px solid ${colors.primaryVariant}`}
                marginBottom="1.2rem"
                variant="floating"
                // isRequired
                isInvalid={
                    formik.errors.name &&
                    formik.touched.name
                }
            >
                <Input
                    _invalid={{ border: "2px solid #a90909" }}
                    autocomplete="off"
                    onChange={formik.handleChange}
                    value={formik.values.name}
                    _hover={{ border: "2px solid transparent" }}
                    border="2px solid transparent"
                    padding="1.5rem"
                    w="30rem"
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
                    autocomplete="off"
                    _invalid={{ border: "2px solid #a90909" }}
                    value={formik.values.email}
                    _hover={{ border: "2px solid transparent" }}
                    border="2px solid transparent"
                    padding="1.5rem"
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

                marginBottom="1.2rem"
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
                    _invalid={{ border: "2px solid #a90909" }}
                    autocomplete="off"
                    value={content}
                    resize="none"
                    _hover={{ border: "2px solid transparent" }}
                    border="2px solid transparent"
                    padding="1.5rem"
                    h="20rem"
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
            {isDisabled ? (
                <Text fontSize="15px" color="#b53e3e">
                    Can't contain more then 500 chars.
                </Text>
            ) : (
                <Text w="100%" fontSize="15px">
                    Remaining{" "}
                    {characterLimit - content.length}
                    {` characters`}
                </Text>
            )}


            <Flex justifyContent="flex-end">
                <AppButtonPrimary
                    isDisabled={content.length === 499}
                    justifyContent="center"
                    alignItems="center"
                    text="Send Message"
                    disabled={isSubmitting}
                    type="submit"
                />
            </Flex>
        </form>
    );


}












// const [isDisabled, setIsDisabled] = useState(false);

// const [submitted, setSubmitted] = useState(false);
// const [isSubmitting, setIsSubmitting] = useState(false);
// const [content, setContent] = useState("");
// const characterLimit = 500;


// const handleLimitChange = (event) => {
//     if (characterLimit - event.target.value.length >= 0) {
//         setContent(event.target.value);
//         setIsDisabled(false);
//     } else if (characterLimit - event.target.value.length <= 0) {
//         setIsDisabled(true);
//     }
// };



// const initialValues = {
//     name: '',
//     email: '',
//     message: '',
// }

// const onSubmit = (values) => {
//     console.log(values)
// }

// return (

//     <Formik
//         initialValues={initialValues}
//         validationSchema={validationShema}
//         onSubmit={(values, { resetForm }) => {
//             setIsSubmitting(true);
//             const timer = setTimeout(() => {
//                 resetForm({ values: "" });
//                 setSubmitted(true);
//                 setContent("");
//                 onSubmit(values)
//                 setIsSubmitting(false);

//             }, 900);
//             return () => clearTimeout(timer);
//         }}
//     >
//         {(values, touched) => {
//             return (
//                 <Form>


//                     <Field name="name">
//                         {({ field, form }) => {
//                             return (
//                                 <>
//                                     <FormControl
//                                         borderRadius="0.5rem"
//                                         border={`2px solid ${colors.primaryVariant}`}
//                                         variant="floating"
//                                         // isRequired
//                                         isInvalid={
//                                             values.errors.name &&
//                                             values.touched.name
//                                         }
//                                     >
//                                         <Input
//                                             autoComplete="off"
//                                             _focusVisible={{
//                                                 outline: "none",
//                                             }}
//                                             {...field}
//                                             border="none"
//                                             onChange={values.handleChange}
//                                             w={["300px", "318px", "607px", "607px"]}
//                                             h={["100%", "100%", "55px", "63px"]}
//                                             placeholder="Full Name"
//                                             _placeholder={{ color: "gray" }}
//                                             id="name"
//                                             name="name"

//                                         />
//                                     </FormControl>
//                                     <Box marginBottom="1.2rem"
//                                         paddingLeft="10px" color="red.50">
//                                         <ErrorMessage name="name" />
//                                     </Box>
//                                 </>

//                             );
//                         }}
//                     </Field>


//                     <Field name="email">
//                         {({ field, form }) => {
//                             return (
//                                 <FormControl
//                                     // isRequired
//                                     isInvalid={
//                                         values.errors.email &&
//                                         values.touched.email
//                                     }
//                                 >
//                                     <Input
//                                         autoComplete="off"
//                                         _focusVisible={{
//                                             outline: "none",
//                                         }}
//                                         border="none"
//                                         {...field}
//                                         onChange={values.handleChange}
//                                         // marginBottom="19px"
//                                         borderRadius="20px"
//                                         w={["300px", "318px", "607px", "607px"]}
//                                         h={["100%", "100%", "55px", "63px"]}
//                                         placeholder="Email address"
//                                         _placeholder={{ color: "gray" }}
//                                         id="email"
//                                         name="email"
//                                         type="email"
//                                         fontSize={[
//                                             "15px",
//                                             "15px",
//                                             "20px",
//                                             "20px",
//                                         ]}
//                                     />
//                                     <Box paddingLeft="10px" color="red.50">
//                                         <ErrorMessage name="email" />
//                                     </Box>
//                                 </FormControl>
//                             );
//                         }}
//                     </Field>



//                     <Field
//                         name="message"
//                         onChange={values.handleChange}
//                     >
//                         {({ field, form }) => {
//                             return (

//                                 <Flex
//                                     w={["300px", "318px", "607px", "607px"]}
//                                     borderRadius="20px"
//                                     border="1px solid #80808087"
//                                     flexDir="column"
//                                 >
//                                     <FormControl
//                                         // isRequired
//                                         isInvalid={
//                                             values.errors.message &&
//                                             values.touched.message
//                                         }
//                                     >
//                                         <Flex>
//                                             <Textarea
//                                                 resize="none"
//                                                 _focusVisible={{
//                                                     outline: "none",
//                                                 }}
//                                                 _hover={{ border: "2px solid transparent" }}
//                                                 border="2px solid transparent"
//                                                 padding="1.5rem"
//                                                 h="20rem"
//                                                 _focus={{ border: "1px solid transparent" }}
//                                                 placeholder=" "
//                                                 {...field}
//                                                 value={content}
//                                                 onChange={(e) => {
//                                                     handleLimitChange(e);
//                                                     values.handleChange(e);
//                                                 }}
//                                                 id="message"
//                                                 isAcctive

//                                             />
//                                         </Flex>
//                                     </FormControl>


//                                     <Box color="red.50">
//                                         <ErrorMessage name="message" />
//                                     </Box>
//                                     <Flex
//                                         textAlign={[
//                                             "center",
//                                             "center",
//                                             "left",
//                                             "initial",
//                                         ]}
//                                     >
//                                         {isDisabled ? (
//                                             <Text fontSize="15px" color="#b53e3e">
//                                                 Can't contain more then 500 chars.
//                                             </Text>
//                                         ) : (
//                                             <Text w="100%" fontSize="15px">
//                                                 Remaining{" "}
//                                                 {characterLimit - content.length}
//                                                 {` characters`}
//                                             </Text>
//                                         )}
//                                     </Flex>

//                                 </Flex>
//                             );
//                         }}
//                     </Field>



//                     <Button
//                         disabled={isSubmitting}
//                         isLoading={isSubmitting}
//                         type="submit"
//                         loadingText="Sending"
//                         color="white"
//                         borderRadius="20px"
//                         fontWeight="700"
//                         fontSize={["18px", "18px", "25px", "25px"]}
//                         w={["120px", "200px", "200px", "200px"]}
//                         h={["36px", "55px", "55px", "55px"]}
//                         isDisabled={content.length === 500}
//                         backgroundColor="purple.50"
//                         _disabled={{ backgroundColor: "#4e67eb9c" }}
//                         _focus={{ backgroundColor: "purple.50" }}
//                     >
//                         Send
//                     </Button>
//                 </Form>
//             );
//         }}
//     </Formik>
// )