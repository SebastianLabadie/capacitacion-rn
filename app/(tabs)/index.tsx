import { Box, Text } from "@gluestack-ui/themed";
import {
	AddIcon,
	Button,
	ButtonIcon,
	ButtonText,
	Alert,
	useToast,
	CheckboxIcon,
	CheckIcon,
	Checkbox,
	Toast,
	CheckboxLabel,
	AlertIcon,
	CheckboxIndicator,
	Spinner,
	AlertText,
	InfoIcon,
	Progress,
	ProgressFilledTrack,
	Input,
	InputField,
	Modal,
	ModalBackdrop,
	ModalContent,
	ModalHeader,
	Heading,
	ModalCloseButton,
	Icon,
	CloseIcon,
	ModalBody,
	ModalFooter,
} from "@gluestack-ui/themed";
import { StyleSheet, View } from "react-native";

export default function TabOneScreen() {
	const toast = useToast();

	function mostrarToast() {
		toast.show({
			placement: "top",
			render: ({ id }) => {
				const toastId = "toast-" + id;
				return (
					<Toast nativeID={toastId} action="attention" variant="solid">
						<Box>
							<Text bold>SOY UN TOAST</Text>
						</Box>
					</Toast>
				);
			},
		});
	}

	return (
		<View>
			<Button marginTop={20} variant="solid" onPress={mostrarToast}>
				<ButtonText>Generar Mensaje</ButtonText>
				<ButtonIcon as={AddIcon} />
			</Button>

			<Box borderWidth={1} width={"100%"} mt={10} p={10}>
				<Text bold fontSize={20}>
					FEEDBACK
				</Text>

				<Alert mx="$2.5" action="success" variant="accent">
					<AlertIcon as={InfoIcon} mr="$3" />
					<AlertText>
						We have updated our terms of service. Please review and accept to continue using our service.
					</AlertText>
				</Alert>

				<Progress value={10} w={300} size="md">
					<ProgressFilledTrack />
				</Progress>

				<Spinner size="large" />
			</Box>

			<Box>
				<Text bold fontSize={20}>
					FORM
				</Text>
				{/* <Checkbox size="md">
					<CheckboxIndicator mr="$2">
						<CheckboxIcon as={CheckIcon} />
					</CheckboxIndicator>
					<CheckboxLabel>Label</CheckboxLabel>
				</Checkbox> */}

				<Input variant="outline" size="md" onChangeText={(text: any) => console.log(text)}>
					<InputField placeholder="Enter Text here" />
				</Input>

				<Modal
					isOpen={false}
					onClose={() => {
						//setShowModal(false)
					}}
				>
					<ModalBackdrop />
					<ModalContent>
						<ModalHeader>
							<Heading size="lg">Engage with Modals</Heading>
							<ModalCloseButton>
								<Icon as={CloseIcon} />
							</ModalCloseButton>
						</ModalHeader>
						<ModalBody>
							<Text>
								Elevate user interactions with our versatile modals. Seamlessly integrate notifications, forms,
								and media displays. Make an impact effortlessly.
							</Text>
						</ModalBody>
						<ModalFooter>
							<Button
								variant="outline"
								size="sm"
								action="secondary"
								mr="$3"
								onPress={() => {
									//setShowModal(false)
								}}
							>
								<ButtonText>Cancel</ButtonText>
							</Button>
							<Button
								size="sm"
								action="positive"
								borderWidth="$0"
								onPress={() => {
									///setShowModal(false)
								}}
							>
								<ButtonText>Explore</ButtonText>
							</Button>
						</ModalFooter>
					</ModalContent>
				</Modal>
			</Box>
		</View>
	);
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		alignItems: "center",
		justifyContent: "center",
	},
	title: {
		fontSize: 20,
		fontWeight: "bold",
	},
	separator: {
		marginVertical: 30,
		height: 1,
		width: "80%",
	},
});
