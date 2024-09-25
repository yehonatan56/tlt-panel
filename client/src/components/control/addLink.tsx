import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import { Modal, Button } from "@mantine/core";
import { addLinkLogic } from "../../logic/links.ts";

const AddLink = () => {
  const [opened, { open, close }] = useDisclosure(false);
  const [link, setLink] = useState<string>("");
  const submitLink = async () => {
    console.log(link);
    const res = await addLinkLogic(link);
    console.log(res);
    close();
  };
  return (
    <>
      <Modal opened={opened} onClose={close} title="Add link">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ width: "100%" }}
        />
        <Button onClick={() => submitLink()}>Submit</Button>
      </Modal>

      <Button onClick={open}>Add link</Button>
    </>
  );
};

export default AddLink;
