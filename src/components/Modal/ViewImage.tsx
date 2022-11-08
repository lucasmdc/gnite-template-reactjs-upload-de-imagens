import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  Image,
  Link,
} from '@chakra-ui/react';

interface ModalViewImageProps {
  isOpen: boolean;
  onClose: () => void;
  imgUrl: string;
}

export function ModalViewImage({
  isOpen,
  onClose,
  imgUrl,
}: ModalViewImageProps): JSX.Element {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bgColor="pGray.800">
        <ModalBody padding={0} borderEndRadius={1.5}>
          <Image src={imgUrl} />
        </ModalBody>
        <ModalFooter justifyContent="left" paddingX={2.5} paddingY={2}>
          <Link
            href={imgUrl}
            target="_blank"
            fontSize="sm"
            lineHeight="shorter"
          >
            Abrir original
          </Link>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
