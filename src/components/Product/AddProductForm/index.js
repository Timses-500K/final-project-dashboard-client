import {
	Button,
	FormControl,
	HStack,
	Input,
	Modal,
	ModalBody,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	NumberInput,
	NumberInputField,
	Text,
	Textarea,
} from "@chakra-ui/react";
import React, { useState } from "react";

const AddProductForm = ({ isOpen, onClose, onSubmit }) => {
	const [item, setItem] = useState({
		itemName: "",
		description: "",
		price: "",
		imageUrl: "",
		stock: "",
		color: "",
		visibility: "True",
		size: "42",
		categoryName: "Jordan",
	});

	const onItemChange = (e, property) => {
		e.preventDefault();
		item[property] = e.target.value;
		setItem({ ...item });
	};

	const onNumberChange = (value, property) => {
		item[property] = value;
		setItem({ ...item });
	};

	const testclick = () => {
		console.log(item);
	};

	return (
		<Modal size={"6xl"} isOpen={isOpen} onClose={onClose}>
			<ModalOverlay />
			<ModalContent>
				<ModalHeader
					m={4}
					textAlign={"center"}
					fontWeight={"bold"}
					fontSize={"3xl"}
				>
					Add Product
				</ModalHeader>
				<ModalBody p={"0px 80px"}>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Product Name</Text>
							<Input
								placeholder="Product Name"
								size="md"
								onChange={(e) => onItemChange(e, "itemName")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Price</Text>
							<NumberInput
								size="md"
								width={"100%"}
								onChange={(e) => onNumberChange(e, "price")}
							>
								<NumberInputField placeholder="Price" />
							</NumberInput>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Stock</Text>
							<NumberInput
								size="md"
								width={"100%"}
								onChange={(e) => onNumberChange(e, "stock")}
							>
								<NumberInputField placeholder="Stock" />
							</NumberInput>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Color</Text>
							<Input
								placeholder="Color"
								size="md"
								onChange={(e) => onItemChange(e, "color")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Image</Text>
							<Input
								placeholder="Image"
								size="md"
								onChange={(e) => onItemChange(e, "imageUrl")}
							/>
						</HStack>
					</FormControl>
					<FormControl m={"24px 0px"} isRequired>
						<HStack>
							<Text w={350}>Description</Text>
							<Textarea
								placeholder="Description"
								size={"md"}
								resize={"vertical"}
								onChange={(e) => onItemChange(e, "description")}
							/>
						</HStack>
					</FormControl>
				</ModalBody>

				<ModalFooter>
					<Button colorScheme="blue" mr={3} onClick={(e) => onSubmit(e, item)}>
						Add Product
					</Button>
					<Button variant="ghost" onClick={onClose}>
						Cancel
					</Button>
				</ModalFooter>
			</ModalContent>
		</Modal>
	);
};

export default AddProductForm;
