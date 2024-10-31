import { useRef, useState } from "react";
import { Button, Modal } from "@mantine/core";
import { updateLinkLogic } from "../../logic/links.ts";
import { useFilePreview } from "../../hooks/useFilePreview.tsx";

interface EditProps {
  id: string;
  defaultLink: string;
  reset: () => void;
  opened: boolean;
  onClose: () => void;
}

export default function Edit({
  id,
  defaultLink,
  reset,
  opened,
  onClose,
}: EditProps) {
  const [link, setLink] = useState<string>(defaultLink);
  const [error, setError] = useState<string>("");
  const [fileState, setFileState] = useState<File | null>(null);

  const file = useRef<HTMLInputElement | null>(null);

  const preview = useFilePreview(fileState);
  const submitLink = async () => {
    const res = await updateLinkLogic(id, link, fileState);
    if (res.code === 11000) {
      setError("Link already exists");
      return;
    }
    reset();
  };

  return (
    <div>
      <Modal opened={opened} onClose={onClose} title="Add link">
        <input
          type="text"
          value={link}
          onChange={(e) => setLink(e.target.value)}
          style={{ width: "100%" }}
        />

        <input
          type="file"
          name="file"
          id="file"
          className="inputfile"
          ref={file}
          onChange={(e) =>
            setFileState(
              e.currentTarget.files ? e.currentTarget.files[0] : null,
            )
          }
        />

        {preview && (
          <img
            src={preview}
            alt="preview"
            style={{
              width: "300px",
              height: "300px",
            }}
          />
        )}
        {error && <p style={{ color: "red" }}>{error}</p>}
        <Button onClick={() => submitLink()}>Submit</Button>
      </Modal>
    </div>
  );
}
