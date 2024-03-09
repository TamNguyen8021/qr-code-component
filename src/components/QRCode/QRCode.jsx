import Card from "@/components/Card";
import QRCodeImage from "@/assets/image-qr-code.png";

export const QRCode = () => {
	return (
		<Card
			imageUrl={QRCodeImage}
			imageDescription="Frontend Mentor QR Code"
			title="Improve your front-end skills by building projects"
			content="Scan the QR code to visit Frontend Mentor and take your coding skills to the next level"
		/>
	);
};
